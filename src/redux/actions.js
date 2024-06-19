import ACTION_TYPES from './actionTypes';

export const saveUsers = (users) => {
  return {
    type: ACTION_TYPES.SAVE_USERS,
    payload: users,
  };
};

export const addTasks = (tasks) => {
  return {
    type: ACTION_TYPES.ADD_TASKS,
    payload: tasks,
  };
};

export const deleteTask = (taskId) => {
  return {
    type: ACTION_TYPES.DELETE_TASK,
    payload: taskId,
  };
};
