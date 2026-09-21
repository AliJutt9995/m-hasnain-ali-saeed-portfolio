import { useState } from "react";
import { ChevronDown } from "lucide-react";
import "../styles/faq.css";

const faqs = [
  {
    question: "Do you build fully responsive websites?",
    answer:
      "Yes. Every website is designed and developed to work properly across desktop, laptop, tablet, and mobile devices.",
  },
  {
    question: "Can you build both React and WordPress websites?",
    answer:
      "Yes. I work with React.js for modern front-end development and WordPress with Elementor or WooCommerce for flexible business websites.",
  },
  {
    question: "Do you provide landing page development?",
    answer:
      "Yes. I build conversion-focused landing pages for services, campaigns, lead generation, and product launches.",
  },
  {
    question: "Can you optimize an existing website?",
    answer:
      "Yes. I can improve layout, responsiveness, performance, usability, loading speed, and general front-end quality.",
  },
  {
    question: "Do you provide website maintenance?",
    answer:
      "Yes. I can support ongoing updates, fixes, content changes, responsive improvements, and general website maintenance.",
  },
  {
    question: "How do we start a project?",
    answer:
      "We start with your requirements, goals, references, timeline, and technical needs. After that, I define the project structure and development approach.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section" id="faq">
      <div className="faq-container">
        <div className="section-heading faq-heading">
          <span className="section-kicker">FAQ</span>

          <h2>
            Questions you may have
            <span> before we start.</span>
          </h2>

          <p>
            Quick answers about development, responsiveness, maintenance, and
            working together.
          </p>
        </div>

        <div className="faq-list">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;

            return (
              <article
                className={`faq-item ${isOpen ? "active" : ""}`}
                key={faq.question}
              >
                <button
                  className="faq-question"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>

                  <div className="faq-chevron">
                    <ChevronDown size={19} />
                  </div>
                </button>

                <div className="faq-answer-wrapper">
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
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