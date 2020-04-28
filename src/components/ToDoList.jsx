import React, { useState } from "react"
import ToDo from "./ToDo"
import ToDosHeader from "./ToDosHeader"
import ToDoForm from "./ToDoForm"
import "./ToDos.css"

const ToDoList = ({ toDos, listName, setToDos }) => {
  const [activeForm, setActiveForm] = useState(false)

  const toggleForm = () => {
    setActiveForm(prev => !prev)
  }

  const addToDo = (toDoFields) => {
    const id = stringHash(toDoFields.title)
    const toDo = { ...toDoFields, id }
    setToDos(prev => [...prev, toDo])
  }

  return (
    <div className="list-container">
      <ToDosHeader listName={listName} />
      { toDos.map((toDo, index) => <ToDo toDo={toDo} key={index} />)}
      <button
        className="list-button"
        onClick={toggleForm}
      >
        { activeForm ? "Hide Form" : "Add ToDo" }
      </button>
      { activeForm ? <ToDoForm addToDo={addToDo} /> : null }
    </div>
  )
}

export default ToDoList