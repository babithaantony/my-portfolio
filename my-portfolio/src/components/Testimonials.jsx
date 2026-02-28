import { useState } from "react";
import { portfolioData } from "../data/portfolioData";
import "./Testimonials.css";

export default function Testimonials() {
  const { testimonials, testimonialStats, professionalRecommendations } =
    portfolioData;
  const [activeTab, setActiveTab] = useState("professional");

  const renderStars = (rating) => {
    return (
      <div className="stars">
        {[...Array(5)].map((_, i) => (
          <span key={i} className={`star ${i < rating ? "filled" : ""}`}>
            ★
          </span>
        ))}
      </div>
    );
  };

  return (
    <section id="testimonials" className="section testimonials">
      <div className="container">
        <h2 className="section-title">Testimonials & Recommendations</h2>

        <div className="testimonial-tabs fade-in">
          <button
            className={`tab-button ${activeTab === "professional" ? "active" : ""}`}
            onClick={() => setActiveTab("professional")}
          >
            Professional Recommendations
          </button>
          <button
            className={`tab-button ${activeTab === "clients" ? "active" : ""}`}
            onClick={() => setActiveTab("clients")}
          >
            Client Testimonials
          </button>
        </div>

        {activeTab === "professional" && (
          <div className="testimonials-section fade-in">
            <div className="testimonials-grid">
              {professionalRecommendations.map((rec) => (
                <div key={rec.id} className="testimonial-card card">
                  <div className="testimonial-header">
                    <div className="testimonial-info">
                      <h4 className="client-name">{rec.name}</h4>
                      <p className="client-role">{rec.title}</p>
                      <p className="client-location">at {rec.company}</p>
                    </div>
                    <span
                      className={`relationship-badge ${rec.relationship.toLowerCase()}`}
                    >
                      {rec.relationship}
                    </span>
                  </div>

                  <span className="highlight-badge">{rec.highlight}</span>

                  <p className="testimonial-text">"{rec.text}"</p>

                  <p className="testimonial-date">{rec.date}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "clients" && (
          <div className="testimonials-section fade-in">
            <div className="testimonial-stats fade-in">
              <div className="stat-item">
                <span className="stat-value">
                  {testimonialStats.averageRating}
                </span>
                <span className="stat-label">Average Rating</span>
                <div className="stat-stars">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={`star ${i < 4 ? "filled" : "half"}`}
                    >
                      ★
                    </span>
                  ))}
                </div>
              </div>
              <div className="stat-item">
                <span className="stat-value">
                  {testimonialStats.totalReviews}
                </span>
                <span className="stat-label">Total Reviews</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">
                  {testimonialStats.positiveRating}
                </span>
                <span className="stat-label">Positive Rating</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">
                  From {testimonialStats.source}
                </span>
              </div>
            </div>

            <div className="testimonials-grid">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="testimonial-card card">
                  <div className="testimonial-header">
                    <div className="testimonial-info">
                      <h4 className="client-name">{testimonial.name}</h4>
                      <p className="client-location">
                        📍 {testimonial.location}
                      </p>
                    </div>
                  </div>

                  {renderStars(testimonial.rating)}

                  <span className="highlight-badge">
                    {testimonial.highlight}
                  </span>

                  <p className="testimonial-text">"{testimonial.text}"</p>

                  <p className="testimonial-date">{testimonial.date}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="testimonial-cta fade-in">
          <h3>Ready to work together?</h3>
          <p>
            I take pride in delivering excellent work and exceeding
            expectations. Let's collaborate on your next project.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let’s Connect
          </a>
        </div>
      </div>
    </section>
  );
}
