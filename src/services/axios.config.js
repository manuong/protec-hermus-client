import axios from 'axios';

// variables de entorno
const { VITE_API_BASE_URL } = import.meta.env;

// configuraciónes extras para axios
const instance = axios.create({
  baseURL: VITE_API_BASE_URL,
});

export default instance;
