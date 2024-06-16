import ENDPOINTS from '../constants/endpoints';
import axios from './axios.config';

const loginRequest = (payload) => {
  return axios.post(`${ENDPOINTS.LOGIN}`, payload);
};

export default { loginRequest };
