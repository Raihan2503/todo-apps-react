import React from "react";
import TodoItem from "./TodoItem";

function TodoList({todos, removeHandlerTodos}) {
    return (
        <div className="todo-list">
            <table>
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Todo Item</th>
                        <th>Action</th>
                    </tr>
                </thead>
                {todos.map((todo, index) => (
                    <TodoItem key={todo.id} {...todo} count={index} removeHandlerTodos={removeHandlerTodos}/>
                ))}
             </table>
        </div>
    )
}

export default TodoList