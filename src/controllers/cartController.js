// src/controllers/cartController.js
import cartService from '../services/cartService.js';
import { cartDTO } from '../DTOs/cartDTO.js';

export const getCart = async (req, res) => {
  try {
    const { id } = req.params;
    const cart = await cartService.getCartById(id);
    res.status(200).json(cartDTO(cart));
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const addProductToCart = async (req, res) => {
  try {
    const { cartId, productId } = req.params;
    const updatedCart = await cartService.addProductToCart(cartId, productId, req.body.quantity);
    res.status(200).json(cartDTO(updatedCart));
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const removeProductFromCart = async (req, res) => {
  try {
    const { cartId, productId } = req.params;
    const updatedCart = await cartService.removeProductFromCart(cartId, productId);
    res.status(200).json(cartDTO(updatedCart));
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const purchaseCart = async (req, res) => {
  try {
    const { cartId } = req.params;
    const purchaseResult = await cartService.purchaseCart(cartId);
    res.status(200).json(purchaseResult);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
