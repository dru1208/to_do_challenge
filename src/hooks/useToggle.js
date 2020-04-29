import { useState } from "react"

const useToggle = () => {
  const [activeForm, setActiveForm] = useState(false)

  const toggleForm = () => {
    setActiveForm(prev => !prev)
  }

  return {
    activeForm,
    toggleForm
  }
}

export default useToggle