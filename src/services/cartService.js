import Cart from '../repositories/cartRepository.js';

export const purchaseCartService = async (cartId, userEmail) => {
    const cart = await Cart.getById(cartId);
    if (!cart || cart.products.length === 0) {
        throw new Error('El carrito está vacío o no existe.');
    }

    let productsNotPurchased = [];
    let totalAmount = 0;

    for (const product of cart.products) {
        if (product.stock >= product.quantity) {
            totalAmount += product.price * product.quantity;
            await Cart.updateStock(product.id, product.quantity);
        } else {
            productsNotPurchased.push(product.id);
        }
    }

    return {
        totalAmount,
        productsNotPurchased,
    };
};
