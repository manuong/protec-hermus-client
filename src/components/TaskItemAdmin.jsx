import { Link } from 'react-router-dom';
import PATH_ROUTES from '../constants/pathRoutes';
import useTask from '../hooks/useTask';
import localStorageService from '../services/localStorageService';
import { useDispatch } from 'react-redux';
import { deleteTask } from '../redux/actions';

const TaskItemAdmin = ({ id, title, description, area, status, assigned, comment }) => {
  const { deleteTask: deleteTaskDB } = useTask();
  const dispatch = useDispatch();

  let smallTitle = null;
  let smallDescription = null;
  let smallComment = null;

  if (title.length > 25) {
    smallTitle = title.split('').slice(0, 22).concat(' ...').join('');
  }
  if (description.length > 39) {
    smallDescription = description.split('').slice(0, 36).concat(' ...').join('');
  }
  if (comment) {
    if (comment.length > 33) {
      smallComment = comment.split('').slice(0, 30).concat(' ...').join('');
    }
  }

  const handleClick = () => {
    const token = localStorageService.getToken();

    dispatch(deleteTask(id));
    deleteTaskDB(id, token);
  };

  return (
    <div className="w-full h-12 flex items-center relative group hover:bg-sky-950">
      <div className="w-4/12 px-3">{smallTitle ? smallTitle : title}</div>
      <div className="w-6/12 px-3">{smallDescription ? smallDescription : description}</div>
      <div className="w-2/12 px-3">{area ? area.username : '---'}</div>
      <div className="w-2/12 px-3">{status}</div>
      <div className="w-2/12 px-3">{assigned ? assigned.username : '---'}</div>
      <div className="w-6/12 px-3">{smallComment ? smallComment : comment ? comment : '---'}</div>

      {status !== 'approved' && (
        <Link to={`${PATH_ROUTES.EDIT_TASK}/${id}`}>
          <div className="absolute right-16 top-2 text-xl bg-blue-800 p-1 w-8 h-8 rounded-lg opacity-0 group-hover:opacity-100 cursor-pointer">
            <ion-icon name="create-outline"></ion-icon>
          </div>
        </Link>
      )}

      <button
        onClick={handleClick}
        className="absolute right-5 top-2 text-xl bg-red-700 p-1 w-8 h-8 rounded-lg opacity-0 group-hover:opacity-100 cursor-pointer"
      >
        <ion-icon name="trash-outline"></ion-icon>
      </button>
    </div>
  );
};

export default TaskItemAdmin;
