import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../config/config.js';

// verifica si el usuario está autenticado
export const authMiddleware = (req, res, next) => {
  const token = req.cookies.token; 

  if (!token) {
    return res.status(401).json({ message: 'Autorización denegada' });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded; 
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Token inválido' });
  }
};

// verifica si el usuario es administrador
export const adminMiddleware = (req, res, next) => {
  if (req.user.role !== 'admin') {
    return res.status(403).json({ message: 'Acceso denegado' });
  }
  next();
};

// verifica si el usuario es un cliente
export const userMiddleware = (req, res, next) => {
  if (req.user.role !== 'user') {
    return res.status(403).json({ message: 'Acceso restringido para usuarios' });
  }
  next();
};
