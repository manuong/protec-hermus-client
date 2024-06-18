import ACTION_TYPES from './actionTypes';

const initialState = {
  user: {},
  tasks: [],
  taskDetail: {},
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

    case ACTION_TYPES.TASK_DETAIL:
      if (payload) {
        const taskMached = state.tasks.find((task) => task.id === payload);
        return {
          ...state,
          taskDetail: taskMached,
        };
      }
      return {
        ...state,
      };

    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;
