import express from 'express';
import { getUserInfo, updateUser } from '../controllers/users.js';

const router = express.Router();

// api/users/me   GET request for getting user info
router.get('/me', getUserInfo);

// api/users/me   PUT request for updating user info
router.put('/me', updateUser);

export default router;
