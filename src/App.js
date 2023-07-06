

import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Navbar from './components/Navbar'

const App = () => {
  return (
  <>
  <BrowserRouter>
   
   <Navbar/>
  <Routes>
    <Route path='/' element= {<Home/>}/>
    <Route path='/about' element= {<About/>}/>
  </Routes>
  
  
  </BrowserRouter>

  
  </>
  )
}

export default App

