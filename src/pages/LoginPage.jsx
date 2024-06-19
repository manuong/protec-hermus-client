// librerías
import { Link, useNavigate } from 'react-router-dom';

// componentes
import ErrorService from '../components/ErrorService';

// hooks
import useAuth from '../hooks/useAuth';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

// constantes
import PATH_ROUTES from '../constants/pathRoutes';

const LoginPage = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const { singin, isAuthenticated, errors: authErrors } = useAuth(); // gestor de servicios de la API para autenticar usuario

  const {
    register,
    handleSubmit,
    formState: { errors: formErrors },
  } = useForm();

  const onSubmit = handleSubmit((values) => {
    setLoading(true);
    singin(values)
      .then(() => {
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  });

  useEffect(() => {
    // redireccionar a ruta /home
    if (isAuthenticated) {
      navigate(PATH_ROUTES.HOME);
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <form onSubmit={onSubmit} className="flex flex-col items-center">
        <h2 className="text-4xl mb-10">Inicio de Sesión</h2>

        {authErrors.map((error, i) => (
          <ErrorService key={i} error={error} />
        ))}

        <div className="flex flex-col">
          <input
            type="text"
            placeholder="Nombre de usuario"
            {...register('username', { required: true })}
            className="text-black mt-5 w-96 h-12 px-2 rounded-md"
          />

          <span className="text-red-600 h-6 mt-2">
            {formErrors.username && 'El nombre de usuario es requerido'}
          </span>

          <input
            type="password"
            placeholder="Contraseña"
            {...register('password', { required: true })}
            className="text-black mt-5 w-96 h-12 px-2 rounded-md"
          />

          <span className="text-red-600 h-6 mt-2">
            {formErrors.password && 'La contraseña es requerida'}
          </span>
        </div>

        <p className="text-center">
          ¿Registrar nuevo usuario?{' '}
          <Link
            to={PATH_ROUTES.REGISTER}
            className="text-sky-700 font-bold border-b-2 border-transparent hover:border-sky-700"
          >
            Aqui
          </Link>
        </p>

        <button className="bg-sky-800 w-28 h-10 mt-9 duration-200 hover:rounded-xl">Iniciar</button>
        <span className="mt-5">{loading && 'Cargando...'}</span>
      </form>
    </div>
  );
};

export default LoginPage;
