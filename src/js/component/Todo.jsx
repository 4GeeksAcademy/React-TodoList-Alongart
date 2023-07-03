import React, { useState } from "react";
import ToDoContainer from "./ToDoContainer";

export default function Todo({ todoList, setTodoList }) {
    
    const [showDelete, setShowDelete] = useState(false);

    const removeToDo = (index) => {
      const newTodoList = [...todoList];
      newTodoList.splice(index, 1);
      setTodoList(newTodoList);
    };

    return (
      <div
        onMouseEnter={() => setShowDelete(true)}
        onMouseLeave={() => setShowDelete(false)}
      >
        {todoList.map((todo, index) => (
          <div className="todosList" key={index}>
            <p>{todo}</p>
            {showDelete && (
              <button onClick={removeToDo}>x</button>
            )}
          </div>
        ))}
      </div>
    );
}

// {/* <div 
// // onMouseEnter={() => setShowDelete(true)}
// // onMouseLeave={() => setShowDelete(false)}
// >
//     <p>{todoList}</p>

// {/* {showDelete && 
// <a onClick={() => removeToDo()}>x</a>
// }  */}
// </div> */}