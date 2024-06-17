import taskService from '../services/taskService';
import ACTION_TYPES from './actionTypes';

export const userSave = (user) => {
  return {
    type: ACTION_TYPES.USER_SAVE,
    payload: user,
  };
};

export const addTasks = () => {
  return async (dispatch) => {
    try {
      const { data } = await taskService.getTasksRequest();

      console.log(data);
      return;
      // return dispatch({
      //   type: ACTION_TYPES.ADD_TASKS,
      //   payload: data,
      // });
    } catch (error) {
      throw new Error(error.message);
    }
  };
};
