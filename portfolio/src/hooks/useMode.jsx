import { ModeContext } from '../content/ModeProvider'
import { useContext } from 'react'

const useProjects = () => {
    return useContext(ModeContext)
}

export default useProjects