import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import {getProyect} from '../config/getProject';
import Spinner from '../component/Spinner';
import useMode from '../hooks/useMode'
import ButtonPages from '../component/ButtonPages';

const Posts = () => {
  const ENTRIES = 6
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [entries, setEntries] = useState([0, ENTRIES]);
  const [pages, setPages] = useState(0)
  const {mode} = useMode()

  useEffect (() => {
    const fetchData = async () => {
      const data = await getProyect();
      setProjects(data);
      setPages(Math.ceil(data.length / ENTRIES))
      setEntries([0, ENTRIES])
      setLoading(false);
    }
    fetchData();
  } , [])

  if(loading){
    return <Spinner />

  }

  return (
    <>
    <div>
      <h3 className={`title-pages ml-2 ${mode ? 'text-white' : 'text-zinc-800'}`}>Works</h3>
      <div className='grid md:grid-cols-2 md:gap-6'>
      {
        projects?.length > 0 ? (projects.map(project => {
          return (
            <Link to={`/work/${project.id}`} key={project.id}>
              <div className='flex flex-col items-center mt-2 mb-6 md:mt-2 transition-all-1 cursor-pointer'>
                <img className='md:w-56 md:h-36 rounded-xl' src={project.img} alt="project" />
                <p className={`title-page mt-3 ${mode ? 'text-white' : 'text-zinc-800'}`}>{project.title}</p>
              </div>
            </Link>
          )
        }).reverse().splice(entries[0], entries[1])) : <p className={`title-page mt-3 ${mode ? 'text-zinc-400' : 'text-zinc-800'}`}>No hay proyectos aún cargados</p>
      }
      </div>
    </div>
    {pages > 1 && <ButtonPages pages={pages} setEntries={setEntries} entries={entries}/>}
    </>
  )
}

export default Posts