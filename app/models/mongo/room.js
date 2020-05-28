/**
 * MongoDB rooms model
 */
import mongo from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

const RoomSchema = new mongo.Schema({
    id: { 
        type: String, 
        default: uuidv4() 
    },
    name: {
        type: String,
        unique: true
    },
    status: { 
        type: Boolean, 
        default: 1 
    },
    type: {
        type: String,
        enum : ['O', 'I', 'P'],
        default: 'O'
    }
}, { 
    strict: false, 
    emitIndexErrors: true 
}) 

const Room = mongo.model('Room', RoomSchema)

export default Room