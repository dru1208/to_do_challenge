import React from "react"
import ToDo from "./ToDo"
import ToDosHeader from "./ToDosHeader"
import ToDoForm from "./ToDoForm"
import "./ToDos.css"

const ToDoList = ({ toDos, listName }) => {
  return (
    <div className="list-container">
      <ToDosHeader listName={listName} />
      { toDos.map((toDo, index) => <ToDo toDo={toDo} key={index} />)}
      <button className="list-button">Add ToDo</button>
      <ToDoForm addToDo={""} />
    </div>
  )
}

export default ToDoList