// src/controllers/productController.js
import productService from '../services/productService.js';
import { productDTO } from '../DTOs/productDTO.js';

export const createProduct = async (req, res) => {
  try {
    const product = await productService.createProduct(req.body);
    res.status(201).json(productDTO(product));
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getProducts = async (req, res) => {
  try {
    const products = await productService.getAllProducts();
    res.status(200).json(products.map(productDTO));
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedProduct = await productService.updateProduct(id, req.body);
    res.status(200).json(productDTO(updatedProduct));
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    await productService.deleteProduct(id);
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
