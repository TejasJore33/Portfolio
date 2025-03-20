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
import Education from './components/Education'

const App =()=> {
  
useEffect(()=>{
  Aos.init();
})
  return (
    <>
      <Navbar/>
      <div className="container">
      <Home/>
      <Project/>
      <Skills/>
      <Experience/>
      <Education/>
      <Contact/>
      </div>
      
    </>
  )
}

export default App
