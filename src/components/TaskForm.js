import { useState } from "react";
import "./TaskForm.css";

const TaskForm = (props) => {
  const [input, setInput] = useState({
    enterdescription: "",
    enterCompleted: "",
    enterDate: "",
    enterTime: "",
  });

  const [isDescription, setIsValidDesc] = useState(true);
  const [isCompleted, setIsValidCompleted] = useState(true);
  const [isDate, setIsValidDate] = useState(true);
  const [isTime, setIsValidTime] = useState(true);

  const descriptionChangeHandler = (event) => {
    if (input.enterdescription.trim().length > 0) {
      setIsValidDesc(true);
    }
    setInput({
      ...input,
      enterdescription: event.target.value,
    });
  };

  const completedChangeHandler = (event) => {
    if (input.enterCompleted.trim().length > 0) {
      setIsValidCompleted(true);
    }
    setInput({
      ...input,
      enterCompleted: event.target.value,
    });
  };

  const dateChangeHandler = (event) => {
    if (input.enterDate.trim().length > 0) {
      setIsValidDate(true);
    }
    setInput({
      ...input,
      enterDate: event.target.value,
    });
  };

  const timeChangeHandler = (event) => {
    if (input.enterTime.trim().length > 0) {
      setIsValidTime(true);
    }
    setInput({
      ...input,
      enterTime: event.target.value,
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (input.enterdescription.trim().length === 0) {
      setIsValidDesc(false);
      return;
    } else if (input.enterCompleted.trim().length === 0) {
      setIsValidCompleted(false);
      return;
    } else if (input.enterDate.trim().length === 0) {
      setIsValidDate(false);
      return;
    } else if (input.enterTime.trim().length === 0) {
      setIsValidTime(false);
      return;
    }

    props.onSaveTaskData(input);
    setInput({
      enterdescription: "",
      enterCompleted: "",
      enterDate: "yyyy-MM-dd",
      enterTime: "",
    });
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__controls ">
          <label style={{ color: !isDescription ? "red" : "black" }}>
            description
          </label>
          <input
            type="text"
            value={input.enterdescription}
            onChange={descriptionChangeHandler}
          />
        </div>
        <div className="new-expense__controls ">
          <label style={{ color: !isCompleted ? "red" : "black" }}>
            completed
          </label>
          <input
            type="text"
            value={input.enterCompleted}
            onChange={completedChangeHandler}
          />
        </div>
        <div className="new-expense__controls ">
          <label style={{ color: !isDate ? "red" : "black" }}>Date</label>
          <input
            type="date"
            value={input.enterDate}
            onChange={dateChangeHandler}
          />
        </div>
        <div className="new-expense__controls ">
          <label style={{ color: !isTime ? "red" : "black" }}>Time</label>
          <input
            type="time"
            value={input.enterTime}
            onChange={timeChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">AddNewTask</button>
      </div>
    </form>
  );
};

export default TaskForm;
