// configuraciones
import axios from './axios.config';

// helpers
import axiosConfigHeaders from '../helpers/axiosConfigHeaders';

// canstantes
import ENDPOINTS from '../constants/endpoints';
import TYPE_OF_USERS from '../constants/typeOfUsers';

const getUsersTec = (token) => {
  return axios.get(`${ENDPOINTS.USER}?typeOfUser=${TYPE_OF_USERS.TEC}`, axiosConfigHeaders(token));
};

export default { getUsersTec };
