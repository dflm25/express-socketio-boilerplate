/**
 * Auth app routes
 */
import express from 'express';
import dashboardController from '../app/http/controllers/dashboard';

const router = express.Router();

router.get('/', dashboardController.index);

export default router