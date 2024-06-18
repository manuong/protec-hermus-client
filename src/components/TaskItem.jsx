const TaskItem = ({ title, description, status }) => {
  let smallTitle = null;
  let smallDescription = null;

  if (title.length > 36) {
    smallTitle = title.split('').slice(0, 33).concat(' ...').join('');
  }
  if (description.length > 79) {
    smallDescription = description.split('').slice(0, 76).concat(' ...').join('');
  }
  return (
    <div className="w-full h-12 flex items-center">
      <div className="w-3/12 px-3">{smallTitle ? smallTitle : title}</div>
      <div className="w-7/12 px-3">{smallDescription ? smallDescription : description}</div>
      <div className="w-2/12 px-3">{status}</div>
    </div>
  );
};

export default TaskItem;
