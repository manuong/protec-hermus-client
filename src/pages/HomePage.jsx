import TaskTable from '../components/TaskTable';
import Header from '../components/Header';
import NavButton from '../components/NavButton';
import PATH_ROUTES from '../constants/pathRoutes';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import localStorageService from '../services/localStorageService';
import { userSave } from '../redux/actions';

const HomePage = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  // volver a cargar los datos si se refresca la pagina
  useEffect(() => {
    const user = localStorageService.getUser();
    dispatch(userSave(user));
  }, [dispatch]);

  return (
    <div>
      <Header username={user.username} />
      <h2 className="text-4xl mx-14">Bienvenido/a de nuevo {user.name}</h2>
      <div className="px-14 flex justify-between">
        <h3 className="text-2xl mt-10">Tareas pendientes</h3>
        <NavButton path={PATH_ROUTES.CREATE_TASK} name={'Nueva Tarea'} />
      </div>
      <TaskTable />
    </div>
  );
};

export default HomePage;
