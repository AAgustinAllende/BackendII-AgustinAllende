import Product from '../models/Product.js';

class ProductDAO {
  async createProduct(productData) {
    const product = new Product(productData);
    return await product.save();
  }

  async getProductById(id) {
    return await Product.findById(id);
  }

  async getAllProducts() {
    return await Product.find();
  }

  async updateProduct(id, updateData) {
    return await Product.findByIdAndUpdate(id, updateData, { new: true });
  }

  async deleteProduct(id) {
    return await Product.findByIdAndDelete(id);
  }

  async updateProductStock(id, quantity) {
    return await Product.findByIdAndUpdate(id, { $inc: { stock: -quantity } }, { new: true });
  }
}

export default new ProductDAO();
