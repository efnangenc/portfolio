import { useState } from "react";
import CardHead from "../components/CardHead";
import menuItems from "../data/menuItems";
import socialLinks from "../data/contactItems";
import "../styles/Contact.scss";
import { useLanguage } from "../providers/LanguageProvider";

function Contact() {
  const contactItem = menuItems.find((item) => item.id === "contact");
  const { t, lang, setLang } = useLanguage();
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus(null), 3000);
      return;
    }

    setIsSubmitting(true);
    
    // EmailJS implementation burada olacak
    setTimeout(() => {
      console.log("Form data:", formData);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 2000);
  };



  return (
    <div className="contact">
      <CardHead item={contactItem} />
      
      {/* Hero Text Section */}
      <div className="cont-text">
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

      {/* Contact Form Section */}
      <div className="contact-form-section">
        <div className="form-container">
          <div className="form-header">
            <h2>Get In Touch</h2>
            <p>Ready to start your next project? Let's create something amazing together!</p>
          </div>

          <div className="contact-form">
            <div className="form-row">
              <div className="input-group top">
                <div className="input-label">Your Name *</div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="John Doe"
                  className="form-input"
                />
              </div>
              
              <div className="input-group top">
                <div className="input-label">Email Address *</div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="john@example.com"
                  className="form-input"
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
                placeholder="Project Discussion"
                className="form-input"
              />
            </div>

            <div className="input-group sub">
              <div className="input-label">Message *</div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Tell me about your project, ideas, or just say hello!"
                rows="6"
                className="form-textarea"
              />
            </div>

            <div 
              className={`submit-btn ${isSubmitting ? 'submitting' : ''}`}
              onClick={!isSubmitting ? handleSubmit : undefined}
            >
              {isSubmitting ? (
                <>
                  <span className="spinner"></span>
                  Sending...
                </>
              ) : (
                'Send Message'
              )}
            </div>

            {/* {submitStatus === 'success' && (
              <div className="status-message success">
                <span className="status-icon">✅</span>
                Message sent successfully! I'll get back to you soon.
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="status-message error">
                <span className="status-icon">❌</span>
                Please fill in all required fields.
              </div>
            )} */}
          </div>
        </div>

        {/* Contact Info & Social Links */}
        <div className="contact-info">
          <div className="info-section">
            <h3>Let's Connect</h3>
            <p>
              I'm always interested in new opportunities, exciting projects, 
              and meeting fellow developers. Whether you have a project in mind 
              or just want to chat about technology, feel free to reach out!
            </p>
          </div>

          <div className="social-links">
            <h4>Find Me Online</h4>
            <div className="social-grid">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  style={{ '--accent-color': link.color }}
                >
                  <div className="social-icon">{link.icon}</div>
                  <span className="social-name">{link.name}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="contact-details">
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