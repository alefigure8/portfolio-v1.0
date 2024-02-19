import React from 'react'
import useMode from '../hooks/useMode'

const ButtonSocial = ({children, icon}) => {
  const {mode} = useMode()
  return (
    <div className='flex justify-center'>
      <div className={`rounded-lg py-2 px-4 font-medium  cursor-pointer transition-all flex justify-center items-center ${mode ? 'text-zinc-800 bg-button-color-dark' : 'text-white bg-button-color'}`}><i className={`${icon} mr-2 text-sm`}></i>{children}</div>
    </div>
  )
}

export default ButtonSocial