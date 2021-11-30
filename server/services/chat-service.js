const ConversationModel = require('../models/conversation-model');
const MessageModel = require('../models/message-model');
const UserModel = require('../models/user-model');
const ConversationDto = require('../dtos/conversation-dto');
const {ObjectId} = require("mongodb");
const {Schema} = require('mongoose');
const io = require('../index');
const EventEmitter = require('../helpers/event-emitter');
const UserDto = require("../dtos/user-dto");

class ChatService {
    async createConversation(participants) {
        const conversation = await ConversationModel.create({participants});
        const conversationData = new ConversationDto(conversation);

        return conversationData;
    }

    async getConversationsByUser(user) {
        // const monosniper = await UserModel.findOne({username: 'monosniper'}).exec();
        // const testuser = await UserModel.findOne({username: 'testuser'}).exec();
        // await ConversationModel.create({
        //     participants: [user.id, testuser._id],
        // });

        const conversations = await ConversationModel.find().populate([
            'writingUsers', 'participants',
            {
                path: 'lastMessage',
                populate: {path: 'author'}
            },
            {
                path: 'messages',
                populate: {path: 'author'}
            }
        ]).exec();

        return conversations.filter(conv => {
            return conv.participants.find(participant => {
                return participant.email === user.email
            });
        });
    }

    async getMessages(conversation_id) {
        const messages = await MessageModel.find({conversation: conversation_id}).populate('author').exec();

        return messages;
    }

    async sendMessage(conversation_id, user, content) {
        const message = await MessageModel.create({
            conversation: conversation_id,
            author: user.id,
            content,
        });

        const newMessage = await MessageModel.findById(message.id).populate(['author', 'conversation']).exec();

        const conversation = await ConversationModel.findById(conversation_id).populate({
            path: 'messages',
            populate: {path: 'author'}
        }).exec();

        await conversation.messages.push(message.id);
        conversation.lastMessage = message;
        await conversation.save(() => {
            EventEmitter.emit('socketEvent', {
                name: 'conversations.update'
            });
        });

        EventEmitter.emit('socketEvent', {
            name: 'message',
            data: newMessage
        });

        return newMessage;
    }

    async setWritingUser(conversation_id, username) {
        const conversation = await ConversationModel.findById(conversation_id).exec();

        await conversation.writingUsers.push(username);
        await conversation.save(() => {
            EventEmitter.emit('socketEvent', {
                name: 'conversations.update'
            });
        });

        await setTimeout(async () => {
            const writingUsers = await conversation.writingUsers.filter(user => user !== username);
            await conversation.update({
                writingUsers
            });

            EventEmitter.emit('socketEvent', {
                name: 'conversations.update'
            });
        }, 3000);
    }
}

module.exports = new ChatService();