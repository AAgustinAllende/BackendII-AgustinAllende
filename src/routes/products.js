import { Router } from 'express';
import { createProduct, updateProduct, deleteProduct, getProducts } from '../controllers/productController.js';
import { isAdmin } from '../middlewares/authMiddleware.js';

const router = Router();

// obtener todos los productos
router.get('/', getProducts);

// crear un nuevo producto (solo lo puede realizar el administrador)
router.post('/', isAdmin, createProduct);

// actualizar un producto (solo lo puede realizar el administrador)
router.put('/:pid', isAdmin, updateProduct);

//  eliminar un producto (lo realiza el administrador)
router.delete('/:pid', isAdmin, deleteProduct);


export default router;
