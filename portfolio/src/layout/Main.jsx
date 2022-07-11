import {Outlet} from 'react-router-dom'
import Header from '../component/Header'

const Main = () => {
  return (
    <>
    <Header/>
      <main className='container mx-auto p-5 md:flex md:justify-center'>
        <div className="md:w-2/3 lg:w-2/6">
          <Outlet/>
        </div>
      </main>
    </>
  )
}

export default Main