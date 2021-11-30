const {Schema, model} = require('mongoose');

const MessageSchema = new Schema({
    conversation: {type: Schema.Types.ObjectId, ref: 'Conversation'},
    author: {type: Schema.Types.ObjectId, ref: 'User'},
    content: {type: String, required: true},
}, {timestamps: true});

module.exports = model('Message', MessageSchema);