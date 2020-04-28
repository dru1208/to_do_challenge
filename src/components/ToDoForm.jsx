import React from "react"

const ToDoForm = ({ addToDo }) => {
  return (
    <div>
      <form>
        <input type="text" name="title" />
        <input type="text" name="description" />
        <input type="text" name="status" />
        <input type="text" name="deadline" />
      </form>
    </div>
  )
}

export default ToDoForm