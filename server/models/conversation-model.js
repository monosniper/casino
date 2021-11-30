const {Schema, model} = require('mongoose');

const ConversationSchema = new Schema({
    public: {type: Boolean, default: false},
    isGroup: {type: Boolean, default: false},
    title: {type: String},
    participants: [{type: Schema.Types.ObjectId, ref: 'User'}],
    writingUsers: [{type: String}],
    messages: [{type: Schema.Types.ObjectId, ref: 'Message'}],
    lastMessage: {type: Schema.Types.ObjectId, ref: 'Message'},
}, {timestamps: true});

module.exports = model('Conversation', ConversationSchema);