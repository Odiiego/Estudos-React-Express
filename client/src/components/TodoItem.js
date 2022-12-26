import React from "react";
import "./TodoItem.css"

const TodoItem = ({todo}) => {
    return (
        <div className="todoItem">
            <p className="todoContent">{todo.message}</p>
        </div>
    )
}

export default TodoItem