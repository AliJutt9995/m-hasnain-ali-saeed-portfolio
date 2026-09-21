import { useState } from "react";
import {
  Mail,
  MessageCircle,
  Send,
  Code2,
  Phone,
} from "lucide-react";

import "../styles/contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setIsSubmitting(true);
    setStatus("");

    try {
      const response = await fetch(
        "https://formspree.io/f/mwlkzzdo",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            project: formData.project,
            message: formData.message,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      setStatus("Message sent successfully. I’ll get back to you soon.");

      setFormData({
        name: "",
        email: "",
        project: "",
        message: "",
      });
    } catch (error) {
      console.error(error);

      setStatus(
        "Something went wrong. Please try again or email me directly."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">

        <div className="contact-info">
          <span className="section-kicker">Contact</span>

          <h2>
            Have a project in mind?
            <span> Let’s build something great.</span>
          </h2>

          <p>
            Tell me about your website, landing page, React project,
            WordPress website, e-commerce store, or other development
            requirements.
          </p>

          <div className="contact-methods">

            <a
              href="mailto:alisaeed9995@gmail.com"
              className="contact-method"
            >
              <div className="contact-method-icon">
                <Mail size={20} />
              </div>

              <div>
                <span>Email</span>
                <strong>alisaeed9995@gmail.com</strong>
              </div>
            </a>

            <a
              href="tel:+923314845528"
              className="contact-method"
            >
              <div className="contact-method-icon">
                <Phone size={20} />
              </div>

              <div>
                <span>Phone</span>
                <strong>0331-4845528</strong>
              </div>
            </a>

            <a
              href="https://github.com/AliJutt9995"
              target="_blank"
              rel="noreferrer"
              className="contact-method"
            >
              <div className="contact-method-icon">
                <Code2 size={20} />
              </div>

              <div>
                <span>GitHub</span>
                <strong>View my code</strong>
              </div>
            </a>

            <a
              href="https://wa.me/923314845528"
              target="_blank"
              rel="noreferrer"
              className="contact-method"
            >
              <div className="contact-method-icon">
                <MessageCircle size={20} />
              </div>

              <div>
                <span>WhatsApp</span>
                <strong>Start a conversation</strong>
              </div>
            </a>

          </div>
        </div>

        <div className="contact-form-card">
          <div className="contact-form-header">
            <h3>Send me a message</h3>

            <p>
              Share a few details about your project and I’ll get back to you.
            </p>
          </div>

          <form
            className="contact-form"
            onSubmit={handleSubmit}
          >
            <div className="form-row">

              <div className="form-group">
                <label htmlFor="name">
                  Your Name
                </label>

                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">
                  Email Address
                </label>

                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  required
                />
              </div>

            </div>

            <div className="form-group">
              <label htmlFor="project">
                Project Type
              </label>

              <select
                id="project"
                name="project"
                value={formData.project}
                onChange={handleChange}
                required
              >
                <option value="">
                  Select project type
                </option>

                <option value="React.js Development">
                  React.js Development
                </option>

                <option value="WordPress Website">
                  WordPress Website
                </option>

                <option value="Landing Page">
                  Landing Page
                </option>

                <option value="E-commerce Website">
                  E-commerce Website
                </option>

                <option value="Shopify Store">
                  Shopify Store
                </option>

                <option value="Website Maintenance">
                  Website Maintenance
                </option>

                <option value="Other">
                  Other
                </option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message">
                Project Details
              </label>

              <textarea
                id="message"
                name="message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project, goals, timeline, and requirements..."
                required
              />
            </div>

            <button
              type="submit"
              className="contact-submit"
              disabled={isSubmitting}
            >
              {isSubmitting
                ? "Sending..."
                : "Send Message"}

              <Send size={17} />
            </button>

            {status && (
              <p className="form-status">
                {status}
              </p>
            )}

          </form>
        </div>
      </div>
    </section>
  );
}