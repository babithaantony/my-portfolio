import { useState } from "react";
import { portfolioData } from "../data/portfolioData";
import "./Testimonials.css";

export default function Testimonials() {
  const { testimonials, testimonialStats, professionalRecommendations } =
    portfolioData;
  const [activeTab, setActiveTab] = useState("professional");

  const renderStars = (rating) =>
    [...Array(5)].map((_, i) => (
      <span key={i} className={`star ${i < rating ? "filled" : ""}`}>
        ★
      </span>
    ));

  return (
    <section id="testimonials" className="section testimonials">
      <div className="container">
        <span className="section-label">Kind Words</span>
        <h2 className="section-title">Testimonials &amp; Recommendations</h2>
        <p className="section-subtitle">
          What colleagues, managers, and clients say about working with me.
        </p>

        <div className="t-tabs fade-in">
          <button
            className={`t-tab ${activeTab === "professional" ? "active" : ""}`}
            onClick={() => setActiveTab("professional")}
          >
            Professional Recommendations
          </button>
          <button
            className={`t-tab ${activeTab === "clients" ? "active" : ""}`}
            onClick={() => setActiveTab("clients")}
          >
            Client Reviews
          </button>
        </div>

        {activeTab === "professional" && (
          <div className="t-grid fade-in">
            {professionalRecommendations.map((rec) => (
              <div key={rec.id} className="t-card">
                <div className="t-quote-mark">"</div>
                <p className="t-text">{rec.text}</p>
                <div className="t-footer">
                  <div className="t-avatar">{rec.name.charAt(0)}</div>
                  <div className="t-author">
                    <span className="t-name">{rec.name}</span>
                    <span className="t-role">
                      {rec.title} · {rec.company}
                    </span>
                  </div>
                  <span
                    className={`t-badge t-badge-${rec.relationship.toLowerCase()}`}
                  >
                    {rec.relationship}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "clients" && (
          <div className="fade-in">
            <div className="t-stats-row">
              <div className="t-stat">
                <span className="t-stat-num">
                  {testimonialStats.averageRating}
                </span>
                <div className="t-stat-stars">{renderStars(5)}</div>
                <span className="t-stat-label">Average Rating</span>
              </div>
              <div className="t-stat">
                <span className="t-stat-num">
                  {testimonialStats.totalReviews}
                </span>
                <span className="t-stat-label">Total Reviews</span>
              </div>
              <div className="t-stat">
                <span className="t-stat-num">
                  {testimonialStats.positiveRating}
                </span>
                <span className="t-stat-label">Positive</span>
              </div>
              <div className="t-stat">
                <span className="t-stat-source">
                  from
                  <a href="https://pph.me/babitha#reviews" target="_blank">
                    {testimonialStats.source}
                  </a>
                </span>
              </div>
            </div>

            <div className="t-grid">
              {testimonials.map((t) => (
                <div key={t.id} className="t-card">
                  <div className="t-stars">{renderStars(t.rating)}</div>
                  <span className="t-highlight">{t.highlight}</span>
                  <p className="t-text">"{t.text}"</p>
                  <div className="t-footer">
                    <div className="t-avatar">{t.name.charAt(0)}</div>
                    <div className="t-author">
                      <span className="t-name">{t.name}</span>
                      <span className="t-role">
                        {t.location} · {t.date}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="t-cta fade-in">
          <h3>Ready to work together?</h3>
          <a href="#contact" className="btn btn-primary">
            Let&apos;s Connect
          </a>
        </div>
      </div>
    </section>
  );
}
