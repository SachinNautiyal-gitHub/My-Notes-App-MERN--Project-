
import "./App.css"

import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Navbar from './components/Navbar'
import EditNote from './components/EditNote'
import AddNote from './components/AddNote'
import Login from "./components/Login"
import SignUp from "./components/SignUp"

const App = () => {
  return (
  <>
  <BrowserRouter>
   
   <Navbar/>
  <Routes>
    <Route path='/' element= {<Login/>}/>
    <Route path='/about' element= {<About/>}/>
    <Route path='/editnote/:id' element= {<EditNote/>}/>
    <Route path='/addnote' element= {<AddNote/>}/>
    <Route path='/home' element= {<Home/>}/>
    <Route path='/signup' element= {<SignUp/>}/>

  </Routes>
  
  
  </BrowserRouter>

  
  </>
  )
}

export default App

