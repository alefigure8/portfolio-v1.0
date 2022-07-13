import {useState} from 'react'
import {Link, useLocation} from 'react-router-dom'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const {pathname} = useLocation()

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className='flex flex-col fixed lg:w-2/5 text-white left-0 right-0 m-auto z-10'>
      <nav className= 'bg-zinc-800 bg-opacity-50 backdrop-blur-md py-3 px-3'>
        <div className='flex whitespace-nowrap'>
          <div className='flex sm:w-3/5 md:w-full justify-between'>
            <ul className='flex md:justify-center items-center w-3/5'>
              <li><Link to='/' className='title-page mr-5'>Alejandro Gomez Nieto</Link></li>
              <li><Link to='works' className={`hidden md:flex mr-5 hover:underline underline-offset-4 ${pathname === '/works' && 'background-nav transition-all duration-500'}`}>Works</Link></li>
              <li><Link to='posts' className={`hidden md:flex mr-5 hover:underline underline-offset-4 ${pathname === '/posts' && 'background-nav transition-all duration-500'}`}>Posts</Link></li>
              <li><a href='https://github.com/alefigure8/portfolio-v1.0/tree/master/portfolio' target="_blank" className='hidden md:flex mr-5'><i className="fa-brands fa-github mr-2 flex items-center"></i><span className='hover:underline underline-offset-4'>Source</span></a></li>
            </ul>
          </div>
          <div className='ml-auto flex-2 flex'>
            <div className='bg-orange-300 px-3 py-2 text-black rounded-md hover:bg-orange-400 cursor-pointer transition-all'>
            <i className="fa-regular fa-sun"></i>
            </div>
            <div onClick={handleToggle} className='md:hidden ml-2 px-3 py-2 bg-neutral-900 border border-neutral-400 rounded-md text-neutral-400 cursor-pointer hover:bg-neutral-700 transition-all'>
              <i class="fa-solid fa-bars"></i>
            </div>
          </div>
        </div>
      </nav>
      <div className='flex justify-end'>
        <div className={`${isOpen ? 'menu-h' : 'menu-h-hidden'}`}>
          <ul className='flex flex-col gap-3'>
            <li><Link to='/' className='hover:underline underline-offset-4' onClick={handleToggle}>About</Link></li>
            <li><Link to='works' className='hover:underline underline-offset-4' onClick={handleToggle}>Works</Link></li>
            <li><Link to='posts' className='hover:underline underline-offset-4'onClick={handleToggle}>Posts</Link></li>
            <li><a href='https://github.com/alefigure8/portfolio-v1.0/tree/master/portfolio' target="_blank" className=''><span className='hover:underline underline-offset-4' onClick={handleToggle}>Source</span></a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header