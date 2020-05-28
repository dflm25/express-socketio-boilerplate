/**
 * services or queries for mongodb room
 */

import { Room } from '../../models/mongo';

export const create = (name) => {
    return new Promise((resolver, reject) => {
        Room.create({ name }, function (error, doc) {
            if (error) reject(error);
            resolver(doc)
        });
    });
}

/* export const update = (name) => {
    return new Promise((resolver, reject) => {
        
    });
}*/
