import { useEffect, useState } from 'react';
import taskService from '../services/taskService';

const useTask = () => {
  const [errors, setErrors] = useState([]);

  const getTasks = async (token) => {
    try {
      const { data } = await taskService.getTasksRequest(token);
      return data;
    } catch (error) {
      if (!error.response) setErrors(['Network Error']);
      setErrors(error.response.data.error);
    }
  };

  const createTask = async (newTask, token) => {
    try {
      await taskService.postTaskRequest(newTask, token);
    } catch (error) {
      if (!error.response) setErrors(['Network Error']);
      setErrors(error.response.data.error);
    }
  };

  const editTask = async (id, newTask, token) => {
    try {
      return await taskService.editTaskRequest(id, newTask, token);
    } catch (error) {
      if (!error.response) setErrors(['Network Error']);
      setErrors(error.response.data.error);
    }
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
    getTasks,
    createTask,
    editTask,
  };
};

export default useTask;
