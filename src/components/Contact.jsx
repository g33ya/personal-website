import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import letterAssets from "../letterAssets";
import "./Contact.css";

const letters = [
  { key: 'lpinkWhiteC', alt: 'C', className: 'letter-c1 flutter-a' },
  { key: 'lpinkWhiteO', alt: 'O', className: 'letter-o flutter-b' },
  { key: 'lpinkWhiteN', alt: 'N', className: 'letter-n flutter-c' },
  { key: 'lpinkWhiteT', alt: 'T', className: 'letter-t1 flutter-a' },
  { key: 'lpinkWhiteA', alt: 'A', className: 'letter-a flutter-b' },
  { key: 'lpinkWhiteC', alt: 'C', className: 'letter-c2 flutter-c' },
  { key: 'lpinkWhiteT', alt: 'T', className: 'letter-t2 flutter-a' },
  { key: 'lpinkWhitePOINT', alt: '!', className: 'letter-point flutter-b' },
]

function ContactBanner() {
  return (
    <div className="contact-banner-wrapper">
      {letters.map((letter, index) => (
        <img
          key={`${letter.key}-${index}`}
          src={letterAssets[letter.key]}
          alt={letter.alt}
          className={`contact-letter ${letter.className}`}
        />
      ))}
    </div>
  )
}

export default function Contact() {
  const formRef = useRef(null);
  const [status, setStatus] = useState("idle");
  const [copied, setCopied] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      await emailjs.sendForm(
        "service_amrwt3b",
        "template_5ys5jhi",
        formRef.current,
        "ltxczgmSUNd9PRAAH"
      );

      setStatus("success");
      formRef.current.reset();
    } catch (error) {
      console.error("Email send failed:", error);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="contact-section">

      <ContactBanner />

      <div className="contact-heading">
        <p className="contact-kicker">let’s connect!</p>
        <p className="contact-subtitle">
          Whether you want to talk about projects, opportunities, or just say hi,
          I’d love to hear from you :D
        </p>
      </div>

      <div className="contact-layout">
        <article className="contact-card contact-form-card">
          <div className="contact-tape tape-left" />
          <div className="contact-tape tape-right" />

          <div className="contact-card-header">
            <div className="contact-icon-badge">💌</div>
            <h3>Send Me a Note</h3>
          </div>

          <form ref={formRef} onSubmit={sendEmail} className="contact-form">
            <div className="contact-row">
              <label className="contact-label">
                <input
                  type="text"
                  name="from_name"
                  placeholder="your name"
                  required
                />
              </label>

              <label className="contact-label">
                <input
                  type="email"
                  name="reply_to"
                  placeholder="you@example.com"
                  required
                />
              </label>
            </div>

            <label className="contact-label">
              <span>subject</span>
              <input
                type="text"
                name="subject"
                placeholder="what’s this about?"
                required
              />
            </label>

            <label className="contact-label">
              <span>message</span>
              <textarea
                name="message"
                rows="7"
                placeholder="write your note here..."
                required
              />
            </label>

            <button
              type="submit"
              className="contact-button"
              disabled={status === "sending"}
            >
              {status === "sending" ? "sending..." : "send message ᯓ✈︎"}
            </button>

            {status === "success" && (
              <p className="contact-status success">
                your message was sent successfully ♡
              </p>
            )}

            {status === "error" && (
              <p className="contact-status error">
                something went wrong — please try again.
              </p>
            )}
          </form>
        </article>

        <aside className="contact-card contact-info-card">
          <div className="contact-tape tape-left small-tape-left" />
          <div className="contact-tape tape-right small-tape-right" />

          <div className="contact-card-header">
            <div className="contact-icon-badge">✦</div>
            <h3>Quick Links</h3>
          </div>

          <div className="quick-links-list">
            <div
              className="quick-links-item"
              onClick={() => {
                  navigator.clipboard.writeText("gscozzaro2004@gmail.com");
                  setCopied(true);
                  setTimeout(() => setCopied(false), 1500);
              }}
            >

            <div className="quick-links-icon">📧</div>

            <div className="quick-links-text">
              <span className="quick-links-label">Email</span>
              <span className="quick-links-value">
              {copied ? "copied!" : "click to copy"}
              </span>
            </div>
          </div>

            <a
              className="quick-links-item"
              href="https://www.linkedin.com/in/gscozzaro/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="quick-links-icon">💼</div>
              <div className="quick-links-text">
                <span className="quick-links-label">LinkedIn</span>
                <span className="quick-links-value">connect with me</span>
              </div>
            </a>

            <a
              className="quick-links-item"
              href="https://github.com/g33ya"
              target="_blank"
              rel="noreferrer"
            >
              <div className="quick-links-icon">💻</div>
              <div className="quick-links-text">
                <span className="quick-links-label">GitHub</span>
                <span className="quick-links-value">see my work</span>
              </div>
            </a>
          </div>

          <div className="availability-note">
            <div className="availability-pill">
              <span className="availability-dot" />
              Available May 2026
            </div>
            <p>
              ♡
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}