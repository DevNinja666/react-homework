
const express = require("express");
const fs = require("fs");
const cors = require("cors");

const app = express();
const PORT = 5000;
const DB_FILE = "cars.json";

app.use(cors());
app.use(express.json());

if (!fs.existsSync(DB_FILE)) {
  fs.writeFileSync(DB_FILE, "[]");
}

function readCars() {
  return JSON.parse(fs.readFileSync(DB_FILE, "utf-8"));
}

function writeCars(cars) {
  fs.writeFileSync(DB_FILE, JSON.stringify(cars, null, 2));
}

app.get("/cars", (req, res) => {
  res.json(readCars());
});

app.get("/cars/:id", (req, res) => {
  const cars = readCars();
  const car = cars.find(c => c.id == req.params.id);
  car ? res.json(car) : res.status(404).json({ error: "Car not found" });
});
app.post("/cars", (req, res) => {
  const cars = readCars();

  const newCar = {
    id: Date.now(),
    brand: req.body.brand,
    model: req.body.model,
    year: req.body.year,
    price: req.body.price
  };

  cars.push(newCar);
  writeCars(cars);
  res.status(201).json(newCar);
});

app.put("/cars/:id", (req, res) => {
  const cars = readCars();
  const index = cars.findIndex(c => c.id == req.params.id);

  if (index === -1) {
    return res.status(404).json({ error: "Car not found" });
  }

  cars[index] = { ...cars[index], ...req.body };
  writeCars(cars);
  res.json(cars[index]);
});

app.delete("/cars/:id", (req, res) => {
  const cars = readCars().filter(c => c.id != req.params.id);
  writeCars(cars);
  res.json({ message: "Car deleted" });
});
app.listen(PORT, () => {
  console.log(`Server started: http://localhost:${PORT}`);
});
