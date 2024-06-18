import TaskTable from '../components/TaskTable';
import Header from '../components/Header';
import NavButton from '../components/NavButton';
import PATH_ROUTES from '../constants/pathRoutes';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import localStorageService from '../services/localStorageService';
import { addTasks, userSave } from '../redux/actions';
import TYPE_OF_USERS from '../constants/typeOfUsers';
import TaskTableAdmin from '../components/TaskTableAdmin';

const HomePage = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  // volver a cargar los datos si se refresca la pagina
  useEffect(() => {
    const user = localStorageService.getUser();
    const tasks = localStorageService.getTasks();

    dispatch(userSave(user));
    dispatch(addTasks(tasks));
  }, [dispatch]);

  return (
    <div>
      <Header username={user.username} />
      <h2 className="text-4xl mx-14">
        Bienvenido/a de nuevo <span>{user.name}</span>
        <span>{` (${user.typeOfUser})`}</span>
      </h2>

      <div className="px-14 flex justify-between">
        <h3 className="text-2xl mt-10">Tareas pendientes</h3>
        <NavButton path={PATH_ROUTES.CREATE_TASK} name={'Nueva Tarea'} />
      </div>
      {user.typeOfUser === TYPE_OF_USERS.AREA && <TaskTable />}
      {user.typeOfUser === TYPE_OF_USERS.ADMIN && <TaskTableAdmin />}
      {user.typeOfUser === TYPE_OF_USERS.TEC && <TaskTableAdmin />}
    </div>
  );
};

export default HomePage;
