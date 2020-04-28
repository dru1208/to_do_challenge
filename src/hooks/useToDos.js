import { useState } from "react"
import stringHash from "string-hash"

const defaultData = [
  {
    id: "1",
    title: "Item 1",
    description: "This is what I should be doing for item 1",
    status: "Completed",
    deadline: "Tomorrow"
  },
  {
    id: "2",
    title: "Item 2",
    description: "This is what I should be doing for item 2",
    status: "In Progress",
    deadline: "Next Week"
  },
  {
    id: "3",
    title: "Item 3",
    description: "This is what I should be doing for item 3",
    status: "Inactive",
    deadline: "TBD"
  }
]


const useToDos = () => {
  const [toDos, setToDos] = useState(defaultData)

  const addToDo = (toDoFields) => {
    const id = stringHash(toDoFields.title)
    const toDo = { ...toDoFields, id }
    setToDos(prev => [...prev, toDo])
  }

  const removeToDo = (toDo) => {
    const { id } = toDo
    setToDos(prev => prev.filter((item) => item.id !== id))
  }


  const [activeForm, setActiveForm] = useState(false)

  const toggleForm = () => {
    setActiveForm(prev => !prev)
  }

  return {
    toDos,
    addToDo,
    removeToDo,
    activeForm,
    toggleForm
  }
}

export default useToDos