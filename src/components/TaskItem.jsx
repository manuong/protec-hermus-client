import { Link } from 'react-router-dom';
import PATH_ROUTES from '../constants/pathRoutes';

const TaskItem = ({ id, title, description, status }) => {
  // Lógica para implementar un recorte si los títulos y las descripciones son muy largos
  let smallTitle = null;
  let smallDescription = null;

  if (title.length > 36) {
    smallTitle = title.split('').slice(0, 33).concat(' ...').join('');
  }
  if (description.length > 79) {
    smallDescription = description.split('').slice(0, 76).concat(' ...').join('');
  }
  return (
    <div className="w-full h-12 flex items-center hover:bg-sky-950">
      <Link to={PATH_ROUTES.TASK_DETAIL} className="w-3/12 px-3 cursor-pointer">
        {smallTitle ? smallTitle : title}
      </Link>
      <Link to={`${PATH_ROUTES.TASK_DETAIL}/${id}`} className="w-7/12 px-3 cursor-pointer">
        {smallDescription ? smallDescription : description}
      </Link>
      <div className="w-2/12 px-3">{status}</div>
    </div>
  );
};

export default TaskItem;
