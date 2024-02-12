import { ProfileContext } from '../content/profileProvider'
import { useContext } from 'react'

const useProfile = () => {
    return useContext(ProfileContext)
}

export default useProfile