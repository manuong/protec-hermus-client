import { useEffect, useState } from 'react';
import authService from '../api/auth.api.js';
import { useNavigate } from 'react-router-dom';
import PATH_ROUTES from '../constants/pathRoutes.js';

const useAuth = () => {
  const [authErrors, setAuthErrors] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    // este setTimeout es para cerrar las alertas de los errores despues de un tiempo
    if (authErrors.length > 0) {
      const timer = setTimeout(() => {
        setAuthErrors([]);
      }, 6000);
      // cuando se desmonte el componente
      // 'clearTimeout' funcion para quitar un setTimeout
      return () => clearTimeout(timer);
    }
  }, [authErrors]);

  const handleLogin = (payload) => {
    authService
      .loginRequest(payload)
      .then(({ data }) => {
        window.localStorage.setItem('loggedUser', JSON.stringify(data.user));
        window.localStorage.setItem('token', data.token);

        navigate(PATH_ROUTES.HOME);
      })
      .catch((error) => {
        if (!error.response) setAuthErrors(['Network Error']);
        setAuthErrors(error.response.data.error);
      });
  };

  const handleLogout = () => {
    window.localStorage.clear();
    navigate(PATH_ROUTES.LOGIN);
  };

  return {
    handleLogin,
    handleLogout,
    authErrors,
  };
};

export default useAuth;
