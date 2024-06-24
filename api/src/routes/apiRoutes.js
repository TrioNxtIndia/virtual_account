import express from 'express';
import authController from '../controllers/auth.controller.js';
import userController from '../controllers/user.controller.js';
import { verifyUser } from '../_middleware/verifyToken.js';

const router = express.Router();

// Auth Routes
router.route('/admin').post(authController.saveAdmin);
router.route('/user').post(authController.saveUser);
router.route('/login').post(authController.login);

// User Routes
router.route('/user/:id')
.get(verifyUser, userController.getById)
.put(verifyUser, userController.update)
.delete(verifyUser, userController.remove);

export default router;