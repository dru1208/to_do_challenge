import React from "react"

const ToDoFormToggle = ({ toggleForm, activeForm }) => {
  return (
    <>
      <button
        className="list-button"
        onClick={toggleForm}
      >
        { activeForm ? "Hide Form" : "Add ToDo" }
      </button>
    </>
  )
}

export default ToDoFormToggle