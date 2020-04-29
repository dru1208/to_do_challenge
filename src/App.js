import React from 'react';

import ToDoList from "./components/ToDoList"
import AddToDoList from "./components/AddToDoList"

import useToDoLists from "./hooks/reducers/useToDoLists"

import "./styles/App.css"
import "./styles/ToDos.css"

function App() {
  const { lists, dispatch } = useToDoLists()

  const renderAddListButton = () => {
    return lists.length < 3 ? <AddToDoList dispatch={dispatch} /> : null
  }

  return (
    <div className="lists-container">
      {
        lists.map((list, index) => {
          return (
            <ToDoList
              key={index}
              listName="Things To Do"
              list={list}
              dispatch={dispatch}
            />
          )
        })
      }
      { renderAddListButton() }
    </div>
  );
}

export default App;
