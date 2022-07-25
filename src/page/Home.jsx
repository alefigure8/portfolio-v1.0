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
      <div className={`bg-opacity-50 backdrop-blur-md py-3 rounded-lg text-center mb-6 transition-all-1 ${mode ? 'bg-zinc-700' : 'bg-white'}`}>
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
          Soy un desarrolador backend viviendo en Argentina, apasionado por desarrollar aplicaciones que me exijan continuar aprendiendo. Trabajo con Nodejs, Express, MySQL, MongoDB y Firebase, utilizando en muchos de los proyectos Jaison Web Token, passport, Auth0, como también GraphQL. En el frontend trabajo con React, NextJS, Styled Components, Material UI, Chakra, Bootstrap, Tailwind, etc. <br /> Actualmente estoy realizando la carrera de Técnico Universitario en Programación en la Universidad Tecnológica Nacional. <br /> Publico contentido sobre lo que voy aprendiendo en mi <Link to='posts' className='link'>Blog</Link>
        </p>
        <Link to='works'><ButtonPrimary>My Portfolio</ButtonPrimary></Link>
      </div>
      <div className=' transition-all-3'>
        <h4 className={mode ? 'sub-title' : 'sub-title-light'}>Bio</h4>
        <div className='flex'>
          <p className={`font-bold ${mode ? 'text-white' : 'text-zinc-800'}`}>1984</p>
          <p className={`text-justify parraph-bio ${mode ? 'text-white' : 'text-zinc-800'}`}>Nací­ en Buenos Aires, Argentina.</p>
        </div>
        <div className='flex'>
          <p className={`font-bold ${mode ? 'text-white' : 'text-zinc-800'}`}>2001</p>
          <p className={`text-justify parraph-bio ${mode ? 'text-white' : 'text-zinc-800'}`}>Comencé a desarrollar sitios webs, realizando la primera versión del portal de noticias Obrapública.com</p>
        </div>
        <div className='flex'>
          <p className={`font-bold ${mode ? 'text-white' : 'text-zinc-800'}`}>2008</p>
          <p className={`text-justify parraph-bio ${mode ? 'text-white' : 'text-zinc-800'}`}>Me recibí de la carrera de Producción Audiovisual en el Centro de Investigación Cinematográfico.</p>
        </div>
        <div className='flex'>
          <p className={`font-bold ${mode ? 'text-white' : 'text-zinc-800'}`}>2011</p>
          <p className={`text-justify parraph-bio ${mode ? 'text-white' : 'text-zinc-800'}`}>Trabajé desarrollando páginas web junto al Legislador Rafael Gentili.</p>
        </div>
        <div className='flex'>
          <p className={`font-bold ${mode ? 'text-white' : 'text-zinc-800'}`}>2014</p>
          <p className={`text-justify parraph-bio ${mode ? 'text-white' : 'text-zinc-800'}`}>Tuve un negocio propio por casi 8 años.</p>
        </div>
        <div className='flex'>
          <p className={`font-bold ${mode ? 'text-white' : 'text-zinc-800'}`}>2019</p>
          <p className={`text-justify parraph-bio ${mode ? 'text-white' : 'text-zinc-800'}`}>Retomé la programación, realizando cursos en Udemy y Freecode Camp.</p>
        </div>
        <div className='flex'>
          <p className={`font-bold ${mode ? 'text-white' : 'text-zinc-800'}`}>2022</p>
          <p className={`text-justify parraph-bio ${mode ? 'text-white' : 'text-zinc-800'}`}>Hoy me encuentro cursando el primer año de la carrera de Técnico Universitario en Programación en la Universidad Tecnológica Nacional (UTN), con un promedio de 9.6</p>
        </div>
      </div>
      <div className='mb-6 transition-all-4'>
        <h4 className={mode ? 'sub-title' : 'sub-title-light'}>I <i className="fa-solid fa-heart text-base underline-gray"></i></h4>
        <p className={`text-justify parraph ${mode ? 'text-white' : 'text-zinc-800'}`}>
         Escuchar Ramones, Elliott Smith y All Them Witches; leer libros de Foster Wallace, Salinger y Philip K. Dick; el cine de Paul Thomas Anderson y Stanley Kubrick; sacar <a href="https://www.flickr.com/photos/stupiditytries/" target="_blank"><span className ='link'>fotografías</span></a> en recitales y aprender todo lo que me llame un poco la atención.</p>
      </div>
      <div className='mb-6 transition-all-5'>
        <h4 className={mode ? 'sub-title' : 'sub-title-light'}>On the web</h4>
        <div className='flex flex-col items-start'>
          <a href="http://github.com/alefigure8" target="_blank"><button className={`social-link py-3 px-4 rounded-lg font-semibold parraph-social ${mode ? 'text-teal-200  underline-link ' : 'text-teal-700 underline-link-light underline-link-light'}`}><i className="fa-brands fa-github mr-2"></i>@alefigure8</button></a>
          <a href="https://twitter.com/alegomeznieto" target="_blank"><button className={`social-link py-3 px-4 rounded-lg font-semibold parraph-social ${mode ? 'text-teal-200  underline-link ' : 'text-teal-700 underline-link-light'}`}><i className="fa-brands fa-twitter mr-2"></i>@alegomeznieto</button></a>
          <a href="https://www.instagram.com/alegomeznieto/" target="_blank"><button className={`social-link py-3 px-4 rounded-lg font-semibold parraph-social ${mode ? 'text-teal-200  underline-link ' : 'text-teal-700 underline-link-light'}`}><i className="fa-brands fa-instagram mr-2"></i>@alegomeznieto</button></a>
          <a href="https://medium.com/@alegomeznieto" target="_blank"><button className={`social-link py-3 px-4 rounded-lg font-semibold parraph-social ${mode ? 'text-teal-200  underline-link ' : 'text-teal-700 underline-link-light'}`}><i className="fa-brands fa-medium mr-2"></i>@alegomeznieto</button></a>
          <a href="mailto:gomeznieto@pm.me"><button className={`social-link py-3 px-4 rounded-lg font-semibold parraph-social ${mode ? 'text-teal-200  underline-link ' : 'text-teal-700 underline-link-light'}`}><i className="fa-solid fa-envelope-open mr-2"></i>gomeznieto@pm.me</button></a>
        </div>
      </div>
      <div className='transition-all-6'>
        <h4 className={mode ? 'sub-title' : 'sub-title-light'}>Latest post</h4>
        <div className='flex justify-center flex-col md:flex-row mt-6 mb-10'>
          {loading ? <Spinner /> : (projects.length > 0 ? projects.map(project => {
            return (
              <Link to={`post/${project.id}`} key={project.id}><div className='flex flex-col items-center mr-6 mb-10 md:mb-4'>
                <img className='w-56 h-32 rounded-lg' src={project.img} alt="project" />
                <p className={`parraph font-semibold title-page mt-6 ${mode ? 'text-white' : 'text-zinc-800'}`}>{project.title}</p>
                <p className={`text-base text-center parraph ${mode ? 'text-white' : 'text-zinc-800'}`}>{project.description}</p>
              </div></Link>
            )
          }).slice(0, POSTS) : <p className={`text-center parraph ${mode ? 'text-zinc-400' : 'text-zinc-800'}`}>No hay proyectos para mostrar</p>)
          }
        </div>
        <Link to='posts'><ButtonPrimary>Older posts</ButtonPrimary></Link>
      </div>
    </>
  )
}

export default Home