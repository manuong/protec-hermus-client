import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import TYPE_OF_USERS from '../constants/typeOfUsers';
import useTask from '../hooks/useTask';
import localStorageService from '../services/localStorageService';
import PATH_ROUTES from '../constants/pathRoutes';
import ErrorService from '../components/ErrorService';
import userService from '../services/userService';
import taskService from '../services/taskService';

const EditTaskPage = () => {
  const { typeOfUser } = useSelector((state) => state.user);
  const [usersTec, setUsersTec] = useState([]);
  const [task, setTask] = useState({});

  const {
    register,
    handleSubmit,
    formState: { errors: formErrors },
    setValue,
  } = useForm();

  const { taskId } = useParams();
  const navigate = useNavigate();

  const { editTask, errors: taskErrors } = useTask();

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorageService.getToken();

      if (typeOfUser === TYPE_OF_USERS.ADMIN) {
        const { data: dataUserTec } = await userService.getUsersTec(token);
        setUsersTec(dataUserTec);
      }

      const { data: taskDetail } = await taskService.getTasksDetailRequest(taskId, token);
      setTask(taskDetail);
    };
    fetchData();
  }, [setValue, taskId, typeOfUser]);

  useEffect(() => {
    setValue('title', task.title);
    setValue('description', task.description);
    setValue('assigned', task.assigned);
    setValue('status', task.status);
  }, [setValue, task]);

  const onSubmit = handleSubmit((values) => {
    editTask(taskId, values, localStorageService.getToken()).then(() => {
      navigate(PATH_ROUTES.HOME);
    });
  });

  return (
    <div className="h-full flex flex-col items-center justify-center">
      <form onSubmit={onSubmit} className="flex flex-col items-center">
        <h2 className="text-4xl my-10">Editar Tarea</h2>

        {taskErrors.map((error, i) => (
          <ErrorService key={i} error={error} />
        ))}

        <div className="flex flex-col">
          <label className="text-xl">Titulo</label>
          <input
            type="text"
            readOnly
            {...register('title')}
            className="text-black mt-2 w-96 h-12 px-2 rounded-md"
          />

          <label className="text-xl mt-5">Descripción</label>
          <textarea
            rows="10"
            readOnly
            {...register('description')}
            className="text-black mt-2 w-96 h-32 min-h-32 p-2 rounded-md"
          ></textarea>

          {typeOfUser === TYPE_OF_USERS.ADMIN && (
            <div>
              <select
                className="text-black mt-10 w-96 h-12 rounded-md"
                {...register('assigned', { required: true })}
              >
                <option value="">Asignar a un tecnico: </option>
                {usersTec.map(({ id, username }, index) => (
                  <option key={index} value={id}>
                    {username}
                  </option>
                ))}
              </select>
              <p className="text-red-600 h-6 mt-2">
                {formErrors.assigned && 'Debe asignarse a un técnico.'}
              </p>
            </div>
          )}

          {typeOfUser === TYPE_OF_USERS.TEC && (
            <textarea
              rows="10"
              placeholder="Escribre un comentario"
              {...register('comment')}
              className="text-black mt-16 w-96 h-32 min-h-32 p-2 rounded-md"
            ></textarea>
          )}

          {typeOfUser === TYPE_OF_USERS.TEC && task.status !== 'approved' && (
            <div className="mt-10 px-3">
              {task.status === 'pending' && (
                <label className="text-2xl">
                  <input type="radio" value={'in progress'} {...register('status')} className="mr-2" />
                  En Proceso
                </label>
              )}

              {task.status === 'in progress' && (
                <label className="text-2xl ml-6">
                  <input type="radio" value={'completed'} {...register('status')} className="mr-2" />
                  Completada
                </label>
              )}
            </div>
          )}

          {typeOfUser === TYPE_OF_USERS.ADMIN && task.status === 'completed' && (
            <label className="text-2xl ml-6">
              ¿Aprovar?
              <input type="radio" value="approved" {...register('status')} className="ml-3 size-5" />
            </label>
          )}
        </div>

        <div className="my-12 w-5/6 flex justify-around">
          <button className="bg-sky-800 w-28 h-10 duration-200 hover:rounded-xl">Enviar</button>
          <Link to={PATH_ROUTES.HOME}>
            <button className="bg-red-800 w-28 h-10 duration-200 hover:rounded-xl">Cancelar</button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default EditTaskPage;
