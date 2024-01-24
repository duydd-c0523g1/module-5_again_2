import "./TodoList.css";
import { useEffect, useState } from "react";

export default function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState({});

  useEffect(() => {
    setTasks([{ id: 1, taskName: "Placeholder" }]);
  }, []);

  const handleInputChange = (evt) => {
    setTask((prevState) => {
      return {
        ...prevState,
        [evt.target.name]: evt.target.value,
      };
    });
    console.log(evt.target.value);
  };

  const handleSubmit = (task) => {
    setTasks((prevState) => [...prevState, task]);
    // setTask({
    //   id: "",
    //   taskName: ""
    // })
    console.log(tasks);
  };
  return (
    <div className="container-fluid">
      <h1>TO DO LIST</h1>
      <div className="addTaskForm">
        <form className="row g-3">
          <label htmlFor="inputTask">Task ID:</label>
          <div className="col-auto">
            <input
              type="text"
              className="form-control"
              id="inputId"
              value={task.id}
              onChange={handleInputChange}
            />
          </div>
          <label htmlFor="inputTask">Task name:</label>
          <div className="col-auto">
            <input
              type="text"
              className="form-control"
              id="inputTask"
              value={task.taskName}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-auto">
            <button
              type="button"
              className="btn btn-primary mb-3"
              onClick={handleSubmit}
            >
              Add
            </button>
          </div>
        </form>
      </div>
      <table className="table-sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Task</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.taskName}>
              <td>{task.id}</td>
              <td>{task.taskName}</td>
              <td>
                <div className="form-check form-switch">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    role="switch"
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
