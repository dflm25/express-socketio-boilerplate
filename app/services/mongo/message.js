/**
 * services or queries for mongodb room
 */

import { Message } from '../../models/mongo';

export const create = (data) => {
    return new Promise((resolver, reject) => {
        Message.create(data, function (error, doc) {
            if (error) reject(error);
            resolver(doc)
        });
    });
}