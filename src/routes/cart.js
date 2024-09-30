import { Router } from 'express';
import { purchaseCart } from '../controllers/cartController.js';
import { isUser } from '../middlewares/auth.js';

const router = Router();

// Ruta para finalizar el proceso de compra del carrito
router.post('/:cid/purchase', isUser, purchaseCart); // Solo usuarios autenticados pueden acceder

export default router;
