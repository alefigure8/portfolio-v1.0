import { useEffect, useState } from 'react';
import {Link, useParams} from 'react-router-dom';
import getBlogs from '../config/getBlogs'
import '../prism.js'

const Post = () => {
  const {id} = useParams();
  const [project, setProject] = useState({});
  const [loading, setLoading] = useState(true);
  const [date, setDate] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const project = await getBlogs(id);
        setProject(project);
        setLoading(false);
        setDate(project.created_at);
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

  const field = project.field;
  return (
    <div className='mt-6 transition-all-1'>
      <h3 className='title-page text-white mb-5'><Link to='/posts'><span className='title-post'>Posts</span></Link><span className='text-sm mr-2 ml-2 font-light'>{`>`}</span>{project.title}<span className='ml-5 text-xs font-semibold bg-gray-600 px-1'>{date.slice(0, 10)}</span></h3>
      <div
        className='text-white'
        dangerouslySetInnerHTML={{ __html: field }}
      >
      </div>
    </div>
  )
}

export default Post