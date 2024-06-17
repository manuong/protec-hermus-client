import { Navigate, Outlet } from 'react-router-dom';
import validateToken from '../helpers/validateToken';
import PATH_ROUTES from '../constants/pathRoutes';

const OnlyAuthorized = () => {
  if (!validateToken()) {
    return <Navigate to={PATH_ROUTES.LOGIN} />;
  }

  return <Outlet />;
};

export default OnlyAuthorized;
