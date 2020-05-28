/**
 * Auth app routes
 */
import express from 'express';
import loginController from '../app/http/controllers/auth/login';

const router = express.Router();

router.post('/login', loginController.login);
router.post('/signup', loginController.signup);

export default router