// Validación de token para condicionales
const validateToken = () => {
  const token = window.localStorage.getItem('token');

  return token ? true : false;
};

export default validateToken;
