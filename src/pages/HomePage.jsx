import { useDispatch, useSelector } from 'react-redux';
import TaskTable from '../components/TaskTable';
import Header from '../components/Header';
import { useEffect } from 'react';
import { userSave } from '../redux/actions';
import localStorageService from '../services/localStorageService';

const HomePage = () => {
  const user = useSelector((state) => state.user);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userSave(localStorageService.getUser()));
  }, [dispatch]);

  return (
    <div>
      <Header username={user.username} />
      <h2 className="text-4xl mx-14">Bienvenido/a de nuevo {user.name}</h2>
      <h3 className="text-2xl mx-14 mt-10">Tareas pendientes</h3>
      <TaskTable />
    </div>
  );
};

export default HomePage;
