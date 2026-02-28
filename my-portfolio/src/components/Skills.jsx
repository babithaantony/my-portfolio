import { portfolioData } from "../data/portfolioData";
import "./Skills.css";

export default function Skills() {
  const { skills } = portfolioData;

  const skillCategories = [
    { title: "Frontend", skills: skills.frontend },
    { title: "Backend", skills: skills.backend },
    { title: "Databases", skills: skills.databases },
    { title: "Tools & DevOps", skills: skills.tools },
    { title: "Methodologies", skills: skills.methodologies },
    { title: "Web Technologies", skills: skills.legacy },
  ];

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>

        <div className="skills-grid">
          {skillCategories.map((category) => (
            <div key={category.title} className="skill-category card fade-in">
              <h3 className="category-title">{category.title}</h3>

              <div className="skills-list">
                {category.skills.map((skill) => (
                  <span key={skill} className="badge">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="skills-summary">
          <div className="summary-card fade-in">
            <h3>Specializations</h3>
            <div className="specializations">
              <div className="spec-item">
                <span className="spec-icon">⚡</span>
                <div>
                  <h4>Performance Optimization</h4>
                  <p>
                    Building faster, more efficient applications with focus on
                    user experience
                  </p>
                </div>
              </div>
              <div className="spec-item">
                <span className="spec-icon">♿</span>
                <div>
                  <h4>Accessibility (WCAG/ARIA)</h4>
                  <p>Creating inclusive applications that work for everyone</p>
                </div>
              </div>
              <div className="spec-item">
                <span className="spec-icon">🏗️</span>
                <div>
                  <h4>Scalable Architecture</h4>
                  <p>Designing systems that grow with your business needs</p>
                </div>
              </div>
              <div className="spec-item">
                <span className="spec-icon">🔧</span>
                <div>
                  <h4>Full Stack Development</h4>
                  <p>End-to-end solutions from database to user interface</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
