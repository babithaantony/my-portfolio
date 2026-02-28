import { portfolioData } from "../data/portfolioData";
import "./About.css";

export default function About() {
  const { personal, education } = portfolioData;

  return (
    <section id="about" className="section about">
      <div className="container">
        <h2 className="section-title">About Me</h2>

        <div className="about-content">
          <div className="about-text fade-in">
            <p>
              I'm a passionate Software Engineer with 9+ years of industry experience and 5+ years specializing
              in modern tech stack (React, TypeScript, Node.js, AWS). My journey in tech started with a strong
              foundation in computer science, and I've since specialized in creating exceptional user experiences
              through frontend development while maintaining robust backend systems.
            </p>

            <p>
              At <strong>Purple Innovation LLC</strong>, I've had the
              opportunity to work on a high-traffic e-commerce platform where
              I've led UI/UX redesigns, implemented serverless architectures,
              and maintained deployment infrastructure serving millions of
              users. I'm deeply passionate about writing clean, maintainable
              code, optimizing performance, and ensuring accessibility standards
              are met across all projects.
            </p>

            <p>
              Beyond my professional work, I'm committed to continuous learning
              and staying updated with the latest technologies and best
              practices in fullstack development. I believe in writing code that
              not only solves problems but also serves as documentation for
              future developers.
            </p>

            <div className="about-stats">
              <div className="stat-box">
                <span className="count">9+</span>
                <span className="label">Years in Tech</span>
              </div>
              <div className="stat-box">
                <span className="count">5+</span>
                <span className="label">Modern Stack</span>
              </div>
              <div className="stat-box">
                <span className="count">250+</span>
                <span className="label">Features Delivered</span>
              </div>
              <div className="stat-box">
                <span className="count">99.9%</span>
                <span className="label">Uptime Maintained</span>
              </div>
              <div className="stat-box">
                <span className="count">12+</span>
                <span className="label">Client Projects</span>
              </div>
            </div>
          </div>

          <div className="about-card fade-in">
            <div className="card-section">
              <h3>Expertise</h3>
              <ul className="expertise-list">
                <li>Frontend Architecture & React Development</li>
                <li>Fullstack Application Development</li>
                <li>E-commerce Platform Optimization</li>
                <li>Serverless & Cloud Architecture</li>
                <li>Performance & Accessibility</li>
                <li>Team Leadership & Mentorship</li>
              </ul>
            </div>

            <div className="card-section">
              <h3>Education</h3>
              <div className="education-item">
                <h4>{education.degree}</h4>
                <p>{education.institution}</p>
                <p className="location">{education.location}</p>
              </div>
            </div>

            <div className="card-section">
              <h3>Let's Connect</h3>
              <p>
                I'm always interested in discussing new projects, opportunities,
                and innovative ideas.
              </p>
              <a
                href={`mailto:${personal.email}`}
                className="btn btn-primary"
                style={{ marginTop: "10px" }}
              >
                Send me an Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
