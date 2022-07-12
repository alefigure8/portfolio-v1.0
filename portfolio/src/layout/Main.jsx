import {Outlet} from 'react-router-dom'
import Header from '../component/Header'
import Footer from '../component/Footer'

const Main = () => {
  return (
    <>
      <Header/>
      <main className='container mx-auto p-8 md:p-5 md:flex md:justify-center'>
        <div className="main-w">
          <Outlet/>
        </div>
      </main>
      <Footer/>
    </>
  )
}

export default Main