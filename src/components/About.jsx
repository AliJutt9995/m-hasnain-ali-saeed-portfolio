import {
  CheckCircle2,
  Download,
  Code2,
  MonitorSmartphone,
  Gauge,
  Layers3,
  ExternalLink,
} from "lucide-react";

import aboutPhoto from "../assets/images/M Hussnain Ali.webp";
import "../styles/about.css";

const strengths = [
  {
    icon: Code2,
    title: "Clean Development",
    text: "Structured, scalable, and maintainable development.",
  },
  {
    icon: MonitorSmartphone,
    title: "Responsive Design",
    text: "Built carefully for desktop, tablet, and mobile.",
  },
  {
    icon: Gauge,
    title: "Performance Focused",
    text: "Fast and optimized digital experiences.",
  },
  {
    icon: Layers3,
    title: "Modern UI",
    text: "Clean interfaces with strong visual hierarchy.",
  },
];

export default function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">

        {/* LEFT VISUAL */}

        <div className="about-visual">

          <div className="about-glow"></div>

          <div className="about-orbit orbit-one"></div>
          <div className="about-orbit orbit-two"></div>

          <div className="about-image-card">
            <img
              src={aboutPhoto}
              alt="M. Hasnain Ali Saeed - Web Developer and AI Automation Specialist"
            />
          </div>

          <div className="experience-badge">
            <strong>4+</strong>
            <span>Years Experience</span>
          </div>

          <div className="available-badge">
            <i></i>
            Available for Work
          </div>

          <span className="about-decoration decoration-one"></span>
          <span className="about-decoration decoration-two"></span>

        </div>


        {/* RIGHT CONTENT */}

        <div className="about-content">

          <span className="section-kicker">
            About Me
          </span>

          <h2>
            Build Better
            <span> Innovate Smarter.</span>
          </h2>

          <p className="about-intro">
            I'm M. Hasnain Ali Saeed, a web developer and AI automation
            specialist focused on creating responsive, modern, and
            practical digital experiences.
          </p>

          <p className="about-description">
            My work combines front-end development, WordPress,
            Elementor, e-commerce, responsive design, performance
            optimization, and modern AI tools. I focus on building
            websites and digital solutions that are polished,
            user-friendly, maintainable, and scalable.
          </p>


          {/* THEMEFOREST EXPERIENCE */}

          <div className="about-highlight">
            <Layers3 size={20} />

            <p>
              I have also worked on multiple commercial website themes
              published under Evonicmedia on ThemeForest, contributing
              to responsive layouts, WordPress development, reusable
              components, and marketplace-ready website experiences.{" "}

              <a
                href="https://themeforest.net/user/evonicmedia/portfolio"
                target="_blank"
                rel="noreferrer"
                className="about-themeforest-link"
              >
                View ThemeForest Portfolio
                <ExternalLink size={14} />
              </a>
            </p>
          </div>


          {/* STRENGTHS */}

          <div className="about-strengths">
            {strengths.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  className="strength-item"
                  key={item.title}
                >
                  <div className="strength-icon">
                    <Icon size={19} />
                  </div>

                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </div>
              );
            })}
          </div>


          {/* MAIN HIGHLIGHT */}

          <div className="about-highlight">
            <CheckCircle2 size={19} />

            <p>
              Focused on delivering professional websites,
              AI-powered workflows, clean UI, reliable functionality,
              and thoughtful user experiences.
            </p>
          </div>


          {/* RESUME */}

          <a
            href="/M.%20Hasnain%20Ali%20Saeed%20Resume.pdf"
            className="about-resume-btn"
            download="M-Hasnain-Ali-Saeed-Resume.pdf"
          >
            Download Resume
            <Download size={17} />
          </a>

        </div>

      </div>
    </section>
  );
}