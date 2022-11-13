import "./Task.css";
import TaskDate from "./TaskDate";
import TaskTime from "./TaskTime";

function Task(props) {
  return (
    <div className="expense-item">
      <TaskDate date={props.date} />
      <TaskTime time={props.time} />
      <div className="expense-item__description">
        <h2>{props.description}</h2>
        <div className="expense-item__price">{props.completed}</div>
      </div>
    </div>
  );
}

export default Task;
