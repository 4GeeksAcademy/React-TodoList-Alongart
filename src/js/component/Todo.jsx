import React, { useState } from "react";
import ToDoContainer from "./ToDoContainer";

export default function Todo({ todoList, setTodoList }) {
    
    const [showDelete, setShowDelete] = useState(false);
    
    const removeToDo = () => {
        setTodoList([]);
      };
    
      const handleMouseEnter = (index) => {
        setShowDelete(index);
      };
    
      const handleMouseLeave = () => {
        setShowDelete(false);
      };
    
      const todos = [];
      for (let i = 0; i < todoList.length; i++) {
        todos.push(
          <div
            key={i}
            onMouseEnter={() => handleMouseEnter(i)}
            onMouseLeave={handleMouseLeave}
          >
            <p>{todoList[i]}</p>
            {showDelete && (
              <button onClick={removeToDo}>Delete</button>
            )}
          </div>
        );
      }
    
      return (
        <div>
          {todos}
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