import React, { useState } from "react";
import ToDoList from "./ToDoList";

const App = () => {
  const [inputList, setInputList] = useState("");
  const [items, setItems] = useState([]);
  const itemEvent = (event) => {
    setInputList(event.target.value);
  };
  const listOfItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList("");
  };
  const deleteItems = (id) => {
    setItems((oldItems) => {
      return oldItems.filter((arrElem,index) => {
        return index!==id
      })
    })
  }

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>To-Do List</h1>
          <br />
          <input
            type={"text"}
            placeholder="Add Items"
            onChange={itemEvent}
            value={inputList}
          />
          <button onClick={listOfItems}> + </button>

          <ol>
            {items.map((itemVal, index) => {
              return <ToDoList 
              key={index} 
              id={index} 
              text={itemVal} 
              onSelect={deleteItems}
              />;
            })}
          </ol>
        </div>
      </div>
    </>
  );
};

export default App;
