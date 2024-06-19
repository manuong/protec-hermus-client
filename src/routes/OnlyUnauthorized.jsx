// componentes
import { Navigate, Outlet } from 'react-router-dom';

// helpers
import validateToken from '../helpers/validateToken';

// constantes
import PATH_ROUTES from '../constants/pathRoutes';

// redireccionamiento a rutas si el usuario no está logeado
const OnlyUnauthorized = () => {
  if (validateToken()) {
    return <Navigate to={PATH_ROUTES.HOME} />;
  }

  return <Outlet />;
};

export default OnlyUnauthorized;
