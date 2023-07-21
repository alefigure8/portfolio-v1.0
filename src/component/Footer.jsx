import React from 'react'

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <footer>
    <div className='container mx-auto p-8 md:p-5 md:flex md:justify-center'>
      <p className='text-zinc-500 text-sm'>{year} Alejandro Gomez Nieto.</p>
    </div>
    </footer>
  )
}

export default Footer