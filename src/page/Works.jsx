import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import {getProyect} from '../config/getProject';
import Spinner from '../component/Spinner';
import useMode from '../hooks/useMode'

const Posts = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const {mode} = useMode()

  useEffect (() => {
    const fetchData = async () => {
      const data = await getProyect();
      setProjects(data);
      setLoading(false);
    }
    fetchData();
  } , [])

  if(loading){
    return <Spinner />

  }

  return (
    <div className='mt-6'>
      <h3 className={`title-pages mb-5 ${mode ? 'text-white ' : 'text-zinc-800'}`}>Works</h3>
      <div className='grid md:grid-cols-2'>
      {
        projects?.length > 0 ? (projects.map(project => {
          return (
            <Link to={`/work/${project.id}`} key={project.id}>
              <div className='flex flex-col items-center mr-6 mt-4 mb-6 md:mt-8 transition-all-1 cursor-pointer'>
                <img className='w-full md:w-56 Md:h-32 rounded-xl hover:-translate-y-1 transition-all duration-150' src={`${import.meta.env.VITE_URL}${project.img}`}alt="project" />
                <p className={`title-page mt-3 ${mode ? 'text-white' : 'text-zinc-800'}`}>{project.title}</p>
              </div>
            </Link>
          )
        })) : <p className={`title-page mt-3 ${mode ? 'text-zinc-400' : 'text-zinc-800'}`}>No hay proyectos aún cargados</p>
      }
      </div>
    </div>
  )
}

export default Posts