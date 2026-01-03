import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Learn React", done: false },
    { id: 2, text: "Build Todo App", done: true },
    { id: 3, text: "Drink coffee", done: false },
  ]);

  const [filter, setFilter] = useState("all"); 


  const filteredTasks = tasks.filter((task) => {
    if (filter === "active") return !task.done;
    if (filter === "done") return task.done;
    return true; // all
  });

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  };


  const getButtonClass = (value) =>
    filter === value ? "btn btn-primary" : "btn btn-outline-primary";

  return (
    <div className="container mt-4">

      <div className="btn-group mb-3">
        <button className={getButtonClass("all")} onClick={() => setFilter("all")}>
          All
        </button>

        <button
          className={getButtonClass("active")}
          onClick={() => setFilter("active")}
        >
          Active
        </button>

        <button
          className={getButtonClass("done")}
          onClick={() => setFilter("done")}
        >
          Done
        </button>
      </div>

     
      <ul className="list-group">
        {filteredTasks.map((task) => (
          <li
            key={task.id}
            className={`list-group-item d-flex justify-content-between ${
              task.done ? "text-decoration-line-through text-muted" : ""
            }`}
          >
            {task.text}

            <input
              type="checkbox"
              checked={task.done}
              onChange={() => toggleTask(task.id)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
