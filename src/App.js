import { useState } from "react";
import Tasks from "./components/Tasks";
import NewTask from "./components/NewTask";

const IntialTasks = [
  {
    id: "e1",
    description: "go to movie",
    completed: "False",
    date: new Date(2020, 7, 14),
    time: "00:00",
  },
];

function App() {
  const [task, setTasks] = useState(IntialTasks);
  const TaskHandler = (task) => {
    console.log(task);
    setTasks((prevTasks) => {
      return [task, ...prevTasks];
    });
  };
  return (
    <div>
      <NewTask onAddTask={TaskHandler} />
      <Tasks items={task} />
    </div>
  );
}

export default App;
