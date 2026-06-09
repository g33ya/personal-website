import letterAssets from "../utils/letterAssets";
import "./Projects.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { projects } from "../data/projects";

const letters = [
  { key: "greenWhiteP", alt: "P", className: "letter-p flutter-a" },
  { key: "greenWhiteR", alt: "R", className: "letter-r flutter-b" },
  { key: "greenWhiteO", alt: "O", className: "letter-o flutter-c" },
  { key: "greenWhiteJ", alt: "J", className: "letter-j flutter-a" },
  { key: "greenWhiteE", alt: "E", className: "letter-e flutter-b" },
  { key: "greenWhiteC", alt: "C", className: "letter-c flutter-c" },
  { key: "greenWhiteT", alt: "T", className: "letter-t flutter-a" },
  { key: "greenWhiteS", alt: "S", className: "letter-s flutter-b" },
];

const tilts = [
  "tilt-left-1",
  "tilt-right-1",
  "tilt-left-2",
  "tilt-right-2",
  "tilt-left-3",
  "tilt-right-3",
];

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
  );
}

export default function Projects() {
  const [flippedId, setFlippedId] = useState(null);

  const handleFlip = (id) => {
    setFlippedId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="projects" className="projects-section">
      <div className="projects-title-wrap">
        <ProjectsBanner />
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => {
          const isFlipped = flippedId === project.id;

          return (
            <button
              key={project.id}
              type="button"
              className={`project-card ${tilts[index % tilts.length]} ${
                isFlipped ? "is-flipped" : ""
              }`}
              onClick={() => handleFlip(project.id)}
              aria-pressed={isFlipped}
              aria-label={`${project.title} preview card`}
            >
              <div className="project-card-inner">
                <div className="project-card-face project-card-front">
                  <img src={project.stamp} alt={project.title} />
                  <span className="project-front-note">tap for preview</span>
                </div>

                <div className="project-card-face project-card-back">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>

                  <Link
                    to={`/projects/${project.id}`}
                    className="project-link"
                    onClick={(e) => e.stopPropagation()}
                  >
                    view project →
                  </Link>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}