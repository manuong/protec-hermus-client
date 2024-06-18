import { useEffect, useState } from 'react';
import authService from '../services/authService';
import localStorageService from '../services/localStorageService';
import { useDispatch } from 'react-redux';
import { addTasks, userSave } from '../redux/actions';
import taskService from '../services/taskService';

const useAuth = () => {
  const [errors, setErrors] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const dispatch = useDispatch();

  const singin = async (credentials) => {
    try {
      const { data } = await authService.loginRequest(credentials);

      // se guardan los datos en local storage y en el estado global
      localStorageService.setUser(data.user);
      localStorageService.setToken(data.token);
      dispatch(userSave(data.user));

      // se guardan las tareas correspondientes
      const { data: tasks } = await taskService.getTasksRequest(data.token);
      localStorageService.setTasks(tasks);
      dispatch(addTasks(tasks));

      // comprobamos que esta autenticado
      setIsAuthenticated(true);
    } catch (error) {
      if (!error.response) setErrors(['Network Error']);
      setErrors(error.response.data.error);
    }
  };

  const singup = async (newUser) => {
    try {
      const { data } = await authService.singupRequest(newUser);
      return data.message;
    } catch (error) {
      if (!error.response) setErrors(['Network Error']);
      setErrors(error.response.data.error);
    }
  };

  const logout = () => {
    localStorageService.clearLocalStorage();
    setIsAuthenticated(false);
  };

  useEffect(() => {
    // este setTimeout es para cerrar las alertas de los errores despues de un tiempo
    if (errors.length > 0) {
      const timer = setTimeout(() => {
        setErrors([]);
      }, 4000);
      // cuando se desmonte el componente
      // 'clearTimeout' funcion para quitar un setTimeout
      return () => clearTimeout(timer);
    }
  }, [errors]);

  return {
    errors,
    isAuthenticated,
    singin,
    singup,
    logout,
  };
};

export default useAuth;
