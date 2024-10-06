import React from 'react'
import Navbar from '../components/Navbar/navbar'
import WorkshopFeature from '../components/WorkshopFeature/workshopFeature'
import PyHack from '../components/PyHack/PyHack'
import FAQs from '../components/FAQs/FAQs'
import Footer from '../components/footer/footer'
import About from '../components/About/about'

const Home = () => {
  return (
    <div>
     {/* <d iv className='flex flex-col justify-center items-center'>  */}
      <About/>
     <div className='flex flex-col lg:pr-[4.5rem] lg:pl-[3rem]'> 
     <WorkshopFeature/>
     <PyHack/>
     <FAQs/>
     </div>
     <Footer/>
     
    </div>
  )
}

export default Home
