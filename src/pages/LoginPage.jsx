import { useForm } from 'react-hook-form';
import useAuth from '../hooks/useAuth';
import { Link } from 'react-router-dom';
import PATH_ROUTES from '../constants/pathRoutes';

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors: formErrors },
  } = useForm();

  const { handleLogin, authErrors, loading } = useAuth();

  const onSubmit = handleSubmit((values) => {
    handleLogin(values);
  });

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <form onSubmit={onSubmit} className="flex flex-col items-center">
        <h2 className="text-4xl mb-10">Inicio de Sesión</h2>

        {authErrors.map((error, i) => {
          return (
            <div key={i} className="bg-red-600 text-white w-96 p-2 mb-3">
              {error}
            </div>
          );
        })}

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
