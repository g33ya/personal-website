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
    company: 'Apple',
    location: 'Cupertino, CA',
    position: 'Camera & Photos Tools Experience Intern',
    date: 'May 2025 – August 2025',
    bullets: [
      'Built an AI Insights feature to generate qualitative test performance analysis for a 700+ user platform',
      'Led the full development lifecycle, defining requirements, designing system architecture, and implementing frontend and backend components in a React-based UI with API integration',
      'Designed and iterated on LLM-driven analysis workflows to identify key concerns, improvements, and regressions across test cycles',
    ],
    outcome: 'Automated qualitative test analysis, reducing hours of manual review to seconds while improving visibility into performance trends through LLM integration.',
    takeaway: 'My takeaways: Strengthened my ability to build end-to-end product features, lead development across the stack, and design AI-driven systems with real user impact.',
  },
  {
    id: 2,
    company: 'M&T Bank',
    location: 'Wilmington, DE',
    position: 'Technology Intern',
    date: 'June 2024 – August 2024',
    bullets: [
      'Migrated two full-stack applications across five environments from Azure DevOps to GitLab, implementing CI/CD pipelines and automated smoke testing for internal and external systems',
      'Resolved 400+ security vulnerabilities identified through Veracode by integrating automated scanning and testing workflows',  
      'Facilitated a discussion with Delaware Governor John Carney, representing M&T Bank’s 2024 intern cohort in a multi-company event',
    ],
    outcome: 'Improved deployment reliability and security by automating testing and vulnerability resolution, while ensuring seamless migration across environments.',
    takeaway: 'My takeaways:Gained experience working within large-scale systems, improving code security, and collaborating across teams to deliver reliable and maintainable software.',
  },
  {
    id: 3,
    company: 'University of Delaware',
    location: 'Newark, DE',
    position: 'CubeSat Satellite Ground Software Developer',
    date: 'June 2024 – May 2025',
    bullets: [
      'Led the iterative design of a PyQt-based GUI for satellite ground software, collaborating across teams to ensure intuitive navigation and effective data visualization',
      'Developed communication protocols, command structures, and packet formats using Python and C to enable reliable data transmission between ground and flight systems',
    ],
    outcome: 'Enabled seamless communication between ground and flight software, improving system integration and ensuring reliable data flow throughout the mission lifecycle.',
    takeaway: 'My takeaways: Strengthened my understanding of systems-level thinking, real-time data communication, and designing software for complex, mission-critical environments.',
  },
  {
    id: 4,
    company: 'HenHacks Hackathon',
    location: 'Newark, DE',
    position: 'Head Coordinator',
    date: 'September 2022 – May 2026',
    bullets: [
      'Served as Head Coordinator for HenHacks 2025, leading planning and execution for a 500+ attendee hackathon across 53 universities',
      'Directed a team of 22 organizers across four committees, managing logistics, sponsorship outreach, and cross-functional coordination',
      'Acted as primary point of contact for 50+ prospective sponsors, driving partnerships and event support',
    ],
    outcome: 'Delivered a large-scale event with 98% attendee satisfaction, successfully coordinating logistics, sponsorships, and team execution',
    takeaway: 'My takeaways:Developed strong leadership and organizational skills, learning how to manage teams, stakeholders, and high-impact events under tight timelines.',
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