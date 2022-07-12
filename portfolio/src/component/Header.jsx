import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <nav className='px-2 lg:w-2/5 text-white py-3 fixed left-0 right-0 m-auto bg-zinc-800 bg-opacity-70 backdrop-blur-md z-10'>
      <div className='flex whitespace-nowrap'>
        <div className='flex sm:w-3/5 md:w-4/5 justify-between'>
          <ul className='flex md:justify-center items-center w-3/5'>
            <li><Link to='/' className='title-page mr-5'>Alejandro Gomez Nieto</Link></li>
            <li><Link to='works' className='hidden md:flex mr-5 hover:underline underline-offset-4'>Work</Link></li>
            <li><Link to='posts' className='hidden md:flex mr-5 hover:underline underline-offset-4'>Posts</Link></li>
            <li><Link to='#' className='hidden md:flex mr-5 hover:underline underline-offset-4'>Source</Link></li>
          </ul>
        </div>
        <div className='ml-auto flex-2'>
          <div className='bg-orange-300 px-3 py-2 text-black rounded-md hover:bg-orange-400 cursor-pointer transition-all'>
           <i className="fa-regular fa-sun"></i>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header