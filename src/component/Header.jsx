import {useState, useEffect} from 'react'
import {Link, useLocation} from 'react-router-dom'
import useMode from '../hooks/useMode'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const {pathname} = useLocation()
  const {mode, setMode} = useMode()

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  const handleMode = async () => {
    await localStorage.setItem("mode", JSON.stringify(!mode))
    setMode(!mode)
  }

  return (
    <div className={`z-40 flex flex-col fixed w-full ${mode ? 'text-white' : 'text-zinc-800' }`}>
      <nav className= {`py-2 px-3 ${mode ? 'mainNavDark' : 'mainNavlight'}`}>
        <div className='flex whitespace-nowrap md:w-3/5 lg:w-2/5 left-0 right-0 m-auto '>
          <div className='flex justify-between'>
            <ul className='flex lg:justify-center items-center'>
              <li><Link to='/' className='title-page mr-5'>Alejandro Gomez Nieto</Link></li>
              <li><Link to='works' className={`hidden md:flex mr-5 link-page hover:underline underline-offset-4 ${pathname === '/works' && 'background-nav transition-all duration-500'}`}>Works</Link></li>
              <li><Link to='posts' className={`hidden md:flex mr-5 link-page hover:underline underline-offset-4 ${pathname === '/posts' && 'background-nav transition-all duration-500'}`}>Posts</Link></li>
              <li><a href='https://github.com/alefigure8/portfolio-v1.0/tree/master/portfolio' target="_blank" className='hidden link-page md:flex mr-5'><i className="fa-brands fa-github mr-2 flex items-center"></i><span className='hover:underline underline-offset-4'>Source</span></a></li>
            </ul>
          </div>
          <div className='ml-auto flex'>
            <div onClick={handleMode} className={`bg-orange-300 bg-opacity-90 px-3 py-2 text-black rounded-md hover:bg-orange-400 cursor-pointer transition-all ${mode ? 'transition-mode' : 'hidden'}`}>
             <i className="fa-solid fa-sun"></i>
            </div>
            <div onClick={handleMode} className={`bg-purple-600 bg-opacity-90 px-3 py-2 text-white rounded-md hover:bg-purple-700 cursor-pointer opacity-100 ${mode ? 'hidden' : ' transition-mode'}`}>
              <i className="fa-solid fa-moon"></i>
            </div>
            <div onClick={handleToggle} className='md:hidden ml-2 px-3 py-2 bg-neutral-900 border border-neutral-400 rounded-md text-neutral-400 cursor-pointer hover:bg-neutral-700 transition-all'>
              <i className="fa-solid fa-bars"></i>
            </div>
          </div>
        </div>
      </nav>
      <div className='flex justify-end'>
        <div className={`${isOpen ? 'menu-h' : 'menu-h-hidden'} ${mode ? 'menu-h-dark' : 'menu-h-light'}`}>
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