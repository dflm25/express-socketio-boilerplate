/**
 * Auth app routes
 */
import express from 'express';
import messageController from '../app/http/controllers/messages';
import { createMessageRules, validate } from '../app/http/requests';

const router = express.Router();

router.get('/room/:id', messageController.getByRoomId);
router.post('/create', createMessageRules(), validate, messageController.store);
// router.put('/update', roomController.update);
// router.delete('/:id', roomController.destroy);

export default router