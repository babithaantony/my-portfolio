import { portfolioData } from "../data/portfolioData";
import "./Hero.css";

export default function Hero() {
  const { personal } = portfolioData;

  return (
    <section id="home" className="hero">
      {/* Background orbs */}
      <div className="hero-orb hero-orb-1" />
      <div className="hero-orb hero-orb-2" />

      <div className="hero-inner container">
        <div className="hero-text fade-in">
          <div className="hero-eyebrow">
            <span className="eyebrow-dot" />
            Available for new opportunities
          </div>

          <h1 className="hero-heading">
            Hey I&apos;m <span className="hero-name">{personal.name}</span>
          </h1>

          <p className="hero-role">{personal.title}</p>

          <p className="hero-desc">
            Living in {personal.location}. Building high-performance web
            applications with React, TypeScript, and AWS — focused on clean
            code, great UX, and measurable impact.
          </p>

          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary">
              Contact Me
            </a>
            <a href="#projects" className="btn btn-outline">
              View Portfolio
            </a>
            <a
              href="/babitha-antony-fullstack-resume.pdf"
              download="babitha-antony-fullstack-resume.pdf"
              className="btn btn-outline"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download Resume
            </a>
          </div>

          <div className="hero-socials">
            <a
              href={`mailto:${personal.email}`}
              className="social-link"
              aria-label="Email"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="LinkedIn"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            <a
              href={`tel:${personal.phone.replace(/\D/g, "")}`}
              className="social-link"
              aria-label="Phone"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.15 12 19.79 19.79 0 0 1 1.08 3.41 2 2 0 0 1 3.05 1.25h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21 16.92z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="hero-visual fade-in">
          {/* Geometric accent ring */}
          <div className="avatar-ring" />

          <div className="avatar-wrap">
            {/* To show your photo: add it as public/profile-photo.jpeg */}
            <img
              src="./profile-photo.jpeg"
              alt={personal.name}
              className="avatar-photo"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
            <div className="avatar-initials">BA</div>
          </div>

          {/* Floating stat cards */}
          <div className="stat-float stat-float-1">
            <span className="sf-num">9+</span>
            <span className="sf-label">Years in Tech</span>
          </div>
          <div className="stat-float stat-float-2">
            <span className="sf-num">250+</span>
            <span className="sf-label">Features Shipped</span>
          </div>
          <div className="stat-float stat-float-3">
            <span className="sf-num">99.9%</span>
            <span className="sf-label">Uptime</span>
          </div>
          <div className="stat-float stat-float-4">
            <span className="sf-num">100+</span>
            <span className="sf-label">Components developed</span>
          </div>
        </div>
      </div>

      <div className="hero-scroll">
        <div className="scroll-line" />
        <span>Scroll</span>
      </div>
    </section>
  );
}
