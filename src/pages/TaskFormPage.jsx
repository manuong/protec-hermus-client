import { useForm } from 'react-hook-form';
import useTask from '../hooks/useTask';
import localStorageService from '../services/localStorageService';
import { useNavigate } from 'react-router-dom';
import PATH_ROUTES from '../constants/pathRoutes';
import ErrorService from '../components/ErrorService';

const TaskFormPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors: formErrors },
  } = useForm();

  const navigate = useNavigate();

  const { createTask, errors: taskErrors } = useTask();

  const onSubmit = handleSubmit((values) => {
    const token = localStorageService.getToken();

    createTask(values, token).then(() => {
      navigate(PATH_ROUTES.HOME);
    });
  });

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <form onSubmit={onSubmit} className="flex flex-col items-center">
        <h2 className="text-4xl mb-10">Crear Tarea</h2>

        {taskErrors.map((error, i) => (
          <ErrorService key={i} error={error} />
        ))}

        <div className="flex flex-col">
          <input
            type="text"
            placeholder="Titulo"
            {...register('title', { required: true })}
            className="text-black mt-5 w-96 h-12 px-2 rounded-md"
          />

          <span className="text-red-600 h-6 mt-2">{formErrors.title && 'Escribe un titulo'}</span>

          <textarea
            rows="10"
            placeholder="Descripción"
            {...register('description', { required: true })}
            className="text-black mt-5 w-96 h-12 px-2 rounded-md"
          ></textarea>

          <span className="text-red-600 h-6 mt-2">
            {formErrors.description && 'Escribe una descripcion'}
          </span>

          {/* <label htmlFor="assigned">Asignar a: </label>
          <select {...register('assigned', { required: true })}>
            <option value=""></option>
          </select>

          <span className="text-red-600 h-6 mt-2">
            {formErrors.assigned && 'Escribe una descripcion'}
          </span>

          <label htmlFor="status">Asignar a: </label>
          <select {...register('status', { required: true })}>
            <option value=""></option>
          </select>

          <span className="text-red-600 h-6 mt-2">{formErrors.status && 'Escribe una descripcion'}</span>

          <textarea
            rows="10"
            placeholder="Escribre un comentario"
            {...register('comment', { required: true })}
            className="text-black mt-5 w-96 h-12 px-2 rounded-md"
          ></textarea>

          <span className="text-red-600 h-6 mt-2">
            {formErrors.comment && 'Es requerido un comentario'}
          </span> */}
        </div>

        <button className="bg-sky-800 w-28 h-10 mt-10 duration-200 hover:rounded-xl">Registrar</button>
      </form>
    </div>
  );
};

export default TaskFormPage;
