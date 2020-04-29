import { useReducer } from "react"
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

const defaultList = {
  id: "1234",
  data: defaultData
}

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_LIST":
      return [...state, {id: "12345", data: []}]
    // case "REMOVE_LIST":
    case "ADD_TO_DO":
      const list = state.find(({ id }) => id === action.listId)
      if (list) {
        const toDoId = stringHash(action.toDoFields.title)
        const toDo = { ...action.toDoFields, id: toDoId }
        list.data.push(toDo)
      }
      return [...state]
    case "REMOVE_TO_DO":
      const list2 = state.find(({ id }) =>
        id === action.listId)
      if (list2) {
        const filtered = list2.data.filter((toDo) => toDo.id !== action.toDoId )
        list2.data = filtered
      }
      return [...state]
    default:
      throw new Error()
  }
}

const useToDoLists = () => {
  const initialState = [defaultList]
  const [lists, dispatch] = useReducer(reducer, initialState)
  return {
    lists,
    dispatch
  }
}

export default useToDoLists