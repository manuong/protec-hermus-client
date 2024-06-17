import ACTION_TYPES from './actionTypes';

const initialState = {
  user: {},
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ACTION_TYPES.USER_SAVE:
      return {
        ...state,
        user: payload,
      };

    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;
