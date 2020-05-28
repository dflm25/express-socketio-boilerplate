/**
 * Users services
 */
import mysql from '../../../config/mysql';

export const getUserEmailPassword = (email, password) => {

    return new Promise((resolver, reject) => {
        mysql.crm.users.findOne({ 
            attributes: ['id', 'user_name' ], 
            where: { user_name: email, user_hash: password }
        }).then(users => {
            resolver({ status: 200, type: 'success', message: '', data: users });
        }).catch(err => {
            reject({ status: 500, type: 'danger', message: err.message || 'Some error occurred while retrieving user.', data: [] })
        });
    });

}