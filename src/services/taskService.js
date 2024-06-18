import ENDPOINTS from '../constants/endpoints';
import axiosConfigHeaders from '../helpers/axiosConfigHeaders';
import axios from './axios.config';

const postTaskRequest = (newTask, token) => {
  return axios.post(ENDPOINTS.TASK, newTask, axiosConfigHeaders(token));
};

const getTasksRequest = (token) => {
  return axios.get(ENDPOINTS.TASK, axiosConfigHeaders(token));
};

const editTaskRequest = (id, newTask, token) => {
  return axios.put(`${ENDPOINTS.TASK}/${id}`, newTask, axiosConfigHeaders(token));
};

export default { postTaskRequest, getTasksRequest, editTaskRequest };
