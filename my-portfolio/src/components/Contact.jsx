import { portfolioData } from "../data/portfolioData";
import "./Contact.css";

export default function Contact() {
  const { personal } = portfolioData;

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <span className="section-label">Get In Touch</span>
        <h2 className="section-title">Let&apos;s work together</h2>
        <p className="section-subtitle">
          I&apos;m always open to discussing new projects, creative ideas, or
          opportunities to be part of something great.
        </p>

        <div className="contact-grid">
          <div className="contact-info fade-in">
            <a href={`mailto:${personal.email}`} className="c-method">
              <div className="c-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </div>
              <div>
                <p className="c-label">Email</p>
                <p className="c-value">{personal.email}</p>
              </div>
            </a>

            <a href={`tel:${personal.phone.replace(/\D/g, "")}`} className="c-method">
              <div className="c-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.15 12 19.79 19.79 0 0 1 1.08 3.41 2 2 0 0 1 3.05 1.25h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21 16.92z" />
                </svg>
              </div>
              <div>
                <p className="c-label">Phone</p>
                <p className="c-value">{personal.phone}</p>
              </div>
            </a>

            <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="c-method">
              <div className="c-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" />
                </svg>
              </div>
              <div>
                <p className="c-label">LinkedIn</p>
                <p className="c-value">Connect with me</p>
              </div>
            </a>

            <div className="c-method">
              <div className="c-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div>
                <p className="c-label">Location</p>
                <p className="c-value">{personal.location}</p>
              </div>
            </div>
          </div>

          <div className="contact-form-wrap fade-in">
            <form
              className="c-form"
              onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.target);
                const mailtoLink = `mailto:${personal.email}?subject=${encodeURIComponent(formData.get("subject"))}&body=${encodeURIComponent(`Name: ${formData.get("name")}\nEmail: ${formData.get("email")}\n\nMessage:\n${formData.get("message")}`)}`;
                window.location.href = mailtoLink;
              }}
            >
              <div className="f-row">
                <div className="f-group">
                  <label className="f-label" htmlFor="name">Name</label>
                  <input className="f-input" type="text" id="name" name="name" placeholder="Your name" required />
                </div>
                <div className="f-group">
                  <label className="f-label" htmlFor="email">Email</label>
                  <input className="f-input" type="email" id="email" name="email" placeholder="your@email.com" required />
                </div>
              </div>

              <div className="f-group">
                <label className="f-label" htmlFor="subject">Subject</label>
                <input className="f-input" type="text" id="subject" name="subject" placeholder="What's this about?" required />
              </div>

              <div className="f-group">
                <label className="f-label" htmlFor="message">Message</label>
                <textarea className="f-input f-textarea" id="message" name="message" rows="5" placeholder="Tell me about your project..." required></textarea>
              </div>

              <button type="submit" className="btn btn-primary f-submit">
                Send Message
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>

      <footer className="site-footer">
        <div className="container">
          <div className="footer-inner">
            <p className="footer-copy">© 2025 Babitha Antony. All rights reserved.</p>
            <div className="footer-links">
              <a href={personal.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href={`mailto:${personal.email}`}>Email</a>
              <a href="#home">Back to top ↑</a>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}
