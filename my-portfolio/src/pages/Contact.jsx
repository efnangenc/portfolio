import { useRef, useState } from "react";
import CardHead from "../components/CardHead";
// import menuItems from "../data/menuItems";
import socialLinks from "../data/contactItems";
import React from "react";

import "../styles/Contact.scss";
import { useLanguage } from "../providers/LanguageProvider";
import { sendEmail } from "../services/mailService";
import ReCAPTCHA from "react-google-recaptcha";

function Contact({ menuItems }) {
  const contactItem = menuItems.find((item) => item.id === "contact");
  const [main, sub1, sub2, sub3] = contactItem.colors;
  const { t } = useLanguage();
  const formRef = useRef();
  const [captchaValue, setCaptchaValue] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const recapthcaValue = recapthcaRef.current.getValue();
    if (!recapthcaValue) {
      alert("Please verify that you are not a robot.");
      return;
    }
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus(null), 3000);
      return;
    }

    setIsSubmitting(true);

    const result = await sendEmail(formRef, captchaValue);

    if (result.success) {
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      formRef.current.reset();
    } else {
      setSubmitStatus("error");
    }

    setIsSubmitting(false);
    setTimeout(() => setSubmitStatus(null), 5000);
  };

  return (
    <div className="contact">
      <CardHead item={contactItem} />

      <div style={{ backgroundColor: sub1 }} className="cont-text">
        <div className="text-container">
          <div className="text-line">
            <span className="lets">Let's</span>
            <div className="text-decoration"></div>
          </div>
          <div className="text-line">
            <span className="talk">Talk About</span>
            <div className="text-decoration"></div>
          </div>
          <div className="text-line">
            <span className="buss">Business</span>
            <div className="text-decoration"></div>
          </div>
        </div>
        {/* Animated Elements */}
        {/* <div className="floating-elements">
          <div className="float-item">💡</div>
          <div className="float-item">🚀</div>
          <div className="float-item">💻</div>
          <div className="float-item">🎯</div>
        </div> */}
      </div>

      <div className="contact-form-section">
        <div style={{ backgroundColor: sub2 }} className="form-container">
          <div className="form-header">
            <h2>Get In Touch</h2>
            <p>
              Ready to start your next project? Let's create something amazing
              together!
            </p>
          </div>

          <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
            <div className="form-row">
              <div className="input-group top">
                <div className="input-label">Your Name *</div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your Name"
                  className="form-input"
                  required
                />
              </div>

              <div className="input-group top">
                <div className="input-label">Email Address *</div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your_email@example.com"
                  className="form-input"
                  required
                />
              </div>
            </div>

            <div className="input-group sub">
              <div className="input-label">Subject</div>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                placeholder="Subject"
                className="form-input"
              />
            </div>

            <div className="input-group sub">
              <div className="input-label">Message *</div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Message"
                rows="6"
                className="form-input"
                required
              />
            </div>

            {/* <ReCAPTCHA
              sitekey={import.meta.env.REACT_APP_RECAPTCHA_SITE_KEY}
              onChange={(value) => setCaptchaValue(value)}
            /> */}
            <div className="button">
              <button
                type="submit"
                className={`submit-btn ${isSubmitting ? "submitting" : ""}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="spinner"></span>
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </button>
            </div>
            {submitStatus === "success" && (
              <div className="status-message success">
                <span className="status-icon">✅</span>
                Message sent successfully! I'll get back to you soon.
              </div>
            )}

            {submitStatus === "error" && (
              <div className="status-message error">
                <span className="status-icon">❌</span>
                Please fill in all required fields or try again later.
              </div>
            )}
          </form>
        </div>

        <div className="contact-info">
          <div style={{ backgroundColor: sub3 }} className="info-section">
            <h3>Let's Connect</h3>
            <p>
              I'm always interested in new opportunities, exciting projects, and
              meeting fellow developers. Feel free to reach out!
            </p>
          </div>

          <div style={{ backgroundColor: sub3 }} className="social-links">
            <h4>Find Me Online</h4>
            <div className="social-grid">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  style={{ "--accent-color": link.color }}
                >
                  <div className="social-icon">{link.icon}</div>
                  <span className="social-name">{link.name}</span>
                </a>
              ))}
            </div>
          </div>

          <div style={{ backgroundColor: sub3 }} className="contact-details">
            <h4>Direct Contact</h4>
            <div className="detail-item">
              <span className="detail-icon">📧</span>
              <span className="detail-text">efnan@example.com</span>
            </div>
            <div className="detail-item">
              <span className="detail-icon">📍</span>
              <span className="detail-text">Ankara, Turkey</span>
            </div>
            <div className="detail-item">
              <span className="detail-icon">🕐</span>
              <span className="detail-text">Available Monday - Friday</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
