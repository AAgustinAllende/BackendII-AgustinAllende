// src/repositories/CartRepository.js
import CartDAO from '../DAO/cartDAO.js';
import ProductRepository from './productRepository.js';

class CartRepository {
  constructor() {
    this.cartDAO = new CartDAO();
    this.productRepository = new ProductRepository();
  }

  async createCart(cartDTO) {
    return await this.cartDAO.create(cartDTO);
  }

  async findCartById(cartId) {
    return await this.cartDAO.findById(cartId);
  }

  async addProductToCart(cartId, productId, quantity) {
    const cart = await this.findCartById(cartId);
    const productIndex = cart.products.findIndex(p => p.product.toString() === productId);
    
    if (productIndex !== -1) {
      cart.products[productIndex].quantity += quantity;
    } else {
      cart.products.push({ product: productId, quantity });
    }

    return await this.cartDAO.update(cartId, cart);
  }

  async removeProductFromCart(cartId, productId) {
    const cart = await this.findCartById(cartId);
    cart.products = cart.products.filter(p => p.product.toString() !== productId);
    return await this.cartDAO.update(cartId, cart);
  }

  async finalizePurchase(cartId) {
    const cart = await this.findCartById(cartId);
    const unavailableProducts = [];
    let totalAmount = 0;

    for (let item of cart.products) {
      const productAvailable = await this.productRepository.checkStock(item.product, item.quantity);
      if (!productAvailable) {
        unavailableProducts.push(item.product);
      } else {
        await this.productRepository.reduceStock(item.product, item.quantity);
        totalAmount += item.quantity * item.price;
      }
    }

    cart.products = cart.products.filter(item => unavailableProducts.includes(item.product));
    await this.cartDAO.update(cartId, cart);
    return { totalAmount, unavailableProducts };
  }
}

export default CartRepository;
