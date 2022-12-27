import React from "react";
import TodoItem from "./TodoItem"

const Todos = ({ todos, deleteTodo }) => {
    return todos.map((todo) => <TodoItem deleteTodo={deleteTodo} key={todo.id} todo={todo} />);
}

export default Todos;