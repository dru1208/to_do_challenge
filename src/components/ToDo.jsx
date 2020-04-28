import React from "react"

const ToDo = ({ toDo, removeToDo }) => {
  const { title, description, status, deadline } = toDo

  const removeOnClick = () => {
    removeToDo(toDo)
  }

  return (
    <div className="item-container bordered">
      <div className="item-subcontainer">
        <div className="item-title">{title}</div>
        <button onClick={removeOnClick}>Delete</button>
      </div>
      <div className="item-description">{description}</div>
      <div className="item-subcontainer">
        <div className="item-status">{status}</div>
        <div className="item-deadline">{deadline}</div>
      </div>
    </div>
  )

}

export default ToDo