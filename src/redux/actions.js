import ACTION_TYPES from './actionTypes';

export const userSave = (user) => {
  return {
    type: ACTION_TYPES.USER_SAVE,
    payload: user,
  };
};

export const addTasks = (tasks) => {
  return {
    type: ACTION_TYPES.ADD_TASKS,
    payload: tasks,
  };
};

export const taskDetail = (id) => {
  return {
    type: ACTION_TYPES.TASK_DETAIL,
    payload: id,
  };
};
