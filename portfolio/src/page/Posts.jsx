import {Link} from 'react-router-dom';
import {useState} from 'react';
import useProjects from '../hooks/useProjects'

const Posts = () => {
  const {projects, loading} = useProjects();

  if(loading){
    return <div className='mt-40'>Loading...</div>
  }
  return (
    <div className='mt-20'>
      <h3 className='title-pages text-white mb-5'>Posts</h3>
      <div className='grid grid-cols-2'>
      {projects.map(project => {
            return (
              <Link to={`/post/${project.id}`}><div className='flex flex-col items-center mr-6 transition-all-1 cursor-pointer' key={project.id}>
                <img className='w-56 h-32 rounded-xl' src={`${import.meta.env.VITE_URL}${project.img}`}alt="project" />
                <p className='text-white text-lg mt-6'>{project.title}</p>
              </div></Link>
            )
          })}
      </div>
    </div>
  )
}

export default Posts