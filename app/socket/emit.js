/**
 * socket.io configuration
 */
import socketioJwt from 'socketio-jwt'
import config from '../../config'

export default io => {
    // JWT middleware for socket.io
    io.use(socketioJwt.authorize({
        secret: config.JWT_SECRET,
        handshake: true
    }))

    io.on('connection', (socket) => {
        

        


    })
}