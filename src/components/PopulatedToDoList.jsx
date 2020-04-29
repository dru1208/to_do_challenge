import React from "react"
import ToDo from "./ToDo"

const PopulatedToDoList = ({ toDos, removeToDo }) => {
  return (
    <>
      {
        toDos.map((toDo, index) => {
          return <ToDo toDo={toDo} key={index} removeToDo={removeToDo} />
        })
      }
    </>
  )
}

export default PopulatedToDoList