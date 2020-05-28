/**
 * Request validation
 */

import { body, validationResult } from 'express-validator';

const createMessageRules = () => {
    return [
      body('message').not().isEmpty(),
      body('room').not().isEmpty(),
      body('user').not().isEmpty(),
    ]
}

export default createMessageRules;