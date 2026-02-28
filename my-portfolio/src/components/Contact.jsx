import { portfolioData } from "../data/portfolioData";
import "./Contact.css";

export default function Contact() {
  const { personal } = portfolioData;

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>

        <div className="contact-content">
          <div className="contact-info fade-in">
            <h3>Let's talk about everything!</h3>
            <p>
              I'm always interested in hearing about new projects and
              opportunities. Whether you have a question or just want to say hi,
              feel free to reach out!
            </p>

            <div className="contact-methods">
              <a href={`mailto:${personal.email}`} className="contact-method">
                <span className="method-icon">📧</span>
                <div>
                  <h4>Email</h4>
                  <p>{personal.email}</p>
                </div>
              </a>

              <a
                href={`tel:${personal.phone.replace(/\D/g, "")}`}
                className="contact-method"
              >
                <span className="method-icon">📱</span>
                <div>
                  <h4>Phone</h4>
                  <p>{personal.phone}</p>
                </div>
              </a>

              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-method"
              >
                <span className="method-icon">💼</span>
                <div>
                  <h4>LinkedIn</h4>
                  <p>Connect with me</p>
                </div>
              </a>

              <div className="contact-method">
                <span className="method-icon">📍</span>
                <div>
                  <h4>Location</h4>
                  <p>{personal.location}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form fade-in">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.target);
                const mailtoLink = `mailto:${personal.email}?subject=${encodeURIComponent(formData.get("subject"))}&body=${encodeURIComponent(`Name: ${formData.get("name")}\nEmail: ${formData.get("email")}\n\nMessage:\n${formData.get("message")}`)})`;
                window.location.href = mailtoLink;
              }}
            >
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" required />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" name="subject" required />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2024 Babitha Antony. All rights reserved.</p>
          <div className="footer-links">
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a href={`mailto:${personal.email}`}>Email</a>
            <a href="#home">Back to Top</a>
          </div>
        </div>
      </footer>
    </section>
  );
}
