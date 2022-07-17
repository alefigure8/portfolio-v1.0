import { useEffect, useState } from 'react';
import {Link, useParams} from 'react-router-dom';
import {getProyectById} from '../config/getProject';
import '../prism.js'

const Post = () => {
  const {id} = useParams();
  const [project, setProject] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const project = await getProyectById(id);
        setProject(project);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
      }
      fetchData();
  }, [])

  console.log(project);

  if(loading){
    return <div>Loading...</div>
  }

  const field = project.description;
  return (
    <div className='mt-6 transition-all-1'>
      <h3 className='title-page text-white mb-5'><Link to='/works'><span className='title-post'>Works</span></Link><span className='text-sm mr-2 ml-2 font-light'>{`>`}</span>{project.title}</h3>
      <div
        className='text-white'
        dangerouslySetInnerHTML={{ __html: field }}
      >
      </div>
      <a href={project.link} className='link'>Github</a>
    </div>
  )
}

export default Post