import {
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import {
  Code2,
  FileCode2,
  Braces,
  Palette,
  Globe2,
  PanelsTopLeft,
  ShoppingBag,
  GitBranch,
  Box,
  Layers3,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import "../styles/skills.css";

const skills = [
  {
    name: "MCP",
    icon: Braces,
    status: "Model Context Protocol",
  },
  {
    name: "AI Automation",
    icon: Layers3,
    status: "AI Workflows & Automation",
  },
  {
    name: "OpenAI Codex",
    icon: Code2,
    status: "AI-Assisted Development",
  },
  {
    name: "Claude AI",
    icon: Box,
    status: "AI Development & Workflows",
  },

  {
    name: "React.js",
    icon: Code2,
    status: "Front-End Development",
  },
  {
    name: "JavaScript",
    icon: Braces,
    status: "Web Development",
  },
  {
    name: "TypeScript",
    icon: FileCode2,
    status: "Typed Development",
  },
  {
    name: "HTML5",
    icon: Globe2,
    status: "Semantic Markup",
  },
  {
    name: "CSS3",
    icon: Palette,
    status: "Responsive Styling",
  },
  {
    name: "Tailwind CSS",
    icon: Layers3,
    status: "Utility-First Styling",
  },

  {
    name: "WordPress",
    icon: PanelsTopLeft,
    status: "Website Development",
  },
  {
    name: "ThemeForest Development",
    icon: PanelsTopLeft,
    status: "Commercial WordPress Themes",
  },
  {
    name: "Shopify",
    icon: Box,
    status: "E-Commerce Development",
  },
  {
    name: "WooCommerce",
    icon: ShoppingBag,
    status: "WordPress E-Commerce",
  },

  {
    name: "Git",
    icon: GitBranch,
    status: "Version Control",
  },
  {
    name: "GitHub",
    icon: Code2,
    status: "Code & Collaboration",
  },
  {
    name: "Figma",
    icon: Palette,
    status: "UI/UX Collaboration",
  },
];

const GAP = 16;

function getVisibleColumns() {
  if (typeof window === "undefined") {
    return 4;
  }

  if (window.innerWidth <= 480) {
    return 1;
  }

  if (window.innerWidth <= 750) {
    return 2;
  }

  if (window.innerWidth <= 1000) {
    return 3;
  }

  return 4;
}

export default function Skills() {
  const viewportRef = useRef(null);

  const dragStartX = useRef(0);
  const dragOffsetRef = useRef(0);

  const [currentSlide, setCurrentSlide] =
    useState(0);

  const [visibleColumns, setVisibleColumns] =
    useState(getVisibleColumns);

  const [columnWidth, setColumnWidth] =
    useState(0);

  const [isPaused, setIsPaused] =
    useState(false);

  const [isDragging, setIsDragging] =
    useState(false);

  const [dragOffset, setDragOffset] =
    useState(0);

  /* =========================================
     2 SKILLS PER COLUMN
  ========================================= */

  const skillColumns = useMemo(() => {
    const columns = [];

    for (
      let index = 0;
      index < skills.length;
      index += 2
    ) {
      columns.push(
        skills.slice(index, index + 2)
      );
    }

    return columns;
  }, []);

  const maxSlide = Math.max(
    0,
    skillColumns.length - visibleColumns
  );

  /* =========================================
     RESPONSIVE WIDTH
  ========================================= */

  useEffect(() => {
    const updateCarousel = () => {
      const columns = getVisibleColumns();

      setVisibleColumns(columns);

      if (!viewportRef.current) {
        return;
      }

      const viewportWidth =
        viewportRef.current.clientWidth;

      const width =
        (viewportWidth -
          GAP * (columns - 1)) /
        columns;

      setColumnWidth(width);
    };

    updateCarousel();

    window.addEventListener(
      "resize",
      updateCarousel
    );

    const observer = new ResizeObserver(
      updateCarousel
    );

    if (viewportRef.current) {
      observer.observe(
        viewportRef.current
      );
    }

    return () => {
      window.removeEventListener(
        "resize",
        updateCarousel
      );

      observer.disconnect();
    };
  }, []);

  /* =========================================
     VALID SLIDE AFTER RESIZE
  ========================================= */

  useEffect(() => {
    if (currentSlide > maxSlide) {
      setCurrentSlide(maxSlide);
    }
  }, [currentSlide, maxSlide]);

  /* =========================================
     NEXT / PREVIOUS
  ========================================= */

  const goToNext = () => {
    setCurrentSlide((previous) =>
      previous >= maxSlide
        ? 0
        : previous + 1
    );
  };

  const goToPrevious = () => {
    setCurrentSlide((previous) =>
      previous <= 0
        ? maxSlide
        : previous - 1
    );
  };

  /* =========================================
     AUTOPLAY
  ========================================= */

  useEffect(() => {
    if (
      isPaused ||
      isDragging ||
      maxSlide === 0
    ) {
      return undefined;
    }

    const interval = setInterval(() => {
      setCurrentSlide((previous) =>
        previous >= maxSlide
          ? 0
          : previous + 1
      );
    }, 3500);

    return () => {
      clearInterval(interval);
    };
  }, [
    isPaused,
    isDragging,
    maxSlide,
  ]);

  /* =========================================
     MOUSE DRAG + TOUCH SWIPE
  ========================================= */

  const handlePointerDown = (event) => {
    if (
      event.pointerType === "mouse" &&
      event.button !== 0
    ) {
      return;
    }

    dragStartX.current = event.clientX;
    dragOffsetRef.current = 0;

    setDragOffset(0);
    setIsDragging(true);
    setIsPaused(true);

    event.currentTarget.setPointerCapture?.(
      event.pointerId
    );
  };

  const handlePointerMove = (event) => {
    if (!isDragging) {
      return;
    }

    let distance =
      event.clientX -
      dragStartX.current;

    /*
      Resistance at first / last slide
    */

    if (
      currentSlide === 0 &&
      distance > 0
    ) {
      distance *= 0.35;
    }

    if (
      currentSlide === maxSlide &&
      distance < 0
    ) {
      distance *= 0.35;
    }

    dragOffsetRef.current = distance;
    setDragOffset(distance);
  };

  const handlePointerEnd = (event) => {
    if (!isDragging) {
      return;
    }

    const finalOffset =
      dragOffsetRef.current;

    const threshold = Math.min(
      70,
      Math.max(40, columnWidth * 0.18)
    );

    /*
      Drag left → next
    */

    if (
      finalOffset < -threshold &&
      currentSlide < maxSlide
    ) {
      setCurrentSlide(
        (previous) => previous + 1
      );
    }

    /*
      Drag right → previous
    */

    if (
      finalOffset > threshold &&
      currentSlide > 0
    ) {
      setCurrentSlide(
        (previous) => previous - 1
      );
    }

    dragOffsetRef.current = 0;

    setDragOffset(0);
    setIsDragging(false);
    setIsPaused(false);

    try {
      event.currentTarget.releasePointerCapture?.(
        event.pointerId
      );
    } catch {
      // Pointer already released
    }
  };

  /* =========================================
     POSITION
  ========================================= */

  const slideDistance =
    currentSlide *
    (columnWidth + GAP);

  const translateX =
    -slideDistance + dragOffset;

  return (
    <section
      className="skills-section"
      id="skills"
    >
      <div className="skills-container">

        <div className="section-heading skills-heading">
          <span className="section-kicker">
            Skills & Experience
          </span>

          <h2>
            Tools and technologies I use to
            <span>
              {" "}
              build, automate, and scale.
            </span>
          </h2>

          <p>
            My experience combines AI automation,
            modern web development, commercial
            ThemeForest projects, WordPress,
            e-commerce, version control, and UI
            collaboration.
          </p>
        </div>

        <div
          className="skills-carousel"
          onMouseEnter={() =>
            setIsPaused(true)
          }
          onMouseLeave={() => {
            if (!isDragging) {
              setIsPaused(false);
            }
          }}
        >

          {/* =========================
              CARDS
          ========================= */}

          <div
            ref={viewportRef}
            className={
              isDragging
                ? "skills-carousel-viewport dragging"
                : "skills-carousel-viewport"
            }
            onPointerDown={
              handlePointerDown
            }
            onPointerMove={
              handlePointerMove
            }
            onPointerUp={
              handlePointerEnd
            }
            onPointerCancel={
              handlePointerEnd
            }
          >
            <div
              className={
                isDragging
                  ? "skills-track dragging"
                  : "skills-track"
              }
              style={{
                transform: `translate3d(${translateX}px, 0, 0)`,
              }}
            >
              {skillColumns.map(
                (column, columnIndex) => (
                  <div
                    className="skills-column"
                    key={`skills-column-${columnIndex}`}
                    style={
                      columnWidth
                        ? {
                            width: `${columnWidth}px`,
                          }
                        : undefined
                    }
                  >
                    {column.map((skill) => {
                      const Icon =
                        skill.icon;

                      return (
                        <article
                          className="skill-card"
                          key={skill.name}
                        >
                          <div className="skill-icon">
                            <Icon
                              size={24}
                              strokeWidth={1.8}
                            />
                          </div>

                          <h3>
                            {skill.name}
                          </h3>

                          <span className="skill-status">
                            {skill.status}
                          </span>
                        </article>
                      );
                    })}
                  </div>
                )
              )}
            </div>
          </div>

          {/* =========================
              ARROWS + DOTS
          ========================= */}

          {maxSlide > 0 && (
            <div className="skills-navigation">

              <button
                type="button"
                className="skills-arrow"
                onClick={goToPrevious}
                aria-label="Previous skills"
              >
                <ChevronLeft size={18} />
              </button>

              <div className="skills-dots">
                {Array.from(
                  {
                    length:
                      maxSlide + 1,
                  },
                  (_, index) => (
                    <button
                      key={index}
                      type="button"
                      className={
                        currentSlide ===
                        index
                          ? "skills-dot active"
                          : "skills-dot"
                      }
                      aria-label={`Go to skills slide ${
                        index + 1
                      }`}
                      onClick={() =>
                        setCurrentSlide(
                          index
                        )
                      }
                    />
                  )
                )}
              </div>

              <button
                type="button"
                className="skills-arrow"
                onClick={goToNext}
                aria-label="Next skills"
              >
                <ChevronRight size={18} />
              </button>

            </div>
          )}

        </div>

      </div>
    </section>
  );
}