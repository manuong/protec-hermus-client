import ACTION_TYPES from './actionTypes';

const initialState = {
  user: {},
  tasks: [],
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ACTION_TYPES.SAVE_USERS: {
      return {
        ...state,
        user: payload,
      };
    }

    case ACTION_TYPES.ADD_TASKS: {
      return {
        ...state,
        tasks: payload,
      };
    }

    case ACTION_TYPES.DELETE_TASK: {
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== payload),
      };
    }

    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;
