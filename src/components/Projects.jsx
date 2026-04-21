import letterAssets from '../letterAssets'
import './Projects.css'

const letters = [
  { key: 'greenWhiteP', alt: 'P', className: 'letter-p flutter-a' },
  { key: 'greenWhiteR', alt: 'R', className: 'letter-r flutter-b' },
  { key: 'greenWhiteO', alt: 'O', className: 'letter-o flutter-c' },
  { key: 'greenWhiteJ', alt: 'J', className: 'letter-j flutter-a' },
  { key: 'greenWhiteE', alt: 'E', className: 'letter-e flutter-b' },
  { key: 'greenWhiteC', alt: 'C', className: 'letter-c flutter-c' },
  { key: 'greenWhiteT', alt: 'T', className: 'letter-t flutter-a' },
  { key: 'greenWhiteS', alt: 'S', className: 'letter-s flutter-b' },
]

function ProjectsBanner() {
  return (
    <div className="projects-banner-wrapper">
      {letters.map((letter, index) => (
        <img
          key={`${letter.key}-${index}`}
          src={letterAssets[letter.key]}
          alt={letter.alt}
          className={`projects-letter ${letter.className}`}
        />
      ))}
    </div>
  )
}

export default function Projects() {
  return (
    <section
      className="projects-section"
      id="projects"
    >
      <ProjectsBanner />

    </section>
  )
}