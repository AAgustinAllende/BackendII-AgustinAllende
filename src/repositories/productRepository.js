import ProductDAO from '../DAO/productDAO.js';

class ProductRepository {
  constructor() {
    this.productDAO = new ProductDAO();
  }

  async createProduct(productDTO) {
    return await this.productDAO.create(productDTO);
  }

  async findProductById(id) {
    return await this.productDAO.findById(id);
  }

  async findAllProducts() {
    return await this.productDAO.findAll();
  }

  async updateProduct(id, productDTO) {
    return await this.productDAO.update(id, productDTO);
  }

  async deleteProduct(id) {
    return await this.productDAO.delete(id);
  }

  async checkStock(productId, quantity) {
    const product = await this.productDAO.findById(productId);
    return product && product.stock >= quantity;
  }

  async reduceStock(productId, quantity) {
    const product = await this.productDAO.findById(productId);
    if (product && product.stock >= quantity) {
      product.stock -= quantity;
      return await this.productDAO.update(productId, product);
    }
    throw new Error('Stock insuficiente');
  }
}

export default ProductRepository;
