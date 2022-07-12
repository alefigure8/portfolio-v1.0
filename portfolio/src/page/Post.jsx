import { useEffect, useState } from 'react';
import {Link, useParams} from 'react-router-dom';
import getProject from '../config/getProject'

const Post = () => {
  const {id} = useParams();
  const [project, setProject] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const project = await getProject(id);
        setProject(project.data[0]);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
      }
      fetchData();
  }, [])

  if(loading){
    return <div className='mt-40'>Loading...</div>
  }

  const field = project.field;
  return (
    <div className='mt-40 transition-all-1'>
      <h3 className='title-page text-white mb-5'><Link to='/posts'><span className='title-post'>Posts</span></Link><span className='text-sm mr-2 ml-2 font-light'>{`>`}</span>{project.title}</h3>
      <div
        className='text-white'
        dangerouslySetInnerHTML={{ __html: field }}
      >
      </div>



    </div>
  )
}

export default Post