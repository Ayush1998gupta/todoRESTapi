import express from 'express';
import checkAuth from '../utils/checkAuth.js';
import authRoutes from './auth.js';
import usersRoutes from './users.js';
import tasksRoutes from './tasks.js';

const router = express.Router();

// Auth Routes
router.use('/auth', authRoutes);
// user Routes
router.use('/users', checkAuth, usersRoutes);
// tasks Routes
router.use('/tasks', checkAuth, tasksRoutes);

export default router;
