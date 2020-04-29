import React, { useState } from "react"
import ToDosHeader from "./ToDosHeader"
import PopulatedToDoList from "./PopulatedToDoList"
import UnpopulatedToDoList from "./UnpopulatedToDoList"
import ToDoForm from "./ToDoForm"

const ToDoList = ({ list, listName, dispatch }) => {
  const { id, data } = list
  const addToDo = (toDoFields) => {
    const action = {
      type: "ADD_TO_DO",
      listId: id,
      toDoFields
    }
    dispatch(action)
  }
  const removeToDo = (toDoId) => {
    const action = {
      type: "REMOVE_TO_DO",
      listId: id,
      toDoId
    }
    dispatch(action)
  }

  const renderListContent = () => {
    return data.length > 0 ?
      <PopulatedToDoList toDos={data} removeToDo={removeToDo} /> :
      <UnpopulatedToDoList />
  }

  const [activeForm, setActiveForm] = useState(false)

  const toggleForm = () => {
    setActiveForm(prev => !prev)
  }

  const formButtonText = () => {
    return activeForm ? "Hide Form" : "Add ToDo"
  }

  return (
    <div className="list-container bordered">
      <ToDosHeader listName={listName} />
      {
        renderListContent()
      }
      <button
        className="list-button"
        onClick={toggleForm}
      >
        { formButtonText() }
      </button>
      { activeForm ? <ToDoForm addToDo={addToDo} /> : null }
    </div>
  )
}

export default ToDoList