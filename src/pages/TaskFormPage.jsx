// hooks
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import useTask from '../hooks/useTask';

// servicios
import localStorageService from '../services/localStorageService';
import ErrorService from '../components/ErrorService';

// constantes
import PATH_ROUTES from '../constants/pathRoutes';

const TaskFormPage = () => {
  const navigate = useNavigate();
  const { createTask, errors: taskErrors } = useTask(); // gestor de servicios de la API para tareas

  const {
    register,
    handleSubmit,
    formState: { errors: formErrors },
  } = useForm();

  // Información enviada
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
            className="text-black mt-6 w-96 h-32 min-h-32 p-2 rounded-md"
          ></textarea>

          <span className="text-red-600 h-6 mt-2">
            {formErrors.description && 'Escribe una descripcion'}
          </span>
        </div>

        <button className="bg-sky-800 w-28 h-10 mt-10 duration-200 hover:rounded-xl">Registrar</button>
      </form>
    </div>
  );
};

export default TaskFormPage;
