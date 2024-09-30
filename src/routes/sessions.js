import { Router } from 'express';
import { loginUser, currentUser } from '../controllers/authController.js';

const router = Router();

//  iniciar sesión
router.post('/login', loginUser);

// obtener el usuario actual
router.get('/current', currentUser);


export default router;
