import ENDPOINTS from '../constants/endpoints';
import axios from './axios.config';

const postTaskRequest = (payload) => {
  return axios.post(ENDPOINTS.TASK, payload);
};

const getTasksRequest = () => {
  return axios.get(ENDPOINTS.TASK);
};

export default { postTaskRequest, getTasksRequest };
