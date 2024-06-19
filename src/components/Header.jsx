// hooks
import useAuth from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

// constantes
import PATH_ROUTES from '../constants/pathRoutes';

const Header = ({ username }) => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  // cerrar sesión de usuario
  const handleClick = () => {
    logout();
    navigate(PATH_ROUTES.LOGIN);
  };

  return (
    <header className="px-14 w-full h-24 flex items-center justify-end">
      <button
        onClick={handleClick}
        className="text-lg mx-10 border-b-2 border-transparent hover:border-white"
      >
        cerrar sesión
      </button>
      <div className="flex items-end">
        <ion-icon size="large" name="person-circle-outline"></ion-icon>
        <span className="text-lg ml-2">{username}</span>
      </div>
    </header>
  );
};

export default Header;
