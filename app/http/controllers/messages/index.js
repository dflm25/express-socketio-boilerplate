/**
 * Rooms controller
 */

import { create } from '../../../services/mongo/message';

exports.store = async function (req, res) {
    const { message, room, user, type } = req.body;
    const { io } = req.app
    let response

    try {
        response = await create({ room_id: room, parent_message: '', type: type, content: message, owner: JSON.parse(user) });
    } catch (err) {
        console.log('El error', err.message)
        response = err.message
    }
    
    io.to(room).emit('render message', message)
    res.status(200).send('Autorizado....');
}

exports.getByRoomId = async function (req, res) {
    
}