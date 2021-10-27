import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
function Output() {
  var taskName = "",
    taskDate = "",
    taskTime = "";
  const [taskArr, setTaskArr] = useState([]);
  var appendToArr = (taskObj) => {
    const newTask = {
      taskName: taskObj.taskName,
      taskTime: `${taskObj.taskTime} \n  ${taskObj.taskDate}`,
    };
    setTaskArr((arr) => [...arr, newTask]);
  };
  const filArray = (taskObj) => {
    var newArr = taskArr.filter(
      (element) =>
        element.taskName !== taskObj.taskName &&
        element.taskTime !== `${taskObj.taskTime} \n  ${taskObj.taskDate}`
    );
    setTaskArr(newArr);
    console.log(newArr);
  };
  return (
    <div className="tasks">
      <div className="input-group flex-nowrap">
        <span className="input-group-text" id="addon-wrapping">
          TASK
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="Enter task here"
          aria-label="Username"
          aria-describedby="addon-wrapping"
          onChange={(val) => {
            taskName = val.target.value;
          }}
        />
      </div>
      <div className="input-group flex-nowrap">
        <span className="input-group-text" id="addon-wrapping">
          DATE
        </span>
        <input
          className="form-control"
          placeholder="Enter task here"
          aria-label="Username"
          aria-describedby="addon-wrapping"
          type="date"
          data-date-format="DD MMMM YYYY"
          id="date"
          onChange={(val) => {
            taskDate = val.target.value;
          }}
        />
      </div>
      <div className="input-group flex-nowrap">
        <span className="input-group-text" id="addon-wrapping">
          TIME
        </span>
        <input
          className="form-control"
          placeholder="Enter task here"
          aria-label="Username"
          aria-describedby="addon-wrapping"
          type="time"
          id="time"
          onChange={(val) => {
            taskTime = val.target.value;
          }}
        />
      </div>
      <button
        type="button"
        className="btn btn-secondary"
        onClick={() => appendToArr({ taskName, taskDate, taskTime })}
      >
        ADD
      </button>

      <>
        {taskArr.map((taskObj1, index) => {
          return (
            <>
              <Events data={taskObj1} key={`${index}_${taskObj1.taskName}`} />
              <button
                type="button"
                className="btn-close"
                aria-label="Close"
                onClick={() => filArray(taskObj1)}
              ></button>
            </>
          );
        })}
      </>
    </div>
  );
}
function Events(props) {
  var { taskName, taskTime } = props.data;
  return (
    <div className="task">
      <div>{taskName}</div>
      <div>{taskTime}</div>
    </div>
  );
}
ReactDOM.render(<Output />, document.getElementById("root"));
