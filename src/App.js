import React, { useState } from 'react';

import ToDoList from "./components/ToDoList"
import AddToDoList from "./components/AddToDoList"

import useToDos from "./hooks/useToDos"

import "./styles/App.css"
import "./styles/ToDos.css"

function App() {
  const firstList = useToDos()
  const [lists, setLists] = useState([firstList])

  return (
    <div className="lists-container">
      {
        lists.map((info, index) => {
          return (
            <ToDoList
              key={index}
              listName="Things To Do"
              listInfo={info}
            />
          )
        })
      }
    </div>
  );
}

export default App;
