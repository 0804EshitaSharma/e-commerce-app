const baseURL = "https://e-commerce-backend-g4kl.onrender.com";
export const APIPaths = {
  // TODO: combine the two orders into one
  Order: `${baseURL}/order`,
  Orders: `${baseURL}/orders`,
  User: `${baseURL}/user`,
  Product: `${baseURL}/products`,
  Wishlist: `${baseURL}/wishlist`, // will probably need to be changed as it doesn't currently match the backend
};
