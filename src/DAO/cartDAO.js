import Cart from '../models/Cart.js';

class CartDAO {
  async createCart(cartData) {
    const cart = new Cart(cartData);
    return await cart.save();
  }

  async getCartById(id) {
    return await Cart.findById(id).populate('products.product');
  }

  async updateCart(id, updateData) {
    return await Cart.findByIdAndUpdate(id, updateData, { new: true });
  }

  async addProductToCart(cartId, productId, quantity) {
    return await Cart.findByIdAndUpdate(
      cartId,
      { $push: { products: { product: productId, quantity } } },
      { new: true }
    );
  }

  async removeProductFromCart(cartId, productId) {
    return await Cart.findByIdAndUpdate(
      cartId,
      { $pull: { products: { product: productId } } },
      { new: true }
    );
  }

  async clearCart(cartId) {
    return await Cart.findByIdAndUpdate(
      cartId,
      { $set: { products: [] } },
      { new: true }
    );
  }
}

export default new CartDAO();
