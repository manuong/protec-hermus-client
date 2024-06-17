import { Link } from 'react-router-dom';

const NavButton = ({ path, name }) => {
  return (
    <Link to={path}>
      <button type="button" className="bg-sky-800 w-28 h-10 mt-9 duration-200 hover:rounded-xl">
        {name}
      </button>
    </Link>
  );
};

export default NavButton;
