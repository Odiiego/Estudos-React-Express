const express = require("express");
const cors = require("cors");
const { v4: uuidv4 } = require('uuid');
const app = express();
app.use(cors());

app.use(express.json({ extended: false }));

const todos = [
    {
        message: "Wash Car...",
        id: 1
    },
    {
        message: "Go for run...",
        id: 2
    },
    {
        message: "Cook dinner...",
        id: 3
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

const PORT = 5001
app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`)
})