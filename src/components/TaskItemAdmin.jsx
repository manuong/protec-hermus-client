const TaskItemAdmin = ({ title, description, area, status, assigned, comment }) => {
  let smallTitle = null;
  let smallDescription = null;
  let smallComment = null;

  if (title.length > 25) {
    smallTitle = title.split('').slice(0, 22).concat(' ...').join('');
  }
  if (description.length > 79) {
    smallDescription = description.split('').slice(0, 76).concat(' ...').join('');
  }
  if (comment) {
    if (comment.length > 79) {
      smallComment = comment.split('').slice(0, 76).concat(' ...').join('');
    }
  }

  return (
    <div className="w-full h-12 flex items-center">
      <div className="w-4/12 px-3">{smallTitle ? smallTitle : title}</div>
      <div className="w-6/12 px-3">{smallDescription ? smallDescription : description}</div>
      <div className="w-2/12 px-3">{area ? area.username : '---'}</div>
      <div className="w-2/12 px-3">{status}</div>
      <div className="w-2/12 px-3">{assigned ? assigned.username : '---'}</div>
      <div className="w-6/12 px-3">{smallComment ? smallComment : comment ? comment : '---'}</div>
    </div>
  );
};

export default TaskItemAdmin;
