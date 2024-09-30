
import userService from '../services/userService.js';
import jwt from 'jsonwebtoken';
import { config } from '../config/config.js';
import { userDTO } from '../DTOs/userDTO.js';

export const registerUser = async (req, res) => {
  try {
    const user = await userService.registerUser(req.body);
    res.status(201).json(userDTO(user));
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userService.getUserByEmail(email);

    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({ message: 'Credenciales incorrectas' });
    }

    const token = jwt.sign({ id: user._id, role: user.role }, config.JWT_SECRET, { expiresIn: '1h' });
    res.cookie('token', token, { httpOnly: true }).json({ token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const currentUser = (req, res) => {
  try {
    const token = req.cookies.token;
    if (!token) return res.status(401).json({ error: 'No autenticado' });

    const decoded = jwt.verify(token, config.JWT_SECRET);
    const user = userService.getUserById(decoded.id);
    res.json(userDTO(user));
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
