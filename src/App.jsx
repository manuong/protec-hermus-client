import { Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import OnlyUnauthorized from './routes/OnlyUnauthorized';
import PATH_ROUTES from './constants/pathRoutes';
import HomePage from './pages/HomePage';
import OnlyAuthorized from './routes/OnlyAuthorized';
import RegisterPage from './pages/RegisterPage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<OnlyUnauthorized />}>
          <Route path={PATH_ROUTES.LOGIN} element={<LoginPage />} />
          <Route path={PATH_ROUTES.REGISTER} element={<RegisterPage />} />
        </Route>

        <Route element={<OnlyAuthorized />}>
          <Route path={PATH_ROUTES.HOME} element={<HomePage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
