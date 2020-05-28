/**
 * Auth app routes
 */
import express from 'express';
import roomController from '../app/http/controllers/rooms';
import { createRoomRules, validate } from '../app/http/requests';

const router = express.Router();

// router.get('/:id', roomController.getById);
router.post('/create', createRoomRules(), validate, roomController.store);
// router.put('/update', roomController.update);
// router.delete('/:id', roomController.destroy);

export default router