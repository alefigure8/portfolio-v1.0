import {Link} from 'react-router-dom';
import {useState} from 'react';
import useProjects from '../hooks/useProjects'

const Posts = () => {
  const {projects, loading} = useProjects();

  if(loading){
    return <div>Loading...</div>
  }

  return (
    <div className='mt-6'>
      <h3 className='title-pages text-white mb-5'>Posts</h3>
      <div className='grid grid-cols-2'>
      {projects.map(project => {
            return (
              <Link to={`/post/${project.id}`} key={project.id}>
                <div className='flex flex-col items-center mr-6 mt-8 transition-all-1 cursor-pointer'>
                  <img className='w-56 h-32 rounded-xl' src={`${import.meta.env.VITE_URL}${project.img}`}alt="project" />
                  <p className='text-white text-lg mt-3'>{project.title}</p>
                </div>
              </Link>
            )
          })}
      </div>
    </div>
  )
}

export default Posts