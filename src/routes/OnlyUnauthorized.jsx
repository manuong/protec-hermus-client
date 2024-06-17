import { Navigate, Outlet } from 'react-router-dom';
import validateToken from '../helpers/validateToken';
import PATH_ROUTES from '../constants/pathRoutes';

const OnlyUnauthorized = () => {
  if (validateToken()) {
    return <Navigate to={PATH_ROUTES.HOME} />;
  }

  return <Outlet />;
};

export default OnlyUnauthorized;
