import ENDPOINTS from '../constants/endpoints';
import axios from './axios.config';

const loginRequest = (payload) => {
  return axios.post(ENDPOINTS.LOGIN, payload);
};

const singupRequest = (payload) => {
  return axios.post(ENDPOINTS.SINGUP, payload);
};

export default { loginRequest, singupRequest };
