import Navbar from "./components/navbar"
import Home from "./components/Home"
import Projects from "./components/Projects"
import Skills from "./components/skills"
import './App.css'
import Experince from "./components/experience"
import Education from "./components/Education"
import Footer from "./components/Footer"

function App() {

  return (
    <>
    <Navbar/>
    <div className="container">
    <Home/>
    <Projects/>
    <Skills/>
    <Experince/>
    <Education/>
   
    </div>
    <Footer/>
    </>
  )
}

export default App
