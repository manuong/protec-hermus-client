import ENDPOINTS from '../constants/endpoints';
import axiosConfigHeaders from '../helpers/axiosConfigHeaders';
import axios from './axios.config';

const postTaskRequest = (payload, token) => {
  return axios.post(ENDPOINTS.TASK, payload, axiosConfigHeaders(token));
};

const getTasksRequest = (token) => {
  return axios.get(ENDPOINTS.TASK, axiosConfigHeaders(token));
};

export default { postTaskRequest, getTasksRequest };
