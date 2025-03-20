import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Experience from './components/Experince'
import Skills from "./components/Skills"
import Project from "./components/Porjects"
import Contact from './components/Contact'
import Aos from "aos";
import "aos/dist/aos.css"
import './App.css'

const App =()=> {
  
useEffect(()=>{
  Aos.init();
})
  return (
    <>
      <Navbar/>
      <div className="container">
      <Home/>
      <Experience/>
      <Skills/>
      <Project/>
      <Contact/>
      </div>
      
    </>
  )
}

export default App
