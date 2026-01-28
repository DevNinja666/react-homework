const express = require("express");
const cors = require("cors");
const { v4: uuid } = require("uuid");

const app = express();
app.use(cors());
app.use(express.json());

let todos = [];


app.get("/todos", (req, res) => res.json(todos));


app.post("/todos", (req, res) => {
  const todo = {
    id: uuid(),
    title: req.body.title,
    description: req.body.description || "",
    completed: false
  };
  todos.push(todo);
  res.status(201).json(todo);
});

app.put("/todos/:id", (req, res) => {
  todos = todos.map(t =>
    t.id === req.params.id ? { ...t, ...req.body } : t
  );
  res.sendStatus(200);
});


app.delete("/todos/:id", (req, res) => {
  todos = todos.filter(t => t.id !== req.params.id);
  res.sendStatus(204);
});

app.listen(4000, () =>
  console.log("API → http://localhost:4000")
);
