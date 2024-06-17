import parseJsonToObject from '../helpers/parseJsonToObject';

// const TOKEN_KEY = 'token';
const USER_KEY = 'loggedUser';

const getUser = () => {
  const userJSON = window.localStorage.getItem(USER_KEY);
  return parseJsonToObject(userJSON);
};

export default { getUser };
