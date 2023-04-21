import express from 'express';
import {
  isLoggedIn, login, logout, register,
} from '../controllers/auth.js';

const router = express.Router();

// api/auth/login  POST request for login user
router.post('/login', login);

// api/auth/register POST request for register new user
router.post('/register', register);

// api/auth/logout  GET request for logout
router.get('/logout', logout);

// api/auth/register  GET request for checking is user logged in
router.get('/is_logged_in', isLoggedIn);

export default router;
