import React from 'react'
import banner from '../img/banner.jpeg'

const Banner = () => {
  return (
    <div className='mt-14 mb-6'>
      <img className='rounded-xl shadow-xl shadow-zinc-900' src={banner} alt="banner" />
    </div>
  )
}

export default Banner