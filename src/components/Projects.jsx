import letterAssets from '../letterAssets'
import './Projects.css'
import { useState } from "react";
/*import { Link } from "react-router-dom";*/
import "./Projects.css";

import soundMate from "../assets/project_stamps/soundmate_stamp.png";
import taskNest from "../assets/project_stamps/task_nest_stamp.png";
import careerCatalyst from "../assets/project_stamps/career_catalyst_stamp.png";
import bubbleUp from "../assets/project_stamps/bubble_up_stamp.png";
import callCompanion from "../assets/project_stamps/call_companion_stamp.png";
import perceptionExperiment from "../assets/project_stamps/perception_experiment_stamp.png";

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

const projects = [
  {
    id: 1,
    image: soundMate,
    title: "Rhino Alert Plugin",
    description:
      "A Mission Planner plugin for logging and reviewing rhino sightings through a custom interface.",
    tilt: "tilt-left-1",
    path: "/projects/rhino-alert",
  },
  {
    id: 2,
    image: taskNest,
    title: "Boba Shop Game",
    description:
      "A narrative game about imposter syndrome that encourages self-compassion and reflection.",
    tilt: "tilt-right-1",
    path: "/projects/boba-shop-game",
  },
  {
    id: 3,
    image: careerCatalyst,
    title: "Career Catalyst",
    description:
      "A PyQt interface designed to display live flight data from embedded flight software systems.",
    tilt: "tilt-left-2",
    path: "/projects/satellite-gui",
  },
  {
    id: 4,
    image: bubbleUp,
    title: "Bubble Up",
    description:
      "Creative event organization work spanning logistics, branding, spaces, and participant experience.",
    tilt: "tilt-right-2",
    path: "/projects/henhacks",
  },
  {
    id: 5,
    image: callCompanion,
    title: "Call Companion",
    description:
      "A Discord bot that shares office hours in a calendar-style format with reminders and filters.",
    tilt: "tilt-left-3",
    path: "/projects/office-hours-bot",
  },
  {
    id: 6,
    image: perceptionExperiment,
    title: "Perception Experiment",
    description:
      "A scrapbook-inspired personal portfolio with custom sections.",
    tilt: "tilt-right-3",
    path: "/projects/portfolio",
  },
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
  )
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
        {projects.map((project) => {
          const isFlipped = flippedId === project.id;

          return (
            <button
              key={project.id}
              type="button"
              className={`project-card ${project.tilt} ${
                isFlipped ? "is-flipped" : ""
              }`}
              onClick={() => handleFlip(project.id)}
              aria-pressed={isFlipped}
              aria-label={`${project.title} preview card`}
            >
              <div className="project-card-inner">
                <div className="project-card-face project-card-front">
                  <img src={project.image} alt={project.title} />
                  <span className="project-front-note">tap for preview</span>
                </div>

                <div className="project-card-face project-card-back">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>

                  <a
  href={project.path}
  className="project-link"
  onClick={(e) => e.stopPropagation()}
>
  view project →
</a>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}