import Product from '../repositories/productRepository.js';

export const getAllProductsService = async () => {
    return await Product.getAll();
};

export const getProductByIdService = async (id) => {
    return await Product.getById(id);
};

export const createProductService = async (productData) => {
    return await Product.create(productData);
};

export const updateProductService = async (id, productData) => {
    return await Product.update(id, productData);
};

export const deleteProductService = async (id) => {
    return await Product.delete(id);
};
