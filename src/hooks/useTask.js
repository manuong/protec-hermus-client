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

  const deleteTask = async (id, token) => {
    try {
      await taskService.deleteTaskRequest(id, token);
    } catch (error) {
      if (!error.response) setErrors(['Network Error']);
      setErrors(error.response.data.error);
    }
  };

  useEffect(() => {
    // cerrar las alertas de los errores después de un tiempo
    if (errors.length > 0) {
      const timer = setTimeout(() => {
        setErrors([]);
      }, 4000);

      return () => clearTimeout(timer); // limpiar setTimeout
    }
  }, [errors]);

  return {
    errors,
    getTasks,
    createTask,
    editTask,
    deleteTask,
  };
};

export default useTask;
