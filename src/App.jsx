import './App.css'
import AboutMe from './components/AboutMe'
import Navbar from './components/Navbar'
import Experience from './components/Experience'
import divider from './assets/divider.png'

function App() {

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


    </>
  )
}

export default App
