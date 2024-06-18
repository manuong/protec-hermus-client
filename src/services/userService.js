import ENDPOINTS from '../constants/endpoints';
import TYPE_OF_USERS from '../constants/typeOfUsers';
import axiosConfigHeaders from '../helpers/axiosConfigHeaders';
import axios from './axios.config';

const getUsersTec = (token) => {
  return axios.get(`${ENDPOINTS.USER}?typeOfUser=${TYPE_OF_USERS.TEC}`, axiosConfigHeaders(token));
};

export default { getUsersTec };
