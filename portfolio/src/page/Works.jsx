import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import {getProyect} from '../config/getProject';

const Posts = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect (() => {
    const fetchData = async () => {
      const data = await getProyect();
      setProjects(data);
      setLoading(false);
    }
    fetchData();
  } , [])

  if(loading){
    return <div>Loading...</div>
  }

  return (
    <div className='mt-6'>
      <h3 className='title-pages text-white mb-5'>Works</h3>
      <div className='grid md:grid-cols-2'>
      {projects.map(project => {
            return (
              <Link to={`/work/${project.id}`} key={project.id}>
                <div className='flex flex-col items-center mr-6 mt-4 md:mt-8 transition-all-1 cursor-pointer'>
                  <img className='w-full md:w-56 Md:h-32 rounded-xl hover:-translate-y-1 transition-all duration-150' src={`${import.meta.env.VITE_URL}${project.img}`}alt="project" />
                  <p className='text-white title-page mt-3'>{project.title}</p>
                  <p className='text-white parraph md:text-lg mt-1'>{project.description}</p>
                </div>
              </Link>
            )
          })}
      </div>
    </div>
  )
}

export default Posts