import { useForm } from 'react-hook-form';

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors: formErrors },
  } = useForm();

  const onSubmit = handleSubmit(() => {});

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <form onSubmit={onSubmit} className="flex flex-col items-center">
        <h2 className="text-4xl mb-10">Regístrate</h2>

        {/* {authErrors.map((error, i) => {
          return (
            <div key={i} className="bg-red-600 text-white w-96 p-2 mb-3">
              {error}
            </div>
          );
        })} */}

        <div className="flex flex-col">
          <input
            type="text"
            placeholder="Nombre"
            {...register('name', { required: true })}
            className="text-black mt-5 w-96 h-12 px-2 rounded-md"
          />

          <span className="text-red-600 h-6 mt-2">{formErrors.name && 'El nombre es requerido'}</span>

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

          <div className="px-3">
            <label className="text-2xl">
              <input
                type="radio"
                value={'técnico'}
                {...register('typeOfUser', { required: true })}
                className="mr-2"
              />
              técnico
            </label>

            <label className="text-2xl ml-6">
              <input
                type="radio"
                value={'área'}
                {...register('typeOfUser', { required: true })}
                className="mr-2"
              />
              área
            </label>
          </div>

          <span className="text-red-600 h-6 mt-2">
            {formErrors.typeOfUser && 'El tipo de usuario es requerido'}
          </span>
        </div>

        <button className="bg-sky-800 w-28 h-10 mt-10 duration-200 hover:rounded-xl">Registrar</button>
      </form>
    </div>
  );
};

export default RegisterPage;
