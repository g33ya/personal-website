import "./App.css";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";

import AboutMe from "./components/AboutMe";
import Navbar from "./components/Navbar";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ProjectPage from "./components/ProjectPage";

function ScrollHandler({ lenisRef }) {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const lenis = lenisRef.current;
    if (!lenis) return;

    window.history.scrollRestoration = "manual";

    requestAnimationFrame(() => {
      if (hash) {
        const element = document.querySelector(hash);

        if (element) {
          lenis.scrollTo(element, {
            duration: 1.2,
          });
        }
      } else {
        lenis.stop();
        lenis.scrollTo(0, {
          immediate: true,
        });
        lenis.start();
      }
    });
  }, [pathname, hash, lenisRef]);

  return null;
}

function MainPage() {
  return (
    <>
      <Navbar />

      <section id="about">
        <AboutMe />
      </section>

      <section id="experience">
        <Experience />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </>
  );
}

export default function App() {
  const lenisRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      smoothTouch: false,
    });

    lenisRef.current = lenis;

    let rafId;

    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  return (
    <BrowserRouter>
      <ScrollHandler lenisRef={lenisRef} />

      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/projects/:projectId" element={<ProjectPage />} />
      </Routes>
    </BrowserRouter>
  );
}