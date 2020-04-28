import React from "react"

const ToDoFormGroup = ({ label, fieldName, value, updateFormField }) => {
  const onChange = (e) => {
    updateFormField(fieldName, e.target.value)
  }

  return (
    <div className="form-group">
      <label
        htmlFor={fieldName}
        className="form-label"
      >
        {label}
      </label>
      <input
        type="text"
        name={fieldName}
        value={value}
        onChange={onChange}
      />
    </div>
  )
}

export default ToDoFormGroup