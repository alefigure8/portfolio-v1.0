import { useEffect, useState } from 'react';
import {Link, useParams} from 'react-router-dom';
import Spinner from '../component/Spinner';
import useMode from '../hooks/useMode'
import Prism from 'prismjs';
import '../prism.css';
import useProjects from '../hooks/useProjects';
import { setTitle } from '../config/setTitle';

const Post = () => {
  const {id} = useParams();
  const [loading, setLoading] = useState(true);
  const {mode} = useMode()
  const{project, setId} = useProjects();
  
  useEffect( () => {
    setId(id);
    
    if(project){
      setTitle(project?.title);
      setLoading(false);
    }
    
  }, [id, project])

  if(loading){
    return <Spinner />
  }

  const $code = !loading && document.querySelector('.language-javascript')?.firstChild
  if($code){
    Prism.highlightAll();
  }

  const field = project?.description;
  return (
    <div className='mt-6 transition-all-1'>
      <h3 className={`title-page  mb-5 ${mode ? 'text-white' : 'text-zinc-800'}`}><Link to='/works'><span className='title-post'>Works</span></Link><span className='text-sm mr-2 ml-2 font-light'>{`>`}</span>{project?.title}</h3>
      <div
        className={mode ? 'text-white' : 'text-zinc-800'}
        dangerouslySetInnerHTML={{ __html: field }}
      >
      </div>
      <br />
      <a href={project?.link} target='_blank'><i className="fa-brands fa-github mr-2 color-link" alt="Icono de Github"></i><span className='link'>Repositorio en Github</span></a>
    </div>
  )
}

export default Post