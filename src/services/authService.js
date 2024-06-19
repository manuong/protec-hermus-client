// configuraciones
import axios from './axios.config';

// constantes
import ENDPOINTS from '../constants/endpoints';

const loginRequest = (payload) => {
  return axios.post(ENDPOINTS.LOGIN, payload);
};

const singupRequest = (payload) => {
  return axios.post(ENDPOINTS.SINGUP, payload);
};

export default { loginRequest, singupRequest };
