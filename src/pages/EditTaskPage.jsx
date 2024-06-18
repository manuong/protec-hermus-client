import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { taskDetail } from '../redux/actions';
import { useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import TYPE_OF_USERS from '../constants/typeOfUsers';
import useTask from '../hooks/useTask';
import localStorageService from '../services/localStorageService';
import PATH_ROUTES from '../constants/pathRoutes';
import ErrorService from '../components/ErrorService';

const EditTaskPage = () => {
  const task = useSelector((state) => state.taskDetail);
  const { typeOfUser } = useSelector((state) => state.user);

  const { register, handleSubmit, setValue } = useForm();

  const dispatch = useDispatch();
  const { taskId } = useParams();
  const navigate = useNavigate();

  const { editTask, errors: taskErrors } = useTask();

  useEffect(() => {
    dispatch(taskDetail(taskId));

    setValue('title', task.title);
    setValue('description', task.description);
  }, [dispatch, taskId, setValue, task]);

  const onSubmit = handleSubmit((values) => {
    editTask(taskId, values, localStorageService.getToken()).then(() => {
      navigate(PATH_ROUTES.HOME);
    });
  });

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <form onSubmit={onSubmit} className="flex flex-col items-center">
        <h2 className="text-4xl mb-10">Editar Tarea</h2>

        {taskErrors.map((error, i) => (
          <ErrorService key={i} error={error} />
        ))}

        <div className="flex flex-col">
          <input
            type="text"
            readOnly
            {...register('title')}
            className="text-black mt-5 w-96 h-12 px-2 rounded-md"
          />

          <textarea
            rows="10"
            readOnly
            {...register('description')}
            className="text-black mt-5 w-96 h-12 px-2 rounded-md"
          ></textarea>

          {typeOfUser === TYPE_OF_USERS.ADMIN && (
            <select className="text-black" {...register('assigned')}>
              <option value="">Asignar a un tecnico</option>
              <option value="">tec1</option>
              <option value="">tec2</option>
              <option value="">tec3</option>
            </select>
          )}

          {typeOfUser === TYPE_OF_USERS.TEC && (
            <div className="px-3">
              <label className="text-2xl">
                <input type="radio" value={'in progress'} {...register('status')} className="mr-2" />
                En Proceso
              </label>

              <label className="text-2xl ml-6">
                <input type="radio" value={'completed'} {...register('status')} className="mr-2" />
                Completada
              </label>
            </div>
          )}

          {typeOfUser === TYPE_OF_USERS.ADMIN && task.status === 'completed' && (
            <label className="text-2xl ml-6">
              Aprovar
              <input type="checkbox" value={'approved'} {...register('status')} className="mr-2" />
            </label>
          )}

          {typeOfUser === TYPE_OF_USERS.TEC && (
            <textarea
              rows="10"
              placeholder="Escribre un comentario"
              {...register('comment')}
              className="text-black mt-5 w-96 h-12 px-2 rounded-md"
            ></textarea>
          )}
        </div>

        <button className="bg-sky-800 w-28 h-10 mt-10 duration-200 hover:rounded-xl">Enviar</button>
      </form>
    </div>
  );
};

export default EditTaskPage;
