import { portfolioData } from "../data/portfolioData";
import "./Hero.css";

export default function Hero() {
  const { personal } = portfolioData;

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-text fade-in">
          <p className="hero-greeting">Welcome to my portfolio</p>
          <h1 className="hero-title">
            Hi, I'm <span className="highlight">{personal.name}</span>
          </h1>
          <p className="hero-subtitle">{personal.title}</p>
          <p className="hero-description">{personal.summary}</p>

          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary">
              Get in Touch
            </a>
            <a href="#projects" className="btn">
              View My Work
            </a>
          </div>

          <div className="hero-contact-links">
            <a href={`mailto:${personal.email}`} title="Email">
              <span>📧</span>
            </a>
            <a href={`tel:${personal.phone.replace(/\D/g, "")}`} title="Phone">
              <span>📱</span>
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
            >
              <span>💼</span>
            </a>
          </div>
        </div>

        <div className="hero-visual fade-in">
          <div className="profile-card">
            <div className="profile-header">
              <div className="avatar">BA</div>
            </div>
            <div className="profile-info">
              <h2>{personal.name}</h2>
              <p className="role">{personal.title}</p>
              <p className="location">📍 {personal.location}</p>
              <div className="profile-stats">
                <div className="stat">
                  <span className="stat-number">9+</span>
                  <span className="stat-label">Years in Tech</span>
                </div>
                <div className="stat">
                  <span className="stat-number">5+</span>
                  <span className="stat-label">Modern Stack</span>
                </div>
                <div className="stat">
                  <span className="stat-number">250+</span>
                  <span className="stat-label">Features Shipped</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <span>Scroll to explore</span>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <path
            d="M12 5v14M19 12l-7 7-7-7"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </section>
  );
}
