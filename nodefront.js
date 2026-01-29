
import { useEffect, useState } from "react";
const API_URL = "http://localhost:5000/cars";
export default function App() {
  const [cars, setCars] = useState([]);
  const [car, setCar] = useState({
    brand: "",
    model: "",
    year: "",
    price: ""
  });
  useEffect(() => {
    loadCars();
  }, []);

  function loadCars() {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => setCars(data));
  }
  function addCar() {
    fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(car)
    }).then(() => {
      setCar({ brand: "", model: "", year: "", price: "" });
      loadCars();
    });
  }
  function deleteCar(id) {
    fetch(`${API_URL}/${id}`, { method: "DELETE" })
      .then(loadCars);
  }
  return (
    <div style={{ padding: 20 }}>
      <h1>🚗 Автосалон</h1>
      <input placeholder="Brand"
        value={car.brand}
        onChange={e => setCar({ ...car, brand: e.target.value })} />
      <input placeholder="Model"
        value={car.model}
        onChange={e => setCar({ ...car, model: e.target.value })} />
      <input placeholder="Year"
        value={car.year}
        onChange={e => setCar({ ...car, year: e.target.value })} />
      <input placeholder="Price"
        value={car.price}
        onChange={e => setCar({ ...car, price: e.target.value })} />
      <button onClick={addCar}>Add Car</button>
      <hr />
      <ul>
        {cars.map(c => (
          <li key={c.id}>
            {c.brand} {c.model} ({c.year}) — ${c.price}
            <button onClick={() => deleteCar(c.id)}> ❌ </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
