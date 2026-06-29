import letterAssets from "../utils/letterAssets";
import "./Projects.css";
import { useEffect, useMemo, useState } from "react";
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

function getCircularOffset(index, activeIndex, total) {
  let offset = index - activeIndex;

  if (offset > total / 2) offset -= total;
  if (offset < -total / 2) offset += total;

  return offset;
}

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeProject = projects[activeIndex];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % projects.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  const visibleProjects = useMemo(() => {
    return projects.map((project, index) => ({
      ...project,
      offset: getCircularOffset(index, activeIndex, projects.length),
      originalIndex: index,
    }));
  }, [activeIndex]);

  return (
    <section id="projects" className="projects-section">
      <div className="airmail-left" />
      <div className="airmail-right" />
      <div className="airmail-stamp">AIR MAIL</div>

      <div className="projects-title-wrap">
        <ProjectsBanner />
      </div>

      <div className="projects-carousel" aria-label="Featured projects carousel">
        {visibleProjects.map((project) => {
          const isActive = project.offset === 0;

          return (
            <button
              key={project.id}
              type="button"
              className={`project-stamp ${isActive ? "is-active" : "is-side"}`}
              style={{
                "--offset": project.offset,
                "--abs-offset": Math.abs(project.offset),
              }}
              onClick={() => setActiveIndex(project.originalIndex)}
              aria-label={`View ${project.title}`}
              aria-pressed={isActive}
            >
              <img src={project.stamp} alt={project.title} />
            </button>
          );
        })}
      </div>

      <div className="featured-project-card">
        <p className="featured-label">currently featured</p>
        <h3>{activeProject.title}</h3>
        <p>{activeProject.description}</p>

        <Link to={`/projects/${activeProject.id}`} className="project-link">
          view project →
        </Link>
      </div>
    </section>
  );
}