export class CartDTO {
    constructor(cart) {
      this.id = cart._id;
      this.products = cart.products.map(item => ({
        productId: item.product._id,
        name: item.product.name,
        price: item.product.price,
        quantity: item.quantity
      }));
      this.totalItems = cart.products.reduce((total, item) => total + item.quantity, 0);
      this.totalPrice = cart.products.reduce((total, item) => total + item.product.price * item.quantity, 0);
    }
  }
  