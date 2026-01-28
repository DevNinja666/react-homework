const URL = "http://localhost:4000/todos";

export const api = {
  get: () => fetch(URL).then(r => r.json()),
  create: data =>
    fetch(URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    }).then(r => r.json()),
  update: (id, data) =>
    fetch(`${URL}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    }),
  remove: id =>
    fetch(`${URL}/${id}`, { method: "DELETE" })
};
export default function AddComponent({ onAdd }) {
  return (
    <div>
      <button onClick={onAdd}>Add</button>
    </div>
  );
}
export default function ListComponent({
  todos,
  onSelect,
  onToggle,
  onRemove
}) {
  return (
    <div>
      {todos.map(todo => (
        <div key={todo.id} style={{ display: "flex", gap: 8 }}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => onToggle(todo)}
          />
          <span onClick={() => onSelect(todo)}>
            {todo.title}
          </span>
          <button onClick={() => onRemove(todo.id)}>✖</button>
        </div>
      ))}
    </div>
  );
}
export default function InfoComponent({ todo, onEdit }) {
  if (!todo) return <div>Select item</div>;

  return (
    <div>
      <h3>InfoComponent</h3>
      <input
        value={todo.title}
        onChange={e => onEdit({ title: e.target.value })}
      />
      <textarea
        value={todo.description}
        onChange={e => onEdit({ description: e.target.value })}
      />
      <p>Status: {todo.completed ? "Done" : "Todo"}</p>
    </div>
  );
}import { useEffect, useState } from "react";
import { api } from "./api";
import AddComponent from "./components/AddComponent";
import ListComponent from "./components/ListComponent";
import InfoComponent from "./components/InfoComponent";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [selected, setSelected] = useState(null);

  const load = async () => setTodos(await api.get());
  useEffect(() => { load(); }, []);

  const addTodo = async () => {
    await api.create({ title: "short description" });
    load();
  };

  const toggle = async todo => {
    await api.update(todo.id, { completed: !todo.completed });
    load();
  };

  const edit = async data => {
    await api.update(selected.id, data);
    load();
  };

  const remove = async id => {
    await api.remove(id);
    setSelected(null);
    load();
  };

  return (
    <div style={{ display: "flex", padding: 20 }}>

      <div style={{ width: 300 }}>
        <AddComponent onAdd={addTodo} />
        <ListComponent
          todos={todos}
          onSelect={setSelected}
          onToggle={toggle}
          onRemove={remove}
        />
      </div>

      
      <div style={{
        marginLeft: 40,
        width: 300,
        border: "2px solid black",
        padding: 20
      }}>
        <InfoComponent todo={selected} onEdit={edit} />
      </div>
    </div>
  );
}
