import React from 'react'
import useMode from '../hooks/useMode'

const Button = ({children}) => {
  const {mode} = useMode()
  return (
    <div className='flex justify-center mt-5'>
      <div className={`rounded-lg py-2 px-4 font-medium hover:bg-teal-500 cursor-pointer transition-all ${mode ? 'text-zinc-800 bg-teal-300 ' : 'text-white bg-teal-700 '}`}>{children}<i className="fa-solid fa-chevron-right ml-5 text-xs"></i></div>
    </div>
  )
}

export default Button