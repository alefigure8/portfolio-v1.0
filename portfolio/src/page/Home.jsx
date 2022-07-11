import React from 'react'
import {Link} from 'react-router-dom'
import ButtonPrimary from '../component/Button'
import profile from '../img/perfil.jpg'

const Home = () => {
  return (
    <>
      <div className='bg-zinc-700 block py-3 rounded-lg text-center mb-6'>
        <p className='text-white'>Hola, gracias por visitar mi portfolio!</p>
      </div>
      <div className='flex mb-6'>
        <div>
          <h3 className='title'>Alejandro Gomez Nieto</h3>
          <p className='text-white text-base -mt-1'>Junior Backend Developer</p>
        </div>
        <div className='ml-10'>
          <img className='rounded-full w-24 h-24 border-2' src={profile} alt="perfil" />
        </div>
      </div>
      <div className='mb-6'>
        <h4 className='sub-title'>Work</h4>
        <p className='text-white text-justify'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet atque laudantium nulla. Corporis ex, eligendi, eaque consequatur non doloremque exercitationem quo nesciunt dolorum quaerat incidunt accusamus saepe pariatur aliquid asperiores vitae illo labore natus minus alias in eum assumenda? Alias.
        </p>
        <Link to='works'><ButtonPrimary>My Profile</ButtonPrimary></Link>
      </div>
      <div className='mb-6'>
        <h4 className='sub-title'>Bio</h4>
        <div className='flex'>
          <p className='text-white font-bold'>1984</p>
          <p className='text-white ml-5'>Nací en Buenos Aires, Argentina.</p>
        </div>
        <div className='flex mb-6'>
          <p className='text-white font-bold'>2011</p>
          <p className='text-white ml-5'>Trabajo desarrollando pagina s web junto al Legislador Rafael Gentili</p>
        </div>
        <div className='flex mb-6'>
          <p className='text-white font-bold'>2014</p>
          <p className='text-white ml-5'>Tengo un negocio propio por cerca de 8 años</p>
        </div>
        <div className='flex mb-6'>
          <p className='text-white font-bold'>2019</p>
          <p className='text-white ml-5'>Realizo cursos en Udemy y Freecode Camp</p>
        </div>
        <div className='flex mb-6'>
          <p className='text-white font-bold'>2022</p>
          <p className='text-white ml-5'>Me encuentro cursando el primer año de la carrera de Técnico Universitario en Programación en la Universidad Tecnológica Nacional (UTN) con un promedio de 9.5</p>
        </div>
      </div>
      <div className='mb-6'>
        <h4 className='sub-title'>I <i className="fa-solid fa-heart text-base underline-gray"></i></h4>
        <p className='text-white text-justify'>
         Lorem ipsum, dolor sit amet consectetur <span className ='link'>photography</span> elit. Fuga, aliquam!
        </p>
      </div>
      <div className='mb-6'>
        <h4 className='sub-title'>On the web</h4>
        <div className='flex flex-col items-start'>
        <a href="http://github.com/alefigure8" target="_blank"><button className='social-link underline-link text-teal-200 py-3 px-4 rounded-lg font-semibold'><i className="fa-brands fa-github mr-2"></i>@alefigure8</button></a>
          <a href="http://github.com/alefigure8" target="_blank"><button className='social-link underline-link text-teal-200 py-3 px-4 rounded-lg font-semibold'><i className="fa-brands fa-twitter mr-2"></i>@ale_figure8</button></a>
          <button className='social-link underline-link text-teal-200 py-3 px-4 rounded-lg font-semibold'><i className="fa-brands fa-instagram mr-2"></i>@ale_figure8</button>
          <button className='social-link underline-link text-teal-200 py-3 px-4 rounded-lg font-semibold'><i className="fa-brands fa-medium mr-2"></i>@ale_figure8</button>
          <button className='social-link underline-link text-teal-200 py-3 px-4 rounded-lg font-semibold'><i className="fa-solid fa-envelope-open mr-2"></i>gomeznieto@proton.com</button>
        </div>
      </div>
      <div className='mb-6'>
        <h4 className='sub-title'>Latest post</h4>
      </div>
    </>
  )
}

export default Home