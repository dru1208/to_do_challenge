import React from "react"
import ToDoFormGroup from "./ToDoFormGroup"

const formProps = [
  {
    label: "Title",
    fieldName: "title"
  },
  {
    label: "Description",
    fieldName: "description"
  },
  {
    label: "Status",
    fieldName: "status"
  },
  {
    label: "Deadline",
    fieldName: "deadline"
  }
]

const ToDoForm = ({ addToDo }) => {
  return (
    <form className="form-container">
      {
        formProps.map((fieldProps, index) =>
          <ToDoFormGroup key={index} {...fieldProps} />
        )
      }
    </form>
  )
}

export default ToDoForm
