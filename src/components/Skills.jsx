import { useEffect, useRef } from "react";
import letterAssets from '../letterAssets'
import './Skills.css'
import indexCard from "../assets/index_card.png";
import languagesSticker from "../assets/languages_sticker.png";
import frontendSticker from "../assets/frontend_sticker.png";
import backendSticker from "../assets/backend_sticker.png";
import aiSticker from "../assets/ai_sticker.png";


const letters = [
  { key: 'yellowWhiteS', alt: 'S', className: 'letter-s1 flutter-a' },
  { key: 'yellowWhiteK', alt: 'K', className: 'letter-k flutter-b' },
  { key: 'yellowWhiteI', alt: 'I', className: 'letter-i flutter-c' },
  { key: 'yellowWhiteL', alt: 'L', className: 'letter-l1 flutter-a' },
  { key: 'yellowWhiteL', alt: 'L', className: 'letter-l2 flutter-b' },
  { key: 'yellowWhiteS', alt: 'S', className: 'letter-s2 flutter-c' },
];

const skillGroups = [
  {
    id: 1,
    title: "Languages",
    icon: languagesSticker,
    skills: [
      { name: "Python", level: "Advanced", value: 90 },
      { name: "Java", level: "Intermediate", value: 70 },
      { name: "TypeScript", level: "Intermediate", value: 70 },
    ],
    extras: ["C", "C++", "JavaScript", "HTML/CSS", "R", "SQL"],
  },
  {
  id: 2,
  title: "Frontend",
  icon: frontendSticker,
  skills: [
    { name: "User-Centered Design", level: "Advanced", value: 90 },
    { name: "React Applications", level: "Advanced", value: 90 },
    { name: "Component Architecture", level: "Intermediate", value: 70 },
  ],
  extras: ["Wireframing", "Prototyping", "Responsive UI Systems"],
},
  {
    id: 3,
    title: "Backend / Systems",
    icon: backendSticker,
    skills: [
      { name: "API Development", level: "Advanced", value: 90 },
      { name: "System Design", level: "Intermediate", value: 70 },
      { name: "Database Integration", level: "Intermediate", value: 70 },
    ],
    extras: ["REST APIs", "Node.js", "NestJS", "Supabase", "Prisma", "Auth0", "Render"],
  },
  {
    id: 4,
    title: "AI",
    icon: aiSticker,
    skills: [
  { name: "LLM Integration", level: "Advanced", value: 90 },
  { name: "Prompt Engineering", level: "Advanced", value: 90 },
  { name: "AI Interaction Design", level: "Intermediate", value: 70 },
],
    extras: ["Function Calling", "MCP", "RAG", "Agentic AI"],
  },
];

function SkillsBanner() {
  return (
    <div className="skills-banner-wrapper">
      {letters.map((letter, index) => (
        <img
          key={`${letter.key}-${index}`}
          src={letterAssets[letter.key]}
          alt={letter.alt}
          className={`skills-letter ${letter.className}`}
        />
      ))}
    </div>
  );
}

export default function Skills() {
  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.25,
      }
    );

    const currentCards = cardRefs.current;
    currentCards.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      currentCards.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  return (
    <section id="skills" className="skills-section">
      <SkillsBanner />

      <div className="skills-grid">
        {skillGroups.map((group, groupIndex) => (
          <article
            key={group.id}
            ref={(el) => (cardRefs.current[groupIndex] = el)}
            className="skill-card"
            style={{ "--card-image": `url(${indexCard})` }}
          >
            <div className="skill-card-inner">
              <header className="skill-card-header">
                <div className="skill-icon-wrap">
                  <img src={group.icon} alt="" className="skill-icon" />
                </div>
                <h3>{group.title}</h3>
              </header>

              <div className="skill-list">
                {group.skills.map((skill, index) => (
                  <div
                    key={skill.name}
                    className="skill-row"
                    style={{ "--bar-delay": `${0.15 + index * 0.12}s` }}
                  >
                    <div className="skill-row-top">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-level">{skill.level}</span>
                    </div>

                    <div className="skill-bar" aria-hidden="true">
                      <div
                        className="skill-bar-fill"
                        style={{ "--target-width": `${skill.value}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <p className="skill-extras">{group.extras.join(", ")}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}