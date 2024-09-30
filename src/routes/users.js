import { Router } from 'express';
const router = Router();

// Ejemplo de una ruta de usuario
router.get('/', (req, res) => {
    res.send('Lista de usuarios');
});

export default router;
