import $api from "../http";

export default class ChatService {
    static async fetchConversations() {
        return await $api.get('conversations');
    }

    static async sendMessage(conversation_id, message) {
        return await $api.post('message', {
            conversation_id, message
        });
    }

    static async getMessages(conversation_id) {
        return await $api.get('messages/' + conversation_id);
    }

    static async setWritingUser(conversation_id, user_id) {
        return await $api.post('/conversations/set-writing-user', {
            conversation_id, user_id
        });
    }
}