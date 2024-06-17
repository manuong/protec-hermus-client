import ACTION_TYPES from './actionTypes';

export const userSave = (user) => {
  return {
    type: ACTION_TYPES.USER_SAVE,
    payload: user,
  };
};
