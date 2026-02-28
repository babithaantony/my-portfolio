import { portfolioData } from "../data/portfolioData";
import "./Experience.css";

export default function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="section experience">
      <div className="container">
        <span className="section-label">Work History</span>
        <h2 className="section-title">Professional Experience</h2>
        <p className="section-subtitle">
          9+ years building impactful products — from early-stage startups to high-traffic e-commerce platforms.
        </p>

        <div className="exp-timeline">
          {experience.map((job) => (
            <div key={job.id} className="exp-item fade-in">
              <div className="exp-marker">
                <div className="exp-dot" />
                <div className="exp-line" />
              </div>

              <div className="exp-content">
                <div className="exp-meta">
                  <span className="exp-company">{job.company}</span>
                  <span className="exp-period">{job.startDate} — {job.endDate}</span>
                </div>

                <h3 className="exp-title">{job.title}</h3>

                <div className="exp-location">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
                  </svg>
                  {job.location}
                </div>

                <ul className="exp-highlights">
                  {job.highlights.map((h, i) => (
                    <li key={i} className="exp-highlight">{h}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
