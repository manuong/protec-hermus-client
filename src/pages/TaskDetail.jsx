// librerías
import { Link, useNavigate, useParams } from 'react-router-dom';

//hooks
import { useEffect, useState } from 'react';

// servicios
import localStorageService from '../services/localStorageService';
import taskService from '../services/taskService';

// constantes
import PATH_ROUTES from '../constants/pathRoutes';

const TaskDetail = () => {
  const [task, setTask] = useState({});

  const { taskId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorageService.getToken();

    taskService
      .getTasksDetailRequest(taskId, token)
      .then(({ data }) => {
        setTask(data);
      })
      .catch(() => {
        window.alert('Error al cargar datos de la tarea');
        navigate(PATH_ROUTES.HOME);
      });
  }, [navigate, taskId]);

  return (
    <div className="relative h-screen w-screen flex flex-col items-center justify-center">
      <Link
        to={PATH_ROUTES.HOME}
        className="text-3xl absolute top-20 left-20 group hover:cursor-pointer"
      >
        <ion-icon name="arrow-back-outline"></ion-icon>
        <span className="ml-2 relative bottom-2 border-b-2 border-transparent group-hover:border-white">
          regresar
        </span>
      </Link>

      <div className="text-3xl font-bold w-2/4 text-end py-5 px-3">
        {task.status === 'pending' && <span className="text-orange-700 ">Pendiente</span>}
        {task.status === 'in progress' && <span className="text-yellow-600 ">En progreso</span>}
        {task.status === 'completed' && <span className="text-green-700 ">Completado</span>}
        {task.status === 'approved' && <span className="text-blue-700 ">Aprobado</span>}
      </div>

      <h2 className="text-3xl bg-sky-950 w-2/4  px-3 py-6 rounded-t-md">{task.title}</h2>
      <p className="text-xl bg-sky-900 w-2/4 min-h-56 px-3 py-6 rounded-b-md overflow-scroll overflow-x-hidden">
        {task.description}
      </p>

      {task.comment && (
        <div className="w-2/4 text-xl mt-5">
          <h3 className="my-5 mx-3">Comentarios del Técnico</h3>
          <p className="bg-sky-900 min-h-36 py-6 px-3 rounded-md overflow-scroll overflow-x-hidden">
            {task.comment}
          </p>
        </div>
      )}
    </div>
  );
};

export default TaskDetail;
