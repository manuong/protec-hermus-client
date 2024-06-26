// configuraciones
import axios from './axios.config';

// helpers
import axiosConfigHeaders from '../helpers/axiosConfigHeaders';

// constantes
import ENDPOINTS from '../constants/endpoints';

const getTasksRequest = (token) => {
  return axios.get(ENDPOINTS.TASK, axiosConfigHeaders(token));
};

const getTasksDetailRequest = (id, token) => {
  return axios.get(`${ENDPOINTS.TASK}/${id}`, axiosConfigHeaders(token));
};

const postTaskRequest = (newTask, token) => {
  return axios.post(ENDPOINTS.TASK, newTask, axiosConfigHeaders(token));
};

const editTaskRequest = (id, newTask, token) => {
  return axios.put(`${ENDPOINTS.TASK}/${id}`, newTask, axiosConfigHeaders(token));
};

const deleteTaskRequest = (id, token) => {
  return axios.delete(`${ENDPOINTS.TASK}/${id}`, axiosConfigHeaders(token));
};

export default {
  getTasksRequest,
  getTasksDetailRequest,
  postTaskRequest,
  editTaskRequest,
  deleteTaskRequest,
};
