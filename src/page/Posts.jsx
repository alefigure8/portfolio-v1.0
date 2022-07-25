import {Link} from 'react-router-dom';
import {useState, useEffect} from 'react';
import Spinner from '../component/Spinner';
import useProjects from '../hooks/useProjects'
import useMode from '../hooks/useMode'
import ButtonPages from '../component/ButtonPages';

const Posts = () => {
  const ENTRIES = 6
  const {projects, loading, pages} = useProjects()
  const [entries, setEntries] = useState([0, ENTRIES])
  const {mode} = useMode()

  if(loading){
    return <Spinner />
  }

  return (
    <>
      <div className='mt-6'>
        <h3 className={`title-pages mb-5 ${mode ? 'text-white ' : 'text-zinc-800'}`}>Posts</h3>
        <div className='grid md:grid-cols-2'>
        {projects?.length > 0 ? (projects.map(project => {
              return (
                <Link to={`/post/${project.id}`} key={project.id}>
                  <div className='flex flex-col items-center mr-6 mt-4 md:mt-8 transition-all-1 cursor-pointer'>
                    <img className='w-full md:w-56 Md:h-32 rounded-xl hover:-translate-y-1 transition-all duration-150' src={project.img} alt="project" />
                    <p className={`title-page mt-3 ${mode ? 'text-white' : 'text-zinc-800'}`}>{project.title}</p>
                    <p className={`parraph md:text-lg mt-1 ${mode ? 'text-white' : 'text-zinc-800'}`}>{project.description}</p>
                  </div>
                </Link>
              )
            }).reverse().splice(entries[0], entries[1])) : <p className={`title-page mt-3 ${mode ? 'text-zinc-400' : 'text-zinc-800'}`}>No hay entradas aún cargadas</p>}
        </div>
      </div>
      {pages > 1 && <ButtonPages pages={pages} setEntries={setEntries} entries={entries}/>}
    </>
  )
}

export default Posts