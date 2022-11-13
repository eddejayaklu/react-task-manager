import Task from "./Task";
import "./Tasks.css";

function Tasks(props) {
  return (
    <div className="expenses">
      {props.items.length === 0 ? (
        <p>No Tasks found</p>
      ) : (
        props.items.map((item) => (
          <Task
            key={item.id}
            description={item.description}
            completed={item.completed}
            date={item.date}
          />
        ))
      )}
    </div>
  );
}

export default Tasks;
