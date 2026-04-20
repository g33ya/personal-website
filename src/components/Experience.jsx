import { useState } from 'react'
import letterAssets from '../letterAssets'
import receiptPaper from '../assets/receipt_paper.png'
import './Experience.css'

const letters = [
  { key: 'blueWhiteE', alt: 'E', className: 'letter-e1 flutter-a' },
  { key: 'blueWhiteX', alt: 'X', className: 'letter-x flutter-b' },
  { key: 'blueWhiteP', alt: 'P', className: 'letter-p flutter-c' },
  { key: 'blueWhiteE', alt: 'E', className: 'letter-e2 flutter-a' },
  { key: 'blueWhiteR', alt: 'R', className: 'letter-r flutter-b' },
  { key: 'blueWhiteI', alt: 'I', className: 'letter-i flutter-c' },
  { key: 'blueWhiteE', alt: 'E', className: 'letter-e3 flutter-a' },
  { key: 'blueWhiteN', alt: 'N', className: 'letter-n flutter-b' },
  { key: 'blueWhiteC', alt: 'C', className: 'letter-c flutter-c' },
  { key: 'blueWhiteE', alt: 'E', className: 'letter-e4 flutter-a' },
]

const experiences = [
  {
    id: 1,
    company: 'Placeholder',
    location: 'Placeholder',
    position: 'Co-Founder',
    date: 'April 2025 – October 2025',
    bullets: [
      'Helped shape the project vision, branding, and early direction.',
      'Coordinated planning, communication, and team responsibilities.',
      'Supported execution of ideas from concept through development.',
    ],
    outcome: 'Built leadership, collaboration, and early-stage product experience.',
    takeaway: 'Starting a project from scratch is a unique challenge that requires adaptability, clear communication, and a willingness to learn and iterate quickly.',
  },
  {
    id: 2,
    company: 'Placeholder',
    location: 'Placeholder',
    position: 'Head Organizer',
    date: '2023 – Present',
    bullets: [
      'Lead planning and coordination for the hackathon.',
      'Manage logistics, team communication, and event execution.',
      'Support participants, sponsors, and workshop planning.',
    ],
    outcome: 'Strengthened event planning, leadership, and team coordination skills.',
    takeaway: 'Organizing a large event is a rewarding challenge that requires adaptability, clear communication, and a focus on creating a positive experience for everyone involved.',
  },
  {
    id: 3,
    company: 'Placeholder',
    location: 'Placeholder',
    position: 'Assembly Specialist',
    date: 'Feb 2021 – Present',
    bullets: [
      'Assist with assembly and shipping operations.',
      'Maintain organization, quality, and workflow efficiency.',
      'Developed strong attention to detail and teamwork skills.',
    ],
    outcome: 'Built reliability, precision, and strong workplace discipline.',
    takeaway: 'Working in a fast-paced environment has taught me the importance of attention to detail and effective teamwork.',
  },
  {
    id: 4,
    company: 'Placeholder',
    location: 'Placeholder',
    position: 'Assembly Specialist',
    date: 'Feb 2021 – Present',
    bullets: [
      'Assist with assembly and shipping operations.',
      'Maintain organization, quality, and workflow efficiency.',
      'Developed strong attention to detail and teamwork skills.',
    ],
    outcome: 'Built reliability, precision, and strong workplace discipline.',
    takeaway: 'Working in a fast-paced environment has taught me the importance of attention to detail and effective teamwork.',
  },
]

function ExperienceBanner() {
  return (
    <div className="experience-banner-wrapper">
      {letters.map((letter, index) => (
        <img
          key={`${letter.key}-${index}`}
          src={letterAssets[letter.key]}
          alt={letter.alt}
          className={`experience-letter ${letter.className}`}
        />
      ))}
    </div>
  )
}

function ReceiptCard({ company, location, position, date, bullets, outcome, takeaway }) {
  const [open, setOpen] = useState(false)

  return (
    <article className={`receipt-shell ${open ? 'open' : ''}`}>
      <button
        type="button"
        className="receipt-toggle"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <div className="receipt-paper-card">
          <div className="receipt-top">
            <h3>{position}</h3>
            <p>{company}</p>
          </div>

          <div className="receipt-meta">
            <div>
              <span className="receipt-label">Location: </span>
              <span className="receipt-value">{location}</span>
            </div>

            <div>
              <span className="receipt-label">Date: </span>
              <span className="receipt-value">{date}</span>
            </div>
          </div>

          <div className="receipt-expand">
            <div className="receipt-expand-inner">
              <ul className="receipt-bullets">
                {bullets.map((bullet, index) => (
                  <li key={index}>{bullet}</li>
                ))}
              </ul>

              <div className="receipt-divider" />

              <div className="receipt-outcome">
                <span className="receipt-label">Outcome: </span>
                <span className="receipt-outcome-value">{outcome}</span>
              </div>

              <div className="receipt-divider receipt-divider-bottom" />
              
              <div className="receipt-footer-note">
                <p>{takeaway}</p>
              </div>

            </div>
          </div>
        </div>
      </button>
    </article>
  )
}

export default function Experience() {
  return (
    <section
      className="experience-section"
      id="experience"
      style={{ '--receipt-paper': `url(${receiptPaper})` }}
    >
      <ExperienceBanner />

      <div className="receipt-grid">
        {experiences.map((experience) => (
          <ReceiptCard key={experience.id} {...experience} />
        ))}
      </div>
    </section>
  )
}