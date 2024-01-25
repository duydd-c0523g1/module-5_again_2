import "./TodoList.css";
import { useEffect, useState } from "react";

export default function TodoList() {
  const [tasks, setTasks] = useState([{ id: 1, taskName: "Placeholder" }]);
  const [task, setTask] = useState({});

  useEffect(() => {}, []);

  const handleInputChange = (evt) => {
    setTask((prevState) => {
      return {
        ...prevState,
        [evt.target.name]: evt.target.value,
      };
    });
    console.log(evt.target.value);
  };

  const handleSubmit = () => {
    setTasks((prevState) => [...prevState, task]);
    setTask({
      id: "",
      taskName: ""
    })
  };
  return (
    <div className="container-fluid">
      <h1>TO DO LIST</h1>
      {/* <iframe
        style={{ borderRadius: 12 }}
        src="https://open.spotify.com/embed/playlist/37i9dQZF1DWVOaOWiVD1Lf?utm_source=generator"
        width="100%"
        height={352}
        frameBorder={0}
        allowFullScreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      /> */}
      <div className="addTaskForm">
        <form className="row g-3">
          <label htmlFor="inputId">Task ID:</label>
          <div className="col-auto">
            <input
              type="text"
              className="form-control"
              id="inputId"
              name="id"
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
              name="taskName"
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
            <tr key={task.id}>
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
