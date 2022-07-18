import { createContext, useState, useEffect } from "react"

const ModeContext = createContext()

const localMode = () => {
  const mode =  localStorage.getItem("mode")
  return mode
}

const ModeProvider = ({children}) => {
  const [mode, setMode] = useState(localMode() || true)

  useEffect( () => {
    const getMode = async () => {
      const localMode = await localStorage.getItem("mode")
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