import React from "react";
import ButtonRemove from "./ButtonRemove";

function TodoItem({id, task, count, removeHandlerTodos}) {   
    return(
        <tbody>
            <tr>
                <td>{++count}</td>
                <td>{task}</td>
                <td>
                    <ButtonRemove removeHandlerTodos={() => removeHandlerTodos(id)}/>
                </td>
            </tr>
        </tbody>
    );
}

export default TodoItem;