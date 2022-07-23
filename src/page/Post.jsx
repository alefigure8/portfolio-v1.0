import { useEffect, useState } from 'react';
import {Link, useParams} from 'react-router-dom';
import getBlogs from '../config/getBlogs'
import Spinner from '../component/Spinner';
import useMode from '../hooks/useMode'
import Prism from 'prismjs';
import '../prism.css';

const Post = () => {
  const {id} = useParams();
  const [project, setProject] = useState({});
  const [loading, setLoading] = useState(true);
  const [date, setDate] = useState('');
  const {mode} = useMode()

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

  if(loading){
    return <Spinner />
  }

  const $code = !loading && document.querySelector('.language-javascript')?.firstChild
  if($code){
    Prism.highlightAll();
  }

  const field = project.field;
  return (
    <div className='mt-6 transition-all-1'>
      <h3 className={`title-page  mb-5 ${mode ? 'text-white' : 'text-zinc-800'}`}><Link to='/posts'><span className='title-post'>Posts</span></Link><span className='text-sm mr-2 ml-2 font-light'>{`>`}</span>{project.title}<span className={`ml-5 text-xs font-semibold px-1 bg-gray-600 text-white`}>{date.slice(0, 10)}</span></h3>
      <div
        className={mode ? 'text-white' : 'text-zinc-800'}
        dangerouslySetInnerHTML={{ __html: field }}
      >
      </div>
    </div>
  )
}

export default Post