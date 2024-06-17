import TaskItem from './TaskItem';

const TaskTable = () => {
  return (
    <div className="w-screen mt-8 px-14 flex flex-col items-center">
      <div className="bg-sky-950 w-full h-12 rounded-t-md flex items-center">
        <div className="w-3/12 px-3">Titulo</div>
        <div className="w-7/12 px-3">Descripcion</div>
        <div className="w-2/12 px-3">Status</div>
      </div>
      <div>
        <TaskItem />
      </div>
    </div>
  );
};

export default TaskTable;