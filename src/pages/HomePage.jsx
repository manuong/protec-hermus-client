import { useSelector } from 'react-redux';

const HomePage = () => {
  const user = useSelector((state) => state.user);

  return (
    <div>
      <h2>Bienvenido/a de nuevo {user.name}</h2>
    </div>
  );
};

export default HomePage;
