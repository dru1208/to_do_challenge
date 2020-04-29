import React from "react"

const AddToDoList = ({ dispatch }) => {
  const onClick = () => dispatch({type: "ADD_LIST"})
  return (
    <div>
      <button
        className="add-list-button"
        onClick={onClick}
      >
        Add New List
      </button>
    </div>
  )
}

export default AddToDoList