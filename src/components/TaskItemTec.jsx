// librerías
import { Link } from 'react-router-dom';

// constantes
import PATH_ROUTES from '../constants/pathRoutes';

const TaskItemTec = ({ id, title, description, area, status }) => {
  // Lógica para implementar un recorte si los títulos y las descripciones son muy largos
  let smallTitle = null;
  let smallDescription = null;

  if (title.length > 36) {
    smallTitle = title.split('').slice(0, 33).concat(' ...').join('');
  }
  if (description.length > 53) {
    smallDescription = description.split('').slice(0, 50).concat(' ...').join('');
  }

  return (
    <div className="w-full h-12 flex items-center relative group hover:bg-sky-950">
      <Link to={`${PATH_ROUTES.TASK_DETAIL}/${id}`} className="w-3/12 px-3 cursor-pointer">{smallTitle ? smallTitle : title}</Link>
      <Link to={`${PATH_ROUTES.TASK_DETAIL}/${id}`} className="w-4/12 px-3 cursor-pointer">{smallDescription ? smallDescription : description}</Link>
      <Link to={`${PATH_ROUTES.TASK_DETAIL}/${id}`} className="w-2/12 px-3 cursor-pointer">{area ? area.username : '---'}</Link>
      <div className="w-2/12 px-3">{status}</div>

      {status !== 'approved' && (
        <Link to={`${PATH_ROUTES.EDIT_TASK}/${id}`}>
          <div className="absolute right-24 top-2 text-xl bg-blue-800 p-1 w-8 h-8 rounded-lg opacity-0 group-hover:opacity-100 cursor-pointer">
            <ion-icon name="create-outline"></ion-icon>
          </div>
        </Link>
      )}
    </div>
  );
};

export default TaskItemTec;
