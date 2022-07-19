import {Link} from 'react-router-dom'
import ButtonPrimary from '../component/Button'
import profile from '../img/profile_4.png'
import useProjects from '../hooks/useProjects'
import Spinner from '../component/Spinner';
import useMode from '../hooks/useMode'

const Home = () => {
  const {projects, loading} = useProjects()
  const POSTS = 2;
  const {mode} = useMode()


  return (
    <>
      <div className={` bg-opacity-50 backdrop-blur-md py-3 rounded-lg text-center mb-6 transition-all-1 ${mode ? 'bg-zinc-700' : 'bg-white'}`}>
        <p className={`transition-all ${mode ? 'text-white' : 'text-zinc-800'}`}>Hola, gracias por visitar mi portfolio!</p>
      </div>
      <div className='md:flex  transition-all-1'>
        <div>
          <h3 className={mode ? 'title' : 'title-light'}>Alejandro Gomez Nieto</h3>
          <p className={`parraph -mt-1 ${mode ? 'text-white' : 'text-zinc-800'}`}>Junior Backend Developer</p>
        </div>
        <div className='flex justify-center min-w-fit md:ml-10 mt-4 md:mt-0'>
          <img className='rounded-full w-28 h-28 md:w-24 md:h-24 border-2 saturate-150' src={profile} alt="perfil" />
        </div>
      </div>
      <div className=' transition-all-2'>
        <h4 className={mode ? 'sub-title' : 'sub-title-light'}>Work</h4>
        <p className={`text-justify parraph ${mode ? 'text-white' : 'text-zinc-800'}`}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet atque laudantium nulla. Corporis ex, eligendi, eaque consequatur non doloremque exercitationem quo nesciunt dolorum quaerat incidunt accusamus saepe pariatur aliquid asperiores vitae illo labore natus minus alias in eum assumenda? Alias.
        </p>
        <Link to='works'><ButtonPrimary>My Portfolio</ButtonPrimary></Link>
      </div>
      <div className=' transition-all-3'>
        <h4 className={mode ? 'sub-title' : 'sub-title-light'}>Bio</h4>
        <div className='flex'>
          <p className={`font-bold ${mode ? 'text-white' : 'text-zinc-800'}`}>1984</p>
          <p className={`text-justify parraph ml-4 ${mode ? 'text-white' : 'text-zinc-800'}`}>Nací en Buenos Aires, Argentina.</p>
        </div>
        <div className='flex'>
          <p className={`font-bold ${mode ? 'text-white' : 'text-zinc-800'}`}>2011</p>
          <p className={`text-justify parraph ml-4 ${mode ? 'text-white' : 'text-zinc-800'}`}>Trabajo desarrollando pagina s web junto al Legislador Rafael Gentili</p>
        </div>
        <div className='flex'>
          <p className={`font-bold ${mode ? 'text-white' : 'text-zinc-800'}`}>2014</p>
          <p className={`text-justify parraph ml-4 ${mode ? 'text-white' : 'text-zinc-800'}`}>Tengo un negocio propio por cerca de 8 años</p>
        </div>
        <div className='flex'>
          <p className={`font-bold ${mode ? 'text-white' : 'text-zinc-800'}`}>2019</p>
          <p className={`text-justify parraph ml-4 ${mode ? 'text-white' : 'text-zinc-800'}`}>Realizo cursos en Udemy y Freecode Camp</p>
        </div>
        <div className='flex'>
          <p className={`font-bold ${mode ? 'text-white' : 'text-zinc-800'}`}>2022</p>
          <p className={`text-justify parraph ml-4 ${mode ? 'text-white' : 'text-zinc-800'}`}>Me encuentro cursando el primer año de la carrera de Técnico Universitario en Programación en la Universidad Tecnológica Nacional (UTN) con un promedio de 9.5</p>
        </div>
      </div>
      <div className='mb-6 transition-all-4'>
        <h4 className={mode ? 'sub-title' : 'sub-title-light'}>I <i className="fa-solid fa-heart text-base underline-gray"></i></h4>
        <p className={`text-justify parraph ${mode ? 'text-white' : 'text-zinc-800'}`}>
         Lorem ipsum, dolor sit amet consectetur <span className ='link'>photography</span> elit. Fuga, aliquam!
        </p>
      </div>
      <div className='mb-6 transition-all-5'>
        <h4 className={mode ? 'sub-title' : 'sub-title-light'}>On the web</h4>
        <div className='flex flex-col items-start'>
        <a href="http://github.com/alefigure8" target="_blank"><button className={`social-link py-3 px-4 rounded-lg font-semibold parraph ${mode ? 'text-teal-200  underline-link ' : 'text-teal-700 underline-link-light underline-link-light'}`}><i className="fa-brands fa-github mr-2"></i>@alefigure8</button></a>
          <a href="http://github.com/alefigure8" target="_blank"><button className={`social-link py-3 px-4 rounded-lg font-semibold parraph ${mode ? 'text-teal-200  underline-link ' : 'text-teal-700 underline-link-light'}`}><i className="fa-brands fa-twitter mr-2"></i>@ale_figure8</button></a>
          <button className={`social-link py-3 px-4 rounded-lg font-semibold parraph ${mode ? 'text-teal-200  underline-link ' : 'text-teal-700 underline-link-light'}`}><i className="fa-brands fa-instagram mr-2"></i>@ale_figure8</button>
          <button className={`social-link py-3 px-4 rounded-lg font-semibold parraph ${mode ? 'text-teal-200  underline-link ' : 'text-teal-700 underline-link-light'}`}><i className="fa-brands fa-medium mr-2"></i>@ale_figure8</button>
          <button className={`social-link py-3 px-4 rounded-lg font-semibold parraph ${mode ? 'text-teal-200  underline-link ' : 'text-teal-700 underline-link-light'}`}><i className="fa-solid fa-envelope-open mr-2"></i>gomeznieto@proton.com</button>
        </div>
      </div>
      <div className='transition-all-6'>
        <h4 className={mode ? 'sub-title' : 'sub-title-light'}>Latest post</h4>
        <div className='flex justify-center mt-6 mb-10'>
          {loading ? <Spinner /> : projects.map(project => {
            return (
              <Link to={`post/${project.id}`} key={project.id}><div className='flex flex-col items-center mr-6'>
                <img className='w-56 h-32 rounded-lg' src={`${import.meta.env.VITE_URL}${project.img}`}alt="project" />
                <p className={`parraph font-semibold title-page mt-6 ${mode ? 'text-white' : 'text-zinc-800'}`}>{project.title}</p>
                <p className={`text-base text-center parraph ${mode ? 'text-white' : 'text-zinc-800'}`}>{project.description}</p>
              </div></Link>
            )
          }).slice(0, POSTS)}
        </div>
        <Link to='posts'><ButtonPrimary>Older posts</ButtonPrimary></Link>
      </div>
    </>
  )
}

export default Home