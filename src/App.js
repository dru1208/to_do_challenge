import React, { useState } from 'react';
import ToDoList from "./components/ToDoList"

// Statuses: In Progress, Completed, Inactive

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

function App() {
  const [toDos, setToDos] = useState(defaultData)

  return (
    <div className="App">
      <ToDoList
        toDos={toDos}
        setToDos={setToDos}
        listName="Things To Do"
      />
    </div>
  );
}

export default App;
