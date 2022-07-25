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
      setPages(Math.round(((data.length / ENTRIES) * 10) / 10))
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
    <div className='mt-6'>
      <h3 className={`title-pages mb-5 ${mode ? 'text-white ' : 'text-zinc-800'}`}>Works</h3>
      <div className='grid md:grid-cols-2'>
      {
        projects?.length > 0 ? (projects.map(project => {
          return (
            <Link to={`/work/${project.id}`} key={project.id}>
              <div className='flex flex-col items-center mr-6 mt-4 mb-6 md:mt-8 transition-all-1 cursor-pointer'>
                <img className='w-full md:w-56 Md:h-32 img-cover rounded-xl hover:-translate-y-1 transition-all duration-150' src={project.img} alt="project" />
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