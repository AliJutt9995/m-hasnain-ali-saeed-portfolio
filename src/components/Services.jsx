import {
  Code2,
  Globe2,
  Rocket,
  Gauge,
  ShoppingBag,
  Sparkles,
} from "lucide-react";

import "../styles/services.css";
import Reveal from "./Reveal";

const services = [
  {
    icon: Sparkles,
    title: "AI Automation & Workflows",
    description:
      "AI-powered workflows and automation solutions using modern AI tools, MCP integrations, and intelligent processes to reduce repetitive work.",
  },
  {
    icon: Code2,
    title: "Custom Web Development",
    description:
      "Responsive and modern websites and web applications built with clean code, reusable components, and scalable front-end architecture.",
  },
  {
    icon: Globe2,
    title: "WordPress Development",
    description:
      "Professional WordPress websites built with Elementor, custom layouts, WooCommerce, integrations, and responsive functionality.",
  },
  {
    icon: ShoppingBag,
    title: "E-Commerce Development",
    description:
      "Modern online stores built with WooCommerce and Shopify, focused on product presentation, usability, mobile experience, and conversions.",
  },
  {
    icon: Rocket,
    title: "Landing Page Development",
    description:
      "Conversion-focused landing pages for services, campaigns, products, and lead generation with clear structure and strong calls to action.",
  },
  {
    icon: Gauge,
    title: "Performance & Optimization",
    description:
      "Website speed, responsive layout, technical improvements, usability, SEO foundations, and overall performance optimization.",
  },
];

export default function Services() {
  return (
    <section className="services-section" id="services">
      <div className="services-container">

        <Reveal>
          <div className="section-heading">
            <span className="section-kicker">
              What I Do
            </span>

            <h2>
              Web development and AI solutions for
              <span> modern digital growth.</span>
            </h2>

            <p>
              I combine modern web development, e-commerce, AI automation,
              responsive design, and performance optimization to build
              practical digital experiences for businesses.
            </p>
          </div>
        </Reveal>

        <div className="services-grid">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <Reveal
                key={service.title}
                delay={index * 100}
              >
                <article className="service-card">

                  <div className="service-icon">
                    <Icon
                      size={25}
                      strokeWidth={1.8}
                    />
                  </div>

                  <h3>{service.title}</h3>

                  <p>{service.description}</p>

                  <a
                    href="#contact"
                    className="service-link"
                  >
                    Discuss Project
                    <span>→</span>
                  </a>

                </article>
              </Reveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}