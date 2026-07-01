import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { projects } from "../../data/projects";
import "./ProjectPage.css";

function ProjectCarousel({ project }) {
  const [activeImage, setActiveImage] = useState(0);
  const projectImages = project.images || [project.image];

  useEffect(() => {
    if (projectImages.length <= 1) return;

    const interval = setInterval(() => {
      setActiveImage((current) => (current + 1) % projectImages.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [projectImages.length]);

  const goToPreviousImage = () => {
    setActiveImage((current) =>
      current === 0 ? projectImages.length - 1 : current - 1
    );
  };

  const goToNextImage = () => {
    setActiveImage((current) => (current + 1) % projectImages.length);
  };

  return (
    <div className="project-carousel">
      <div className="carousel-frame">
        {projectImages.map((img, index) => (
          <img
            key={`${project.id}-${index}`}
            src={img}
            alt={`${project.title} screenshot ${index + 1}`}
            className={index === activeImage ? "active" : ""}
          />
        ))}
      </div>

      {projectImages.length > 1 && (
        <div className="carousel-controls">
          <button
            className="carousel-arrow"
            onClick={goToPreviousImage}
            type="button"
            aria-label="Previous screenshot"
          >
            ←
          </button>

          <p className="carousel-count">
            {activeImage + 1} / {projectImages.length}
          </p>

          <button
            className="carousel-arrow"
            onClick={goToNextImage}
            type="button"
            aria-label="Next screenshot"
          >
            →
          </button>
        </div>
      )}
    </div>
  );
}

export default function ProjectPage() {
  const { projectId } = useParams();

  useEffect(() => {
    requestAnimationFrame(() => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;

      const projectScroll = document.querySelector(".project-scroll");
      if (projectScroll) {
        projectScroll.scrollTop = 0;
      }
    });
  }, [projectId]);

  const currentIndex = projects.findIndex((project) => project.id === projectId);
  const project = projects[currentIndex];

  if (!project) {
    return (
      <main className="project-page">
        <section className="project-missing">
          <h1>Project not found</h1>
          <Link to="/#projects" className="back-link">
            ← home
          </Link>
        </section>
      </main>
    );
  }

  const prevProject =
    projects[(currentIndex - 1 + projects.length) % projects.length];

  const nextProject = projects[(currentIndex + 1) % projects.length];

  const conceptParagraphs = project.concept.split("\n\n");

  return (
    <main className="project-page">
      <section className="project-layout">
        <div className="project-top">
          <Link to="/#projects" className="back-link">
            ← home
          </Link>
        </div>

        <aside className="project-images">
          <ProjectCarousel key={project.id} project={project} />
        </aside>

        <article className="project-content" data-lenis-prevent>
          <div className="project-scroll">
            <h1>{project.title}</h1>

            {project.role && (
              <p>
                <span>[role]</span> {project.role}
              </p>
            )}

            <p>
              <span>[type]</span> {project.type}
            </p>

            {project.links?.length > 0 && (
              <div className="project-links">
                <span>[links]</span>

                <div className="project-link-list">
                  {project.links.map((link) => (
                    <a
                      key={link.url}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            )}

            <div className="project-concept">
              <p>
                <span>[concept]</span> {conceptParagraphs[0]}
              </p>

              {conceptParagraphs.slice(1).map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <p>
              <span>[tech]</span> {project.tech}
            </p>
          </div>

          <nav className="project-nav">
            <Link to={`/projects/${prevProject.id}`}>← prev</Link>
            <Link to={`/projects/${nextProject.id}`}>next →</Link>
          </nav>
        </article>
      </section>
    </main>
  );
}