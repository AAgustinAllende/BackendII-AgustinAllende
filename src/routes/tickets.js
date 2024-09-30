import { Router } from 'express';
import { createTicket } from '../controllers/ticketController.js';
import { isUser } from '../middlewares/authMiddleware.js';

const router = Router();

// Ruta para crear un nuevo ticket
router.post('/', isUser, createTicket);


export default router;
