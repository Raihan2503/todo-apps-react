import React from "react";
import { useState, useEffect } from "react";
// import components
import TodoList from "./TodoList";
import ButtonAdd from "./ButtonAdd";

function Todo() {
    const [todos, setTodos] = useState(() => JSON.parse(localStorage.getItem("todos")) || []);
    const [input, setInput] = useState("");

    // add todos Handler
    const addHandlerTodos = () => {
        setTodos(prevTodos => {
            return [
                ...prevTodos, {id: +new Date(), task: input}
            ];
        })

        setInput("");
    }

    // menyimpan data pada localstorage
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos))
    }, [todos]);

    // input changeHandler
    const inputChangeHandler = (event) => {
        setInput(event.target.value);
    } 

    // delete handler todos
    const removeHandlerTodos = (id) => {
        setTodos(prevTodos => {
            return prevTodos.filter(todo => todo.id !== id);
        });
    }

    return (
        <div className="container">
            <h3>To Do App</h3>
            <div className="todo-input">
                <input value={input} onChange={inputChangeHandler} placeholder="Enter a task here"/>
                <ButtonAdd addHandlerTodos={addHandlerTodos}/>
            </div>
            {/* todo-list */}
            {todos.length === 0 ? (
                <p>Belum ada tugas</p>
            ) : (
                <TodoList todos={todos} removeHandlerTodos={removeHandlerTodos}/>
            )}
        </div>
    );
}

export default Todo;