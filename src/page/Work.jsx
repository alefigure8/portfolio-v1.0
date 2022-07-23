import { useEffect, useState } from 'react';
import {Link, useParams} from 'react-router-dom';
import {getProyectById} from '../config/getProject';
import Spinner from '../component/Spinner';
import useMode from '../hooks/useMode'
import Prism from 'prismjs';
import '../prism.css';

const Post = () => {
  const {id} = useParams();
  const [project, setProject] = useState({});
  const [loading, setLoading] = useState(true);
  const {mode} = useMode()

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

  if(loading){
    return <Spinner />
  }

  const $code = !loading && document.querySelector('.language-javascript')?.firstChild
  if($code){
    Prism.highlightAll();
  }

  const field = project.description;
  return (
    <div className='mt-6 transition-all-1'>
      <h3 className={`title-page  mb-5 ${mode ? 'text-white' : 'text-zinc-800'}`}><Link to='/works'><span className='title-post'>Works</span></Link><span className='text-sm mr-2 ml-2 font-light'>{`>`}</span>{project.title}</h3>
      <div
        className={mode ? 'text-white' : 'text-zinc-800'}
        dangerouslySetInnerHTML={{ __html: field }}
      >
      </div>
      <br />
      <a href={project.link} className='link' target='_blank'>Github</a>
    </div>
  )
}

export default Post