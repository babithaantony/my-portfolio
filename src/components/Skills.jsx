import { portfolioData } from "../data/portfolioData";
import "./Skills.css";

const skillIcons = {
  React: "⚛️",
  TypeScript: "🔷",
  "JavaScript (ES6+)": "🟨",
  Redux: "🔴",
  "Context API": "🔗",
  Hooks: "🪝",
  HTML5: "🌐",
  CSS3: "🎨",
  SCSS: "💅",
  MUI: "🎯",
  "Responsive Design": "📱",
  "Accessibility (ARIA)": "♿",
  "Performance Optimization": "⚡",
  "Node.js": "🟢",
  "REST APIs": "🔌",
  "AWS Lambda": "λ",
  "API Gateway": "🚪",
  "AWS Cognito": "🔐",
  "AWS SQS": "📨",
  "Serverless Architecture": "☁️",
  Microservices: "🧩",
  MySQL: "🐬",
  DynamoDB: "📦",
  NoSQL: "🗄️",
  "Relational Databases": "🔢",
  "Git / GitHub": "🐙",
  "GitHub Actions": "⚙️",
  "GitHub CI/CD": "🔄",
  Jest: "🃏",
  Webpack: "📦",
  ESLint: "✅",
  Docker: "🐳",
  "AWS CloudWatch": "👁️",
  Figma: "🎨",
  Jira: "📋",
  NPM: "📦",
  Postman: "📮",
  "Developer Tools": "🛠️",
  Agile: "🔁",
  Scrum: "📌",
  "Test-Driven Development": "🧪",
  "Component Architecture": "🏗️",
  "A/B Testing": "🔬",
  PHP: "🐘",
  CakePHP: "🎂",
  jQuery: "💎",
  Apache: "🦁",
  cPanel: "🖥️",
  "Next.js": "▲",
  "Tailwind CSS": "🌊",
  "Express.js": "🚂",
  "AWS SES": "📧",
  "AWS SNS": "📣",
  "Stripe API": "💳",
  "Cloudflare R2": "☁️",
  Vitest: "🧪",
  Playwright: "🎭",
  Prometheus: "🔥",
  Grafana: "📈",
  PostgreSQL: "🐘",
  "OpenAI API": "🤖",
  "TensorFlow.js": "🧠",
  "p5.js": "🎨",
  "Pitch/Anomaly Detection": "📡",
};

export default function Skills() {
  const { skills } = portfolioData;

  const categories = [
    { title: "Frontend", icon: "⚛️", skills: skills.frontend },
    { title: "Backend & Cloud", icon: "☁️", skills: skills.backend },
    { title: "AI & Machine Learning", icon: "🤖", skills: skills.ai },
    { title: "Databases", icon: "🗄️", skills: skills.databases },
    { title: "Tools & DevOps", icon: "🛠️", skills: skills.tools },
    { title: "Methodologies", icon: "🔁", skills: skills.methodologies },
    { title: "Web Technologies", icon: "🌐", skills: skills.legacy },
    { title: "Soft Skills", icon: "🤝", skills: skills.softSkills },
  ];

  const specializations = [
    {
      icon: "⚡",
      title: "Performance",
      desc: "Code splitting, Bundling, Lazy loading, Core Web Vitals",
    },
    {
      icon: "♿",
      title: "Accessibility",
      desc: "WCAG 2.1, ARIA, inclusive design",
    },
    {
      icon: "🏗️",
      title: "Architecture",
      desc: "Scalable, maintainable component systems",
    },
    { icon: "🔧", title: "Full Stack", desc: "End-to-end from database to UI" },
  ];

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <span className="section-label">What I know</span>
        <h2 className="section-title">Technical Skills</h2>
        <p className="section-subtitle">
          A broad toolkit across the full stack, from modern frontend frameworks
          to cloud infrastructure and developer tooling.
        </p>

        <div className="skills-grid fade-in">
          {categories.map((cat) => (
            <div key={cat.title} className="skill-cat">
              <div className="skill-cat-header">
                <span className="skill-cat-icon">{cat.icon}</span>
                <h3 className="skill-cat-title">{cat.title}</h3>
              </div>
              <div className="skill-tags">
                {cat.skills.map((skill) => (
                  <span key={skill} className="skill-tag">
                    {skillIcons[skill] && (
                      <span className="skill-tag-icon">
                        {skillIcons[skill]}
                      </span>
                    )}
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="spec-grid fade-in">
          {specializations.map((spec) => (
            <div key={spec.title} className="spec-card">
              <div className="spec-icon-wrap">{spec.icon}</div>
              <h4 className="spec-title">{spec.title}</h4>
              <p className="spec-desc">{spec.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
