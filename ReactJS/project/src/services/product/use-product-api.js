import http from '../http';

const getProducts = async (category) => {
  const path = category ? `/category/${category}` : '';
  return await http.get(`/products${path}`);
};

const getProductById = async (id) => {
  return await http.get(`/products/${id}`);
};

const getCategories = async () => {
  return await http.get('/products/categories');
};

export const useProductApi = {
  getProducts,
  getCategories,
  getProductById,
};
