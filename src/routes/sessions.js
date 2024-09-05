import express from 'express';
import { loginUser, registerUser, currentUser } from '../controllers/authController.js';
import passport from 'passport';

const router = express.Router();

router.post('/login', loginUser);

router.post('/register', registerUser);

// Ruta para obtener el usuario actual
router.get('/current', passport.authenticate('jwt', { session: false }), currentUser);

export default router;
