/**
 * MongoDB rooms model
 */
import mongo from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

const MessageSchema = new mongo.Schema({
    id: { 
        type: String, 
        default: uuidv4(),
        unique: true
    },
    room_id: {
        type: String,
    },
    parent_message: {
        type: String, 
        default: null
    },
    owner: { 
        type: {}
    },
    status: { 
        type: Boolean, 
        default: 1 
    },
    type: {
        type: String,
        enum : ['html', 'text', 'form', 'file'],
        default: 'O'
    },
    content: {
        type: String,
        default: null
    },
    createdAt: Number,
    updatedAt: Number,
}, { 
    strict: false, 
    emitIndexErrors: true,
    // Make Mongoose use Unix time (seconds since Jan 1, 1970)
    timestamps: { currentTime: () => Math.floor(Date.now() / 1000) }
}) 

const Message = mongo.model('Message', MessageSchema)

export default Message