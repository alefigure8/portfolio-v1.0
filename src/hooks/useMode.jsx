import { ModeContext } from '../content/ModeProvider'
import { useContext } from 'react'

const useMode = () => {
    return useContext(ModeContext)
}

export default useMode