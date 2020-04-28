import React from "react"

const ToDo = ({ toDo }) => {
  const { title, description, status, deadline } = toDo
  return (
    <div className="item-container">
      <div className="item-title">{title}</div>
      <div className="item-description">{description}</div>
      <div className="item-subcontainer">
        <div className="item-status">{status}</div>
        <div className="item-deadline">{deadline}</div>
      </div>
    </div>
  )

}

export default ToDo