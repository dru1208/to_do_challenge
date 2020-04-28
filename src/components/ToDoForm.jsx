import React, { useState } from "react"
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

const defaultFormFields = {
  title: "",
  description: "",
  status: "",
  deadline: ""
}

const ToDoForm = ({ addToDo }) => {
  const [formFields, setFormFields] = useState(defaultFormFields)

  const onSubmit = (e) => {
    e.preventDefault()
    addToDo(formFields)
    clearFormFields()
  }

  const clearFormFields = () => {
    setFormFields(defaultFormFields)
  }

  const updateFormField = (fieldName, value) => {
    setFormFields(prev => {
      return { ...prev, [fieldName]: value }
    })
  }

  return (
    <form className="form-container" onSubmit={onSubmit}>
      {
        formProps.map((fieldProps, index) => {
          const { label, fieldName } = fieldProps
          return (
            <ToDoFormGroup
              key={index}
              label={label}
              fieldName={fieldName}
              value={formFields[fieldName]}
              updateFormField={updateFormField}
            />)
        })
      }
      <input type="submit" value="Add"/>
    </form>
  )
}

export default ToDoForm
