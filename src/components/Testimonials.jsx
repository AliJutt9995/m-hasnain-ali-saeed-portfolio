import {
  MessageSquareQuote,
  Smartphone,
  Gauge,
  Users,
} from "lucide-react";

import "../styles/testimonials.css";

const feedback = [
  {
    title: "Clear Communication",
    text:
      "I keep project requirements, progress, and revisions clear throughout the development process so there are no unnecessary surprises.",
    icon: Users,
  },
  {
    title: "Responsive Execution",
    text:
      "Every website is built with desktop, tablet, and mobile usability in mind, with careful attention to layout and interaction details.",
    icon: Smartphone,
  },
  {
    title: "Performance Focused",
    text:
      "I focus on clean implementation, practical performance improvements, and reliable delivery across WordPress and modern web projects.",
    icon: Gauge,
  },
];

export default function Testimonials() {
  return (
    <section
      className="testimonials-section"
      id="testimonials"
    >
      <div className="testimonials-container">

        <div className="section-heading testimonials-heading">
          <span className="section-kicker">
            Working With Me
          </span>

          <h2>
            A development process built around
            <span> clarity and quality.</span>
          </h2>

          <p>
            From communication to responsive implementation,
            I focus on creating a smooth project experience
            and dependable final result.
          </p>
        </div>

        <div className="testimonials-grid">
          {feedback.map((item) => {
            const Icon = item.icon;

            return (
              <article
                className="testimonial-card"
                key={item.title}
              >
                <div className="testimonial-top">

                  <div className="quote-icon">
                    <Icon size={22} />
                  </div>

                  <MessageSquareQuote
                    size={20}
                    className="testimonial-decor-icon"
                  />

                </div>

                <p className="testimonial-review">
                  {item.text}
                </p>

                <div className="testimonial-person">

                  <div className="testimonial-avatar">
                    <Icon size={20} />
                  </div>

                  <div>
                    <h3>{item.title}</h3>
                    <span>
                      My approach to client projects
                    </span>
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