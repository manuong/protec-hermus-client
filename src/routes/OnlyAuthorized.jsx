import { Navigate, Outlet } from 'react-router-dom';
import validateToken from '../helpers/validateToken';
import PATH_ROUTES from '../constants/pathRoutes';
import { useSelector } from 'react-redux';

const OnlyAuthorized = () => {
  const user = useSelector((state) => state.user);

  if (!validateToken()) {
    return <Navigate to={PATH_ROUTES.LOGIN} />;
  }

  if (user.id) {
    return <Outlet />;
  }
};

export default OnlyAuthorized;
