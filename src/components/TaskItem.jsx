const TaskItem = ({ title, description, status }) => {
  return (
    <div className="w-full h-12 flex items-center">
      <div className="w-3/12 px-3">{title}</div>
      <div className="w-7/12 px-3">{description}</div>
      <div className="w-2/12 px-3">{status}</div>
    </div>
  );
};

export default TaskItem;
