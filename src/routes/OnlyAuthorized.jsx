// componentes
import { Navigate, Outlet } from 'react-router-dom';

// helpers
import validateToken from '../helpers/validateToken';

// constantes
import PATH_ROUTES from '../constants/pathRoutes';

// control de acceso a rutas para usuarios autenticados
const OnlyAuthorized = () => {
  if (!validateToken()) {
    return <Navigate to={PATH_ROUTES.LOGIN} />; // redireccionar a login si no está autenticado
  }

  return <Outlet />; // renderizar todo lo demas
};

export default OnlyAuthorized;
