import "./TaskTime.css";
import "./TaskDate.css";

const TaskTime = (props) => {
  return (
    <div className="expense-date">
      <input type="time" value={props.time} />
    </div>
  );
};

export default TaskTime;
