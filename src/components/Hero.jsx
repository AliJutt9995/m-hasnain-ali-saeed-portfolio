import { useEffect, useState } from "react";
import {
  ArrowRight,
  Code2,
  ExternalLink,
  Sparkles,
} from "lucide-react";

import "../styles/hero.css";

const rotatingWords = [
  "Websites",
  "AI Workflows",
  "E-Commerce Stores",
  "SaaS Platforms",
  "Web Applications",
  "Digital Experiences",
];

export default function Hero() {
  const [currentWord, setCurrentWord] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((previous) =>
        previous === rotatingWords.length - 1
          ? 0
          : previous + 1
      );
    }, 2600);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-section" id="hero">
      <div className="hero-container">

        <div className="hero-content">
          <div className="hero-eyebrow">
            <Sparkles size={16} />

            <span>
              Web Developer & AI Automation Specialist
            </span>
          </div>

          <h1 className="hero-title">
            <span className="hero-title-fixed">
              Building Modern
            </span>

            <span
              className="hero-rotating-wrap"
              aria-live="polite"
            >
              <span
                key={currentWord}
                className="hero-rotating-text"
              >
                {rotatingWords[currentWord]}
              </span>
            </span>
          </h1>

          <p className="hero-description">
            I build responsive websites, e-commerce experiences,
            SaaS interfaces and AI-powered workflows using React,
            WordPress, Shopify and modern AI development tools.
          </p>

          <div className="hero-actions">
            <a
              href="#projects"
              className="hero-primary-btn"
            >
              View My Work
              <ArrowRight size={18} />
            </a>

            <a
              href="#contact"
              className="hero-secondary-btn"
            >
              Contact Me
              <ExternalLink size={17} />
            </a>
          </div>

          <div className="hero-tech-list">
            <span>React.js</span>
            <span>WordPress</span>
            <span>JavaScript</span>
            <span>AI Automation</span>
            <span>Shopify</span>
          </div>
        </div>

        <div className="hero-visual">

          <div className="hero-glow hero-glow-one"></div>
          <div className="hero-glow hero-glow-two"></div>

          <div className="hero-orbit"></div>

          <div className="floating-badge badge-react">
            ⚛ React
          </div>

          <div className="floating-badge badge-js">
            ⚡ JavaScript
          </div>

          <div className="floating-badge badge-wp">
            ◩ WordPress
          </div>

          <div className="floating-badge badge-elementor">
            ✨ AI Automation
          </div>

          <div className="code-card">

            <div className="code-card-top">
              <div className="window-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>

              <div className="code-file">
                <Code2 size={15} />
                portfolio.js
              </div>
            </div>

            <div className="code-area">
              <div>
                <span className="code-purple">
                  const
                </span>{" "}

                <span className="code-cyan">
                  developer
                </span>{" "}
                = {"{"}
              </div>

              <div className="code-indent">
                name:{" "}
                <span className="code-string">
                  "M. Hasnain Ali Saeed"
                </span>
                ,
              </div>

              <div className="code-indent">
                role:{" "}
                <span className="code-string">
                  "Web Developer & AI Specialist"
                </span>
                ,
              </div>

              <div className="code-indent">
                stack: [
                <span className="code-string">
                  "React"
                </span>
                ,{" "}
                <span className="code-string">
                  "WordPress"
                </span>
                ,{" "}
                <span className="code-string">
                  "AI"
                </span>
                ],
              </div>

              <div className="code-indent">
                focus:{" "}
                <span className="code-string">
                  "Web & AI Experiences"
                </span>
                ,
              </div>

              <div className="code-indent">
                available:{" "}
                <span className="code-green">
                  true
                </span>
              </div>

              <div>{"}"}</div>
            </div>

            <div className="code-bottom-cards">

              <div className="mini-code-card">
                <span>AI Automation</span>

                <div className="mini-bar">
                  <i></i>
                </div>
              </div>

              <div className="mini-code-card">
                <span>Performance</span>

                <div className="mini-bar">
                  <i></i>
                </div>
              </div>

            </div>
          </div>

          <span className="hero-dot dot-one"></span>
          <span className="hero-dot dot-two"></span>
          <span className="hero-dot dot-three"></span>

        </div>
      </div>
    </section>
  );
}