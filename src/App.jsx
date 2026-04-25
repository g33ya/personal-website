import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AboutMe from './components/AboutMe'
import Navbar from './components/Navbar'
import Experience from './components/Experience'
import Skills from './components/Skills'
import divider from './assets/divider.png'
import Projects from './components/Projects'
import Contact from './components/Contact'
import ComingSoon from './components/ComingSoon'

function MainPage() {
  return (
    <>
      <Navbar />

      <section id="about">
        <AboutMe />
      </section>

      <img src={divider} alt="" className="divider" />

      <section id="experience">
        <Experience />
      </section>

      <img src={divider} alt="" className="divider" />

      <section id="projects">
        <Projects />
      </section>

      <img src={divider} alt="" className="divider" />

      <section id="skills">
        <Skills />
      </section>

      <img src={divider} alt="" className="divider" />

      <section id="contact">
        <Contact />
      </section>
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />

        <Route path="/projects/:projectId" element={<ComingSoon />} />
      </Routes>
    </BrowserRouter>
  )
}