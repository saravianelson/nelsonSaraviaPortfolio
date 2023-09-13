import { useState } from 'react'
import './App.css'

import { Route, Routes } from 'react-router-dom'
import { Home } from './Pages/Home/home'
import { AboutMe } from './Pages/About/about'
import { Contact } from './Pages/Contact/contact'
import { Footer } from './Pages/Footer/footer'
import { Portfolio } from './Pages/Portfolio/portfolio'
import { Skills } from './Pages/Skills/skills'



function App() {
  
  return (
    <Routes>

      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<AboutMe/>}></Route>
      <Route path='/' element={<Contact/>}></Route>
      <Route path='/' element={<Footer/>}></Route>
      <Route path='/' element={<Portfolio/>}></Route>
      <Route path='/' element={<Skills/>}></Route>

    </Routes>
  )
}

export default App
