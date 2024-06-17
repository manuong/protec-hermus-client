import { useState } from 'react';
import taskService from '../services/taskService';
import { useDispatch } from 'react-redux';
import { addTasks } from '../redux/actions';

const useTask = () => {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const [taskErrors, setTaskErrors] = useState([]);

  const createTask = (payload) => {
    setLoading(true);

    taskService
      .postTaskRequest(payload)
      .then(({ data }) => {
        setLoading(false);
        window.alert(data.message);
      })
      .catch((error) => {
        setLoading(false);
        if (!error.response) setTaskErrors(['Network Error']);
        setTaskErrors(error.response.data.error);
      });
  };

  const saveTasks = () => {
    setLoading(true);
    dispatch(addTasks())
      .then(() => {
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        if (!error.response) setTaskErrors(['Network Error']);
        setTaskErrors(error.response.data.error);
      });
  };

  return {
    createTask,
    saveTasks,
    loading,
    taskErrors,
  };
};

export default useTask;
