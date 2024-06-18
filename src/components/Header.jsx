import { useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import PATH_ROUTES from '../constants/pathRoutes';

const Header = ({ username }) => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleClick = () => {
    logout();
    navigate(PATH_ROUTES.LOGIN);
  };

  return (
    <header className="px-14 w-screen h-24 flex items-center justify-end">
      <button
        onClick={handleClick}
        className="text-lg mx-10 border-b-2 border-transparent hover:border-white"
      >
        cerrar sesión
      </button>
      <span className="text-lg">{username}</span>
    </header>
  );
};

export default Header;
