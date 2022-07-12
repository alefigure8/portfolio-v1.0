import { createContext, useState, useEffect } from "react"
import axios from "axios"

const ProjectContext = createContext()

const ProjectProvider = ({children}) => {
  const[projects, setProjects] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const URL = import.meta.env.VITE_URL_BLOG
      const TOKEN = import.meta.env.VITE_TOKEN
      const {data} = await axios(URL,  {
        "Content-Type": "application/json",
        headers: {
          "x-access-token": TOKEN
        },
      })
      setProjects(data.data);

    }

    fetchData()

  }, [])

  return (
    <ProjectContext.Provider value={
      {
        projects
      }
    }>
      {children}
    </ProjectContext.Provider>
  )
}

export {
  ProjectContext,
}

export default ProjectProvider