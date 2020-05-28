/**
 * Request validation
 */

import { body, validationResult } from 'express-validator';

const createRoomRules = () => {
    return [
      body('name').not().isEmpty()
    ]
}

export default createRoomRules;