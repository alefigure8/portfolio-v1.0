import React from 'react'

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <footer>
    <div className='container mx-auto p-8 md:p-5 md:flex md:justify-center'>
      <p className='text-zinc-500'> <span className='font-sans'>©</span> {year} Alejandro Gomez Nieto, All Right Reserved.</p>
    </div>
    </footer>
  )
}

export default Footer