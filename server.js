const express = require("express");
const cors = require("cors");
const { v4: uuidv4 } = require('uuid');
const { request } = require("express");
const app = express();
app.use(cors());

app.use(express.json({ extended: false }));

const todos = [
    {
        message: "Hello World!",
        id: 1
    },
    {
        message: "This is me, learning React and Express.",
        id: 2
    }
]

app.get("/", (req, res) => {
    res.status(200).json(todos);
});

app.post("/", (req, res) => {
    const newTodo = {
        message: req.body.message,
        id: uuidv4()
    }

    todos.push(newTodo)
    res.status(201).json(todos)
})

app.delete("/:id", (req, res) => {
    const index = todos.indexOf(todos.find((todo) => todo.id == req.params.id))
    todos.splice(index, 1);
    res.json(todos)
});

const PORT = 5001
app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`)
})