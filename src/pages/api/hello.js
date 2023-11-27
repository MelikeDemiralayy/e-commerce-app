import axios from 'axios';

const baseURL = 'https://fakestoreapi.com';

const axiosInstance = axios.create({
  baseURL,
});

export const fetchProducts = async () => {
  try {
    const response = await axiosInstance.get('/products');
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
};
