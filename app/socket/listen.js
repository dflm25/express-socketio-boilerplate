/**
 * socket.io configuration
 */
import socketioJwt from 'socketio-jwt';
import config from '../../config';
import { createMessage } from '../services/mongo/message'

const listen = io => {
    // JWT middleware for socket.io
    io.use(socketioJwt.authorize({
        secret: config.JWT_SECRET,
        handshake: true
    }))

    // Fires when a user is connected, This only happens when a user authenticates (after login)
    io.on('connection', (socket) => {
        const userId = socket.decoded_token.id
        // console.log('a user connected', socket.id)
        // console.log('connection user_id: ', userId);
        // create a room with userId
        // useful for sending data to a single online user
        socket.join(userId)
        // join all-users room. we use this to send the changes to all online users
        socket.join('all-users');

        socket.on('send message to room', function (data) {
            // console.log('send message to room', data)
            // Save the message and emit to other rooms members
            // createMessage(data);
            // socket.to(data.room).emit('render message', data);
            io.in(data.room).emit('render message', data); // temporal por pruebas
        })

        socket.on('join to room', function (room) {
            socket.join(room)
        })
        
        socket.on('disconnect', () => {
            console.log('a user disconnected', userId)
        })
    })
}

export default listen;