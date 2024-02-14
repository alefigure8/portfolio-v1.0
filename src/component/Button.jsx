import React from 'react'
import useMode from '../hooks/useMode'

const Button = ({children}) => {
  const {mode} = useMode()
  return (
    <div className='flex justify-center mt-6'>
      <div className={`rounded-lg py-2 px-4 font-medium text-gray-700 cursor-pointer transition-all flex justify-center items-center ${mode ? 'text-zinc-800 bg-button-color-dark' : 'text-white bg-button-color'}`}>{children}<i className="fa-solid fa-chevron-right ml-5 btn-size-icons"></i></div>
    </div>
  )
}

export default Button