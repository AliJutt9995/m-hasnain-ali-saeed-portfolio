import {
  ArrowUpRight,
  Code2,
  Globe2,
} from "lucide-react";

import considraCareImg from "../assets/images/considracare saas.webp";
import kickHostImg from "../assets/images/kickhost.webp";
import evonicsoftImg from "../assets/images/evenicsoft.webp";

import "../styles/projects.css";

const projects = [
  {
    title: "ConsidraCare",
    category: "SaaS Platform",
    description:
      "A modern home care agency management platform designed to support agency operations, caregiver management, client care, and business growth.",

    image: considraCareImg,

    role: "Web Development",

    work:
      "Responsive page development, interface implementation, layout refinement, and ongoing website improvements.",

    tech: [
      "SaaS",
      "Responsive UI",
      "Web Development",
    ],

    icon: Code2,

    liveUrl: "https://considracare.com/",
  },

  {
    title: "KickHost",
    category: "Hosting Platform",
    description:
      "A hosting and domain services website focused on clear service presentation, pricing, domain discovery, and a responsive customer experience.",

    image: kickHostImg,

    role: "Website Development",

    work:
      "Responsive website implementation, service page layouts, user interface refinement, and front-end presentation.",

    tech: [
      "Web Development",
      "Responsive Design",
      "Hosting",
    ],

    icon: Globe2,

    liveUrl: "https://kickhost.com/",
  },

  {
    title: "Evonicsoft",
    category: "Business Website",
    description:
      "A professional software agency website presenting digital services, development expertise, portfolio work, and company capabilities.",

    image: evonicsoftImg,

    role: "Web Development",

    work:
      "Website implementation, responsive layouts, visual refinement, content presentation, and front-end improvements.",

    tech: [
      "WordPress",
      "Responsive Design",
      "Web Design",
    ],

    icon: Code2,

    liveUrl: "https://www.evonicsoft.com/",
  },
];

export default function Projects() {
  return (
    <section
      className="projects-section"
      id="projects"
    >
      <div className="projects-container">

        <div className="projects-heading-row">
          <div className="section-heading">
            <span className="section-kicker">
              Selected Work
            </span>

            <h2>
              Real projects built with
              <span> purpose and precision.</span>
            </h2>

            <p>
              A selection of projects where I contributed to
              responsive development, interface implementation,
              usability, and digital presentation.
            </p>
          </div>

          <a
            href="#portfolio"
            className="view-all-projects"
          >
            View All Projects
            <ArrowUpRight size={17} />
          </a>
        </div>

        <div className="projects-grid">

          {projects.map((project) => {
            const Icon = project.icon;

            return (
              <article
                className="project-card"
                key={project.title}
              >

                {/* PROJECT IMAGE */}

                <div className="project-image-wrap">
                  <img
                    src={project.image}
                    alt={`${project.title} website project`}
                    className="project-image"
                    loading="lazy"
                  />

                  <div className="project-overlay">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="project-open-btn"
                      aria-label={`Visit ${project.title}`}
                    >
                      <ArrowUpRight size={19} />
                    </a>
                  </div>

                  <span className="project-category">
                    {project.category}
                  </span>
                </div>


                {/* PROJECT CONTENT */}

                <div className="project-content">

                  <div className="project-title-row">

                    <div className="project-icon">
                      <Icon size={19} />
                    </div>

                    <h3>
                      {project.title}
                    </h3>

                  </div>


                  {/* DESCRIPTION */}

                  <p className="project-description">
                    {project.description}
                  </p>


                  {/* PROJECT DETAILS */}

                  <div className="project-details">

                    <div className="project-detail">
                      <span className="project-detail-label">
                        My Role
                      </span>

                      <strong>
                        {project.role}
                      </strong>
                    </div>


                    <div className="project-detail project-detail-work">
                      <span className="project-detail-label">
                        What I Did
                      </span>

                      <p>
                        {project.work}
                      </p>
                    </div>

                  </div>


                  {/* TECH */}

                  <div className="project-tech-wrapper">

                    <span className="project-detail-label">
                      Tech / Focus
                    </span>

                    <div className="project-tech">
                      {project.tech.map((item) => (
                        <span key={item}>
                          {item}
                        </span>
                      ))}
                    </div>

                  </div>


                  {/* LIVE WEBSITE */}

                  <div className="project-actions">

                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="project-live-link"
                    >
                      Live Website
                      <ArrowUpRight size={16} />
                    </a>

                  </div>

                </div>

              </article>
            );
          })}

        </div>

      </div>
    </section>
  );
}