import {
  Search,
  ClipboardList,
  PenTool,
  Code2,
  Bug,
  Rocket,
} from "lucide-react";

import "../styles/process.css";

const processSteps = [
  {
    number: "01",
    icon: Search,
    title: "Discovery",
    description:
      "I understand your goals, audience, project requirements, and the problems the website needs to solve.",
  },
  {
    number: "02",
    icon: ClipboardList,
    title: "Planning",
    description:
      "I define the structure, content flow, features, technical direction, and responsive behavior before development starts.",
  },
  {
    number: "03",
    icon: PenTool,
    title: "Design",
    description:
      "I create a clean visual direction with strong hierarchy, modern spacing, and user-friendly interactions.",
  },
  {
    number: "04",
    icon: Code2,
    title: "Development",
    description:
      "The approved direction is developed using reusable components, clean code, and performance-focused practices.",
  },
  {
    number: "05",
    icon: Bug,
    title: "Testing",
    description:
      "I test responsiveness, interactions, performance, browser compatibility, and usability across key devices.",
  },
  {
    number: "06",
    icon: Rocket,
    title: "Launch",
    description:
      "After final review, the project is prepared for deployment and launch with a polished production-ready experience.",
  },
];

export default function Process() {
  return (
    <section className="process-section" id="process">
      <div className="process-container">
        <div className="section-heading process-heading">
          <span className="section-kicker">How I Work</span>

          <h2>
            A structured process from
            <span> idea to launch.</span>
          </h2>

          <p>
            Every project follows a clear development process to keep design,
            functionality, and delivery aligned from the beginning.
          </p>
        </div>

        <div className="process-timeline">
          

          {processSteps.map((step) => {
            const Icon = step.icon;

            return (
              <article className="process-step" key={step.number}>
                <div className="process-step-top">
                  <div className="process-number">
                    {step.number}
                  </div>

                  <div className="process-icon">
                    <Icon size={23} strokeWidth={1.8} />
                  </div>
                </div>

                <h3>{step.title}</h3>

                <p>{step.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}