import React from 'react'

const Header = () => {
  return (
    <nav className='w-2/5 text-white py-5 fixed left-0 right-0 m-auto bg-zinc-800 bg-opacity-70 backdrop-blur-md'>
      <div className='flex'>
        <ul className='flex w-2/5 justify-between'>
          <li><a href='#'>Home</a></li>
          <li><a href='#'>Work</a></li>
          <li><a href='#'>Posts</a></li>
          <li><a href='#'>Source</a></li>
        </ul>
        <div className='ml-auto'>
          <i className="fa-solid fa-envelope-open mr-2"></i>
        </div>
      </div>
    </nav>
  )
}

export default Header