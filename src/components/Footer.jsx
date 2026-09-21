import {
  Mail,
  Code2,
  BriefcaseBusiness,
  MessageCircle,
  ArrowUp,
} from "lucide-react";

import "../styles/footer.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-container">

        <div className="footer-top">

          <div className="footer-brand">
            <a href="#hero" className="footer-logo">
              M. Hasnain<span> Ali Saeed</span>
            </a>

            <p>
              Web Developer & WordPress Specialist building modern,
              responsive, and performance-focused digital experiences.
            </p>

            <div className="footer-socials">
              <a
                href="mailto:alisaeed9995@gmail.com"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>

              <a
                href="https://www.linkedin.com/in/ali-saeed-a573b81b4"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <BriefcaseBusiness size={18} />
              </a>

              <a
                href="https://github.com/AliJutt9995"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <Code2 size={18} />
              </a>

              <a
                href="https://wa.me/923314845528"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
              >
                <MessageCircle size={18} />
              </a>
            </div>
          </div>
<div className="footer-list-main">
          <div className="footer-links-group">
            <h3>Navigation</h3>

            <a href="#services">Services</a>
            <a href="#projects">Work</a>
            <a href="#process">Process</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="footer-links-group">
            <h3>Services</h3>

            <a href="#services">React Development</a>
            <a href="#services">WordPress Development</a>
            <a href="#services">Landing Pages</a>
            <a href="#services">Website Optimization</a>
            <a href="#services">Maintenance</a>
          </div>
</div>
          <div className="footer-cta">
            <span>Available for freelance work</span>

            <h3>Have a project in mind?</h3>

            <a href="#contact" className="footer-contact-btn">
              Start a Project
            </a>
          </div>

        </div>

        <div className="footer-bottom">
          <p>
            © {year} M. Hasnain Ali Saeed. All rights reserved.
          </p>

          <a href="#hero" className="footer-top-btn">
            Back to top
            <ArrowUp size={16} />
          </a>
        </div>

      </div>
    </footer>
  );
}