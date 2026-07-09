import { portfolioData } from "../data/portfolioData";
import "./Projects.css";

const projectColors = [
  ["#1a237e", "#283593"],
  ["#1b5e20", "#2e7d32"],
  ["#4a148c", "#6a1b9a"],
  ["#bf360c", "#d84315"],
  ["#006064", "#00838f"],
  ["#880e4f", "#ad1457"],
  ["#e65100", "#ef6c00"],
  ["#33691e", "#558b2f"],
  ["#0d47a1", "#1565c0"],
];

const projectIcons = ["🛍️", "☁️", "⚛️", "⚡", "🌐", "📋", "📊", "🎵", "🛒"];

export default function Projects() {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <span className="section-label">My Work</span>
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">
          A selection of impactful projects spanning e-commerce, cloud architecture,
          and component systems.
        </p>

        <div className="projects-grid fade-in">
          {projects.map((project, index) => {
            const [from, to] = projectColors[index % projectColors.length];
            return (
              <div key={project.id} className="proj-card">
                <div
                  className="proj-thumb"
                  style={{ background: `linear-gradient(135deg, ${from}, ${to})` }}
                >
                  <div className="proj-thumb-inner">
                    <span className="proj-thumb-icon">
                      {projectIcons[index % projectIcons.length]}
                    </span>
                    <span className="proj-year-badge">{project.year}</span>
                  </div>
                </div>

                <div className="proj-body">
                  <h3 className="proj-title">{project.title}</h3>
                  <p className="proj-desc">{project.description}</p>

                  <div className="proj-impact">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" /><polyline points="16 7 22 7 22 13" />
                    </svg>
                    {project.impact}
                  </div>

                  <div className="proj-techs">
                    {project.technologies.map((t) => (
                      <span key={t} className="proj-tech">{t}</span>
                    ))}
                  </div>

                  <a
                    href={project.link || "#contact"}
                    className="proj-link"
                    {...(project.link
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                  >
                    {project.link ? "View on GitHub" : "Learn More"}
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                    </svg>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        <div className="projects-cta fade-in">
          <p className="cta-text">Want to see more of my work?</p>
          <div className="cta-btns">
            <a
              href="https://www.linkedin.com/in/babitha-antony"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              LinkedIn Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
