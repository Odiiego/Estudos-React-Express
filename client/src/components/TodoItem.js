import React from "react";
import "./TodoItem.css"

const TodoItem = ({ todo, deleteTodo }) => {

    const handleDelete = () => {
        deleteTodo(todo);
    }

    return (
        <div className="todoItem" onClick={handleDelete}>
            <p className="todoContent">{todo.message}</p>
        </div>
    )
}

export default TodoItem