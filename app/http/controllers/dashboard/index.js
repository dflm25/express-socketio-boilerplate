/**
 * Rooms controller
 */
import path from 'path';

exports.index = async function (req, res) {
    res.sendFile(path.resolve('./public/views/index.html'));
}