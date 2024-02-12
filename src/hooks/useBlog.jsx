import { BlogContext } from '../content/BlogProvider'
import { useContext } from 'react'

/**
 * Custom hook that returns the current value of the BlogContext.
 * @returns {Object} The current value of the BlogContext.
 */
const useBlog = () => {
    return useContext(BlogContext)
}

export default useBlog