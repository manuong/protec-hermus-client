import useAuth from '../hooks/useAuth';

const Header = ({ username }) => {
  const { handleLogout } = useAuth();

  return (
    <header className="px-14 w-screen h-24 flex items-center justify-end">
      <button
        onClick={() => {
          handleLogout();
        }}
        className="text-lg mx-10 border-b-2 border-transparent hover:border-white"
      >
        cerrar sesión
      </button>
      <span className="text-lg">{username}</span>
    </header>
  );
};

export default Header;
