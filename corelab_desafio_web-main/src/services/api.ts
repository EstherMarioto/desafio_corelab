import axios from 'axios';

const baseURL = import.meta.env.VITE_BASE_URL;

export const api = axios.create({ baseURL: baseURL });

api.interceptors.request.use(async (config) => {
  // para simular um loading mais lento e ver o skeleton loading
  // await new Promise((resolve) => setTimeout(resolve, 2000));
  return config;
});
