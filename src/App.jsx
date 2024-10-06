import { useState } from 'react'

import image from './assets/image.png'
import Navbar from './components/Navbar/navbar'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Open from './pages/Open'
import Products from './pages/Products'
import Resources from './pages/Resources'
import Developers from './pages/Developers'

{/* <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet"> */}


function App() {

   
  return (
    <Router>
   

      <Navbar/>
  

    <div className='lg:pr-[8rem] lg:pl-[8rem]  pt-11 font-inter flex flex-col justify-center items-center'>
    {/* <p>hello</p>
    <img src={image} alt="" /> */}
      <Routes>
        <Route  path='/' element={<Home/>} />
        <Route  path='/Open' element={<Open/>} />
        <Route  path='/Products' element={<Products/>} />
        <Route  path='/Resources' element={<Resources/>} />
        <Route  path='Developers' element={<Developers/>} />
      </Routes>
      </div>
    </Router>
  )
}

export default App
