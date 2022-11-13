import "./NewTask.css";
import TaskForm from "./TaskForm";

const NewTask = (props) => {
  const onSaveTaskDataHandler = (enterTaskData) => {
    const TaskData = {
      description: enterTaskData.enterdescription,
      completed: enterTaskData.enterCompleted,
      date: new Date(enterTaskData.enterDate),
      time: enterTaskData.enterTime,
      id: Math.random().toString(),
    };
    props.onAddTask(TaskData);
  };
  return (
    <div className="new-expense">
      <TaskForm onSaveTaskData={onSaveTaskDataHandler} />
    </div>
  );
};

export default NewTask;
