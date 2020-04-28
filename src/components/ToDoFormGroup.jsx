import React from "react"

const ToDoFormGroup = ({ label, fieldName}) => {
  return (
    <div className="form-group">
      <label
        for={fieldName}
        className="form-label"
      >
        {label}
      </label>
      <input type="text" name={fieldName} />
    </div>
  )
}

export default ToDoFormGroup