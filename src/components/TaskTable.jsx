// componentes
import TaskItem from './TaskItem';

// hooks
import { useSelector } from 'react-redux';

const TaskTable = () => {
  const tasks = useSelector((state) => state.tasks);

  return (
    <div className="w-full mt-8 px-14 flex flex-col items-center">
      <div className="bg-sky-950 w-full h-12 rounded-t-md flex items-center">
        <div className="w-3/12 px-3">Titulo</div>
        <div className="w-7/12 px-3">Descripcion</div>
        <div className="w-2/12 px-3">Status</div>
      </div>
      <div className="bg-sky-900 w-full h-96 overflow-scroll overflow-x-hidden rounded-b-md">
        {tasks.map((task, index) => {
          return (
            <TaskItem
              key={index}
              id={task.id}
              title={task.title}
              description={task.description}
              status={task.status}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TaskTable;
