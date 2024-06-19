// helpers
import parseJsonToObject from '../helpers/parseJsonToObject';

const TOKEN_KEY = 'token';
const USER_KEY = 'loggedUser';
const TASK_KEY = 'tasks';

const getUser = () => {
  const userJSON = window.localStorage.getItem(USER_KEY);
  return parseJsonToObject(userJSON);
};

const setUser = (user) => {
  return window.localStorage.setItem(USER_KEY, JSON.stringify(user));
};

const getToken = () => {
  const token = window.localStorage.getItem(TOKEN_KEY);

  if (!token) return null;
  return token;
};

const setToken = (token) => {
  return window.localStorage.setItem(TOKEN_KEY, token);
};

const getTasks = () => {
  const tasksJSON = window.localStorage.getItem(TASK_KEY);
  return parseJsonToObject(tasksJSON);
};

const setTasks = (tasks) => {
  return window.localStorage.setItem(TASK_KEY, JSON.stringify(tasks));
};

const clearLocalStorage = () => {
  return window.localStorage.clear();
};

export default {
  getUser,
  setUser,
  getToken,
  setToken,
  getTasks,
  setTasks,
  clearLocalStorage,
};
