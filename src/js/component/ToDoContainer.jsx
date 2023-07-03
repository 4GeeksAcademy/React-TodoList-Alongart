import React, { useState } from "react";
import Todo from "./Todo";

export default function ToDoContainer(props) {
    const [userInput, setUserInput] = useState('');
    const [todoList, setTodoList] = useState([]);

    const onChangeHandler = (event) =>  setUserInput(event.target.value);

    const addTodoHandler = (event) => {
        if (event.key === "Enter") {
          setTodoList([...todoList, userInput]);
          setUserInput("");
        }
      };

    console.log(userInput)

    return(
        <div>
            <form onSubmit={(event) => event.preventDefault()}>
                    <input
                    value={userInput}
                    onChange={onChangeHandler} 
                    onKeyUp={addTodoHandler}/>
                    
            
            </form>
            <Todo todoList={todoList} setTodoList={setTodoList}/>
        </div>
    )
}

