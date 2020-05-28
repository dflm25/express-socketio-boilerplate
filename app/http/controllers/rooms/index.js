/**
 * Rooms controller
 */

import { create } from '../../../services/mongo/room';

exports.store = async function (req, res) {
    const { name } = req.body;
    const { io } = req.app

    try {
        let response = await create(name);
    } catch (err) {
        console.log('El error', err.message)
    }
    // console.log('Response', response);
    // io.to('all-users').emit('newTodo', todo)
    res.status(200).send('Autorizado....');
}