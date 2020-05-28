/**
 * Login controller
 */

import jwt from 'jsonwebtoken';
import md5 from 'md5';
import config from '../../../../config';
import { getUserEmailPassword } from '../../../services/crm/users'

exports.login = async function (req, res) {
    const { email, password } = req.body
    const encrypted = md5(password);
    const { data, type, status } = await getUserEmailPassword(email, encrypted);
    
    if(!data) return res.status(400).send('User no found');

    const tokenData = { id: data.id };
    const token = jwt.sign(tokenData, config.JWT_SECRET, { expiresIn: '14d' });

    res.status(status).json({ data: data, token })
}

exports.signup = function (req, res) {
    res.status(200).send('Something broke!');
}