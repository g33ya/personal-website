import { useEffect, useRef, useState } from 'react'
import './Navbar.css'

const navItems = [
  { id: 'about', label: 'about me' },
  { id: 'experience', label: 'experience' },
  { id: 'projects', label: 'projects' },
  { id: 'skills', label: 'skills' },
  { id: 'contact', label: 'contact!' },
]

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('about')
  const navRef = useRef(null)

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visibleSections.length > 0) {
          setActiveSection(visibleSections[0].target.id)
        }
      },
      {
        root: null,
        rootMargin: '-20% 0px -55% 0px',
        threshold: [0.2, 0.4, 0.6],
      }
    )

    sections.forEach((section) => observer.observe(section))

    return () => {
      sections.forEach((section) => observer.unobserve(section))
    }
  }, [])

  useEffect(() => {
    const activeLink = navRef.current?.querySelector('.navbar-link.active')
    if (activeLink) {
      activeLink.scrollIntoView({
        behavior: 'smooth',
        inline: 'center',
        block: 'nearest',
      })
    }
  }, [activeSection])

  return (
    <div className="navbar-shell">
      <nav className="navbar" ref={navRef}>
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`navbar-link ${activeSection === item.id ? 'active' : ''}`}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </div>
  )
}