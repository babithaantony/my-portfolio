import { useEffect, useRef, useState } from "react";
import { portfolioData } from "../data/portfolioData";
import "./About.css";

function useCounter(target, duration = 2000) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !started) setStarted(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const numeric = parseInt(target);
    if (isNaN(numeric)) { setCount(target); return; }
    let start = 0;
    const step = numeric / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= numeric) { setCount(numeric); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [started, target, duration]);

  return [count, ref];
}

function StatCounter({ value, suffix, label }) {
  const [count, ref] = useCounter(value);
  return (
    <div className="about-stat" ref={ref}>
      <span className="about-stat-num">{count}{suffix}</span>
      <span className="about-stat-label">{label}</span>
    </div>
  );
}

export default function About() {
  const { personal, education } = portfolioData;

  const expertise = [
    "Frontend Architecture & React Development",
    "Fullstack Application Development",
    "E-commerce Platform Optimization",
    "Serverless & Cloud Architecture (AWS)",
    "Performance Optimization & Accessibility",
    "Team Leadership & Mentorship",
  ];

  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="about-header">
          <span className="section-label">About Me</span>
          <h2 className="section-title">Passionate engineer,<br />focused on impact</h2>
        </div>

        <div className="about-grid">
          <div className="about-left fade-in">
            <p className="about-body">
              I&apos;m a Software Engineer with <strong>9+ years of industry experience</strong> and
              5+ years specializing in modern tech (React, TypeScript, Node.js, AWS). My work centers
              on creating exceptional user experiences through clean frontend development backed by
              robust systems.
            </p>
            <p className="about-body">
              At <strong>Purple Innovation LLC</strong>, I led UI/UX redesigns, implemented serverless
              microservices, and maintained high-availability infrastructure serving millions of users.
              I&apos;m passionate about accessible, performant code that makes a real difference.
            </p>

            <div className="about-stats-row">
              <StatCounter value={9} suffix="+" label="Years in Tech" />
              <StatCounter value={250} suffix="+" label="Features Shipped" />
              <StatCounter value={12} suffix="+" label="Client Projects" />
              <StatCounter value={99} suffix="%" label="Uptime Maintained" />
            </div>
          </div>

          <div className="about-right fade-in">
            <div className="about-card">
              <h3 className="about-card-title">Expertise</h3>
              <ul className="expertise-list">
                {expertise.map((item) => (
                  <li key={item} className="expertise-item">
                    <span className="check-icon">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="about-card">
              <h3 className="about-card-title">Education</h3>
              <div className="edu-item">
                <div className="edu-icon">🎓</div>
                <div>
                  <p className="edu-degree">{education.degree}</p>
                  <p className="edu-school">{education.institution}</p>
                  <p className="edu-loc">{education.location}</p>
                </div>
              </div>
            </div>

            <a href={`mailto:${personal.email}`} className="btn btn-primary about-cta">
              Send me an Email
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
