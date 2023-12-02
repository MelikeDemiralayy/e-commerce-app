import axios from 'axios';

const baseURL = 'https://fakestoreapi.com';
const axiosInstance = axios.create({
  baseURL,
});
//Productlarım için api
export const fetchProducts = async () => {
  try {
    const response = await axiosInstance.get('/products');
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
};
//Carouselde döndürmek için çektiğim api
export const fetchLimitedProducts = async () => {
  try {
    const response = await axiosInstance.get('/products?limit=5');
    return response.data;
  } catch (error) {
    console.error('Error fetching limited products:', error);
    return [];
  }
};
// Detaya gitmek için api
export const fetchDetail = async (id) => {
  const response  = await axiosInstance.get (`/products/${id}`);
  return response.data;
}