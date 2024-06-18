import { useSelector } from 'react-redux';
import TaskItemTec from './TaskItemTec';

const TaskTableTec = () => {
  const tasks = useSelector((state) => state.tasks);

  return (
    <div className="w-full mt-8 px-14 flex flex-col items-center">
      <div className="bg-sky-950 w-full h-12 rounded-t-md flex items-center">
        <div className="w-3/12 px-3">Titulo</div>
        <div className="w-4/12 px-3">Descripción</div>
        <div className="w-2/12 px-3">Área</div>
        <div className="w-2/12 px-3 mr-32">Status</div>
      </div>
      <div className="bg-sky-900 w-full h-96 overflow-scroll overflow-x-hidden rounded-b-md">
        {tasks.map((task, index) => {
          return (
            <TaskItemTec
              key={index}
              id={task.id}
              title={task.title}
              description={task.description}
              area={task.area}
              status={task.status}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TaskTableTec;
