import {useState} from 'react'
import useMode from '../hooks/useMode'

const ButtonPages = ({pages, setEntries, entries}) => {
  const {mode} = useMode()
  const [actualPage, setActualPage] = useState(1)
  const ENTRIES = 6;

  const handleNext = () => {
    setActualPage(actualPage + 1)
    setEntries([entries[0] + ENTRIES, entries[1] + ENTRIES])
  }

  const handlePrev =  () => {
    setActualPage(actualPage - 1)
    setEntries([entries[0] - ENTRIES, entries[1] - ENTRIES])
  }

  return (
    <div className='flex justify-center mt-6'>
      <div className='flex justify-center w-2/5 gap-4'>
      {actualPage != 1 && <button className={`rounded-lg py-2 px-4 font-medium hover:bg-teal-500 cursor-pointer transition-all ${mode ? 'text-zinc-800 bg-teal-300 ' : 'text-white bg-teal-700 '}`} onClick = {handlePrev}>Anterior</button>}
      {actualPage != pages && <button className = {`rounded-lg py-2 px-4 font-medium hover:bg-teal-500 cursor-pointer transition-all ${mode ? 'text-zinc-800 bg-teal-300 ' : 'text-white bg-teal-700 '}`} onClick = {handleNext}>Siguientes</button>}
      </div>
    </div> 
  )
}

export default ButtonPages