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
      <>
        Built an <span className="highlight">AI Insights feature</span> to generate qualitative test analysis for a <span className="highlight">700+ user platform</span>
      </>,
      <>
        Led the <span className="highlight">full development lifecycle</span>, designing <span className="highlight">system architecture</span> and implementing a <span className="highlight">React-based UI</span> with API integration
      </>,
      <>
        Designed <span className="highlight">LLM-driven workflows</span> to identify key concerns, improvements, and regressions across test cycles
      </>,
    ],
    outcome: (
      <>
        Automated qualitative test analysis, reducing <span className="highlight">hours of manual work to seconds</span> and improving visibility into performance trends
      </>
    ),
    takeaway: (
      <>
        Strengthened my ability to build <span className="highlight">end-to-end product features</span>, lead development, and design <span className="highlight">AI-driven systems</span>
      </>
    ),
  },

  {
    id: 2,
    company: 'M&T Bank',
    location: 'Wilmington, DE',
    position: 'Technology Intern',
    date: 'June 2024 – August 2024',
    bullets: [
      <>
        Migrated <span className="highlight">2 full-stack applications</span> across <span className="highlight">5 environments</span> using CI/CD pipelines and automated testing
      </>,
      <>
        Resolved <span className="highlight">400+ security vulnerabilities</span> through integrated scanning and testing workflows
      </>,
      <>
        Represented the intern cohort by facilitating a discussion with <span className="highlight">Delaware Governor John Carney</span>
      </>,
    ],
    outcome: (
      <>
        Improved <span className="highlight">deployment reliability and security</span> through automation and streamlined workflows
      </>
    ),
    takeaway: (
      <>
        Gained experience working with <span className="highlight">large-scale systems</span> and improving <span className="highlight">code security</span> in production environments
      </>
    ),
  },

  {
    id: 3,
    company: 'University of Delaware',
    location: 'Newark, DE',
    position: 'CubeSat Satellite Ground Software Developer',
    date: 'June 2024 – May 2025',
    bullets: [
      <>
        Led the design of a <span className="highlight">PyQt-based GUI</span> for satellite ground software with intuitive navigation and data visualization
      </>,
      <>
        Developed <span className="highlight">communication protocols</span> and packet structures using <span className="highlight">Python and C</span>
      </>,
    ],
    outcome: (
      <>
        Enabled <span className="highlight">reliable data transmission</span> between ground and flight systems across the mission lifecycle
      </>
    ),
    takeaway: (
      <>
        Strengthened my understanding of <span className="highlight">systems-level thinking</span> and real-time communication
      </>
    ),
  },

  {
    id: 4,
    company: 'HenHacks Hackathon',
    location: 'Newark, DE',
    position: 'Head Coordinator',
    date: 'September 2022 – May 2026',
    bullets: [
      <>
        Led planning for a <span className="highlight">500+ attendee</span> hackathon across <span className="highlight">53 universities</span>
      </>,
      <>
        Directed a team of <span className="highlight">22 organizers</span> across multiple committees
      </>,
      <>
        Managed relationships with <span className="highlight">50+ sponsors</span> to support event execution
      </>,
    ],
    outcome: (
      <>
        Delivered an event with <span className="highlight">98% attendee satisfaction</span>
      </>
    ),
    takeaway: (
      <>
        Developed strong <span className="highlight">leadership and organizational skills</span> managing teams and large-scale events
      </>
    ),
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