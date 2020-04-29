import React from "react"
import ToDosHeader from "./ToDosHeader"
import ToDoListContent from "./ToDoListContent"
import ToDoFormToggle from "./ToDoFormToggle"
import ToDoForm from "./ToDoForm"
import useToggle from "../hooks/useToggle"

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

  const { activeForm, toggleForm } = useToggle()

  return (
    <div className="list-container bordered">
      <ToDosHeader listName={listName} />
      <ToDoListContent toDos={data} removeToDo={removeToDo} />
      <ToDoFormToggle
        toggleForm={toggleForm}
        activeForm={activeForm}
      />
      { activeForm ? <ToDoForm addToDo={addToDo} /> : null }
    </div>
  )
}

export default ToDoList