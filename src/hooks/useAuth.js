import { useEffect, useState } from 'react';
import authService from '../api/auth.api.js';
import { useNavigate } from 'react-router-dom';

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

        navigate('/home');
      })
      .catch((error) => {
        if (!error.response) setAuthErrors(['Network Error']);
        setAuthErrors(error.response.data.error);
      });
  };

  return {
    handleLogin,
    authErrors,
  };
};

export default useAuth;
