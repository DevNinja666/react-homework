import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    setTasks([...tasks, "Hello World!"]);
  };

  return (
    <div className="container mt-4">
      <button className="btn btn-primary" onClick={addTask}>
        Add
      </button>

      <ul className="list-group mt-3">
        {tasks.map((task, index) => (
          <li key={index} className="list-group-item">
            {task}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
