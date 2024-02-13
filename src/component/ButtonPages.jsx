import useBlog from '../hooks/useBlog';
import useMode from '../hooks/useMode'
import useProjects from '../hooks/useProjects'

const ButtonPages = ({content}) => {
  const {mode} = useMode()

  const pages = content === 'post' ? useBlog().pages : useProjects().pages;
  const ENTRIES = content === 'post' ? useBlog().ENTRIES : useProjects().ENTRIES;
  const actualPage = content === 'post' ? useBlog().actualPage : useProjects().actualPage;
  const setActualPage = content === 'post' ? useBlog().setActualPage : useProjects().setActualPage;
  const setEntries = content === 'post' ? useBlog().setEntries : useProjects().setEntries;
  const entries = content === 'post' ? useBlog().entries : useProjects().entries;

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

export default ButtonPages;