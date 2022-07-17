import {Link} from 'react-router-dom';
import useProjects from '../hooks/useProjects'

const Posts = () => {
  const {projects, loading} = useProjects();

  if(loading){
    return <div>Loading...</div>
  }

  return (
    <div className='mt-6'>
      <h3 className='title-pages text-white mb-5'>Posts</h3>
      <div className='grid md:grid-cols-2'>
      {projects.map(project => {
            return (
              <Link to={`/post/${project.id}`} key={project.id}>
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