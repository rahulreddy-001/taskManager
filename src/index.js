import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
var timeAndDate = () => {
  const date = new Date();
  const value_ = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}   ${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
  return value_;
};
var sampleArr = [
  {
    taskName: "Task_001",
    taskTime: timeAndDate(),
  },
  {
    taskName: "Task_002",
    taskTime: timeAndDate(),
  },
  {
    taskName: "Task_003",
    taskTime: timeAndDate(),
  },
  {
    taskName: "Task_004",
    taskTime: timeAndDate(),
  },
];

function Output() {
  var taskName = "",
    taskDate = "",
    taskTime = "";
  const [taskArr, setTaskArr] = useState(sampleArr);
  var appendToArr = (taskObj) => {
    const newTask = {
      taskName: taskObj.taskName,
      taskTime: `${taskObj.taskTime}   ${taskObj.taskDate}`,
    };
    setTaskArr((arr) => [...arr, newTask]);
  };
  return (
    <div className="tasks">
      <div className="input-group flex-nowrap">
        <span className="input-group-text" id="addon-wrapping">
          Task
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
          Date
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
          Time
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
          return <Events data={taskObj1} key="index" />;
        })}
      </>
    </div>
  );
}
function Events(props) {
  var { taskName, taskTime, key } = props.data;
  console.log();
  return (
    <div className="task">
      <div>{taskName}</div>
      <div>{taskTime}</div>
      <button type="button" className="btn-close" aria-label="Close"></button>
    </div>
  );
}
ReactDOM.render(<Output />, document.getElementById("root"));
