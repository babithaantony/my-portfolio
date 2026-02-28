import { portfolioData } from "../data/portfolioData";
import "./Projects.css";

export default function Projects() {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card card fade-in">
              <div className="project-header">
                <h3 className="project-title">{project.title}</h3>
                <span className="project-year">{project.year}</span>
              </div>

              <p className="project-description">{project.description}</p>

              <div className="project-impact">
                <span className="impact-icon">💡</span>
                <span className="impact-text">{project.impact}</span>
              </div>

              <div className="project-technologies">
                {project.technologies.map((tech) => (
                  <span key={tech} className="tech-badge">
                    {tech}
                  </span>
                ))}
              </div>

              <a href="#contact" className="project-link">
                Learn More →
              </a>
            </div>
          ))}
        </div>

        <div className="projects-cta">
          <h3>Want to see more?</h3>
          <p>
            Check out my GitHub and LinkedIn profiles for additional projects
            and contributions.
          </p>
          <div className="cta-buttons">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              GitHub Profile
            </a>
            <a
              href="https://www.linkedin.com/in/babitha-antony"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              LinkedIn Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
