import {Outlet} from 'react-router-dom'
import Header from '../component/Header'
import Footer from '../component/Footer'
import Banner from '../component/banner'

const Main = () => {
  return (
    <>
      <Header/>
      <main className='container mx-auto p-8 md:p-5 md:flex md:justify-center'>
        <div className="main-w">
          <Banner/>
          <Outlet/>
        </div>
      </main>
      <Footer/>
    </>
  )
}

export default Main