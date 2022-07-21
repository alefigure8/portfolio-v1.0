import { ProjectContext } from '../content/ProjectProvider'
import { useContext } from 'react'

const useProjects = () => {
    return useContext(ProjectContext)
}

export default useProjects