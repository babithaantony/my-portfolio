import { portfolioData } from "../data/portfolioData";
import "./Experience.css";

export default function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="section experience">
      <div className="container">
        <h2 className="section-title">Professional Experience</h2>

        <div className="timeline">
          {experience.map((job, index) => (
            <div
              key={job.id}
              className={`timeline-item fade-in ${index % 2 === 0 ? "left" : "right"}`}
            >
              <div className="timeline-marker"></div>

              <div className="timeline-content card">
                <div className="job-header">
                  <h3 className="job-title">{job.title}</h3>
                  <span className="company-badge">{job.company}</span>
                </div>

                <p className="job-location">📍 {job.location}</p>

                <p className="job-dates">
                  {job.startDate} - {job.endDate}
                </p>

                <ul className="job-highlights">
                  {job.highlights.map((highlight, idx) => (
                    <li key={idx}>{highlight}</li>
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
