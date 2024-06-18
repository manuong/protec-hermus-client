import axios from 'axios';

const { VITE_API_BASE_URL } = import.meta.env;

const instance = axios.create({
  baseURL: VITE_API_BASE_URL,
});

export default instance;
