import ACTION_TYPES from './actionTypes';

const initialState = {
  user: {},
  tasks: [],
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ACTION_TYPES.USER_SAVE:
      return {
        ...state,
        user: payload,
      };

    case ACTION_TYPES.ADD_TASKS:
      return {
        ...state,
        tasks: payload,
      };

    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;
