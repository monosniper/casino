const ChatService = require('../services/chat-service');

class ChatController {
    async getConversations(req, res, next) {
        try {
            const users = await ChatService.getConversationsByUser(req.user);
            return res.json(users);
        } catch (e) {
            next(e);
        }
    }

    async getMessages(req, res, next) {
        try {
            const messages = await ChatService.getMessages(req.params.conversation_id);
            return res.json(messages);
        } catch (e) {
            next(e);
        }
    }

    async sendMessage(req, res, next) {
        try {
            const message = await ChatService.sendMessage(req.body.conversation_id, req.user, req.body.message);
            return res.json([message]);
        } catch (e) {
            next(e);
        }
    }

    async setWritingUser(req, res, next) {
        try {
            await ChatService.setWritingUser(req.body.conversation_id, req.body.user_id);
            return res.sendStatus(200);
        } catch (e) {
            next(e);
        }
    }
}

module.exports = new ChatController();