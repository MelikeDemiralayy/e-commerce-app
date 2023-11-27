import axios from "axios";

const baseURL = "https://fakestoreapi.com";

const axiosInstance = axios.create({
  baseURL,
});

export const fetchProducts = async () => {
  const response = await axiosInstance.get("/products");
  return response.data;
}

