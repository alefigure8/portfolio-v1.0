import React from 'react'

const Button = ({children}) => {
  return (
    <div className='flex justify-center mt-5'>
      <div className='rounded-lg text-black bg-teal-300 py-2 px-4 font-semibold hover:bg-teal-500 cursor-pointer transition-all'>{children}<i className="fa-solid fa-chevron-right ml-5 text-xs"></i></div>
    </div>
  )
}

export default Button