import { Navigate, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import OnlyUnauthorized from './routes/OnlyUnauthorized';
import PATH_ROUTES from './constants/pathRoutes';
import OnlyAuthorized from './routes/OnlyAuthorized';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';
import TaskFormPage from './pages/TaskFormPage';
import EditTaskPage from './pages/EditTaskPage';

function App() {
  return (
    <>
      <Routes>
        <Route element={<OnlyUnauthorized />}>
          <Route path={PATH_ROUTES.LOGIN} element={<LoginPage />} />
          <Route path={PATH_ROUTES.REGISTER} element={<RegisterPage />} />
        </Route>

        <Route element={<OnlyAuthorized />}>
          <Route path={PATH_ROUTES.HOME} element={<HomePage />} />
          <Route path={PATH_ROUTES.CREATE_TASK} element={<TaskFormPage />} />
          <Route path={`${PATH_ROUTES.EDIT_TASK}/:taskId`} element={<EditTaskPage />} />
        </Route>

        <Route path="*" element={<Navigate to={'login'} />} />
      </Routes>
    </>
  );
}

export default App;
