import { useEffect, useState } from "react";
import { ArrowUp, ArrowDown } from "lucide-react";
import "../styles/scroll-controls.css";

const sectionIds = [
  "hero",
  "services",
  "projects",
  "process",
  "about",
  "skills",
  "portfolio",
  "testimonials",
  "faq",
  "contact",
];

export default function ScrollControls() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      if (scrollHeight <= 0) {
        setScrollProgress(0);
        return;
      }

      const progress = (scrollTop / scrollHeight) * 100;

      setScrollProgress(
        Math.min(100, Math.max(0, progress))
      );
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const getCurrentSectionIndex = () => {
    const currentScroll = window.scrollY + window.innerHeight * 0.35;

    let currentIndex = 0;

    sectionIds.forEach((id, index) => {
      const section = document.getElementById(id);

      if (section && section.offsetTop <= currentScroll) {
        currentIndex = index;
      }
    });

    return currentIndex;
  };

  const goToPreviousSection = () => {
    const currentIndex = getCurrentSectionIndex();

    const previousIndex = Math.max(
      currentIndex - 1,
      0
    );

    const target = document.getElementById(
      sectionIds[previousIndex]
    );

    target?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const goToNextSection = () => {
    const currentIndex = getCurrentSectionIndex();

    const nextIndex = Math.min(
      currentIndex + 1,
      sectionIds.length - 1
    );

    const target = document.getElementById(
      sectionIds[nextIndex]
    );

    target?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="scroll-controls">
      <button
        className="scroll-button"
        onClick={goToPreviousSection}
        aria-label="Previous section"
      >
        <ArrowUp size={22} />
      </button>

      <div className="scroll-track">
        <div
          className="scroll-progress"
          style={{
            height: `${scrollProgress}%`,
          }}
        />
      </div>

      <button
        className="scroll-button"
        onClick={goToNextSection}
        aria-label="Next section"
      >
        <ArrowDown size={22} />
      </button>
    </div>
  );
}