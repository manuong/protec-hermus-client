// import ACTION_TYPES from './actionTypes';

import parseJsonToObject from '../helpers/parseJsonToObject';

const userJSON = window.localStorage.getItem('loggedUser');

const initialState = {
  user: parseJsonToObject(userJSON),
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    // case ACTION_TYPES.USER_SAVE:
    //   return {
    //     ...state,
    //     user: payload,
    //   };

    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;
