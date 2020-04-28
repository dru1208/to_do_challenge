import React from "react"
import ToDo from "./ToDo"
import ToDosHeader from "./ToDosHeader"
import ToDoForm from "./ToDoForm"

const ToDoList = ({ listInfo, listName }) => {
  const { toDos, addToDo, removeToDo, activeForm, toggleForm } = listInfo

  return (
    <div className="list-container bordered">
      <ToDosHeader listName={listName} />
      {
        toDos.map((toDo, index) => {
          return <ToDo toDo={toDo} key={index} removeToDo={removeToDo} />
        })
      }
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