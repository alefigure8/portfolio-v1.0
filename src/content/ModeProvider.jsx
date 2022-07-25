import { createContext, useState, useEffect } from "react"

const ModeContext = createContext()


const ModeProvider = ({children}) => {
  const localMode =  JSON.parse(localStorage.getItem("mode")) || true
  const [mode, setMode] = useState(localMode)

  useEffect( () => {
    const getMode = () => {
      const localMode = JSON.parse(localStorage.getItem("mode"))
      if (localMode == null) {
        localStorage.setItem("mode", JSON.stringify(true))
        setMode(true)
      }
      return setMode(localMode)
    }
    getMode()
    }
  , [])

  return (
    <ModeContext.Provider
      value={{
        mode,
        setMode
      }}
    >{children}</ModeContext.Provider>
  )
}

export {ModeContext}

export default ModeProvider