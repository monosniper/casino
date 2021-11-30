const MessageModel = require('../models/message-model');

module.exports = class ConversationDto {
    id;
    participants;
    messages;
    writingUsers;
    lastMessage;

    constructor(model) {
        this.id = model._id;
        this.participants = model.participants;
        this.messages = model.messages;
        this.writingUsers = model.writingUsers;

        this.lastMessage = MessageModel.findById(model.messages.slice(-1)).exec();
    }
}