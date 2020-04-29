import React from "react"

import PopulatedToDoList from "./PopulatedToDoList"
import UnpopulatedToDoList from "./UnpopulatedToDoList"

const ToDoListContent = ({ toDos, removeToDo }) => {
  return toDos.length > 0 ?
      <PopulatedToDoList toDos={toDos} removeToDo={removeToDo} /> :
      <UnpopulatedToDoList />
}

export default ToDoListContent