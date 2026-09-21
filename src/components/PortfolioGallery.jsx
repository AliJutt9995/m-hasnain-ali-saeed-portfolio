import { useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";

import allmedhelpImg from "../assets/images/allmedhelp.webp";
import bioNablerImg from "../assets/images/bio nabler.webp";
import caremapaiImg from "../assets/images/caremapai.webp";
import considracarePkImg from "../assets/images/considracare pk.webp";
import considracareSaasImg from "../assets/images/considracare saas.webp";
import dfyneImg from "../assets/images/dfyne.webp";
import evonicsoftImg from "../assets/images/evenicsoft.webp";
import everbridgeImg from "../assets/images/everbridge.webp";
import evonicmediaImg from "../assets/images/evonicmedia.webp";
import kickhostImg from "../assets/images/kickhost.webp";
import mashkraftImg from "../assets/images/mashkraft.webp";
import proofhubImg from "../assets/images/proofhub.webp";
import rysgalImg from "../assets/images/rysgal.webp";

import "../styles/gallery.css";

const filters = [
  "All Projects",
  "Healthcare",
  "Business",
  "SaaS",
  "E-commerce",
  "Hosting",
  "ThemeForest",
];

const portfolioItems = [
  {
    title: "ConsidraCare",
    category: "SaaS",
    image: considracareSaasImg,
    tech: ["SaaS", "Healthcare", "Responsive"],
    url: "https://considracare.com/",
  },

  {
    title: "ConsidraCare Pakistan",
    category: "Healthcare",
    image: considracarePkImg,
    tech: ["Healthcare", "WordPress", "Responsive"],
    url: "https://www.considracare.pk/",
  },

  {
    title: "EverBridge Home Care",
    category: "Healthcare",
    image: everbridgeImg,
    tech: ["Home Care", "WordPress", "Responsive"],
    url: "https://everbridgehomecare.ca/",
  },

  {
    title: "CareMapAI",
    category: "SaaS",
    image: caremapaiImg,
    tech: ["AI", "Healthcare", "Web Platform"],
    url: "https://caremapai.com/",
  },

  {
    title: "AllMedHelp",
    category: "Healthcare",
    image: allmedhelpImg,
    tech: ["Healthcare", "Consulting", "Responsive"],
    url: "https://www.allmedhelp.com/",
  },

  {
    title: "Bio-nAbler",
    category: "Business",
    image: bioNablerImg,
    tech: ["Life Sciences", "Business", "Responsive"],
    url: "https://bio-nabler.com/",
  },

  {
    title: "Mashkraft",
    category: "Business",
    image: mashkraftImg,
    tech: ["Technology", "Business", "Responsive"],
    url: "https://www.mashkraft.com/",
  },

  {
    title: "Evonicsoft",
    category: "Business",
    image: evonicsoftImg,
    tech: ["Software", "WordPress", "Responsive"],
    url: "https://www.evonicsoft.com/",
  },

  {
    title: "Evonicmedia",
    category: "Business",
    image: evonicmediaImg,
    tech: ["Web Design", "Themes", "Responsive"],
    url: "https://evonicmedia.com/",
  },

  {
    title: "ThemeForest Commercial Themes",
    category: "ThemeForest",
    image: evonicmediaImg,
    tech: ["ThemeForest", "WordPress", "Commercial Themes"],
    url: "https://themeforest.net/user/evonicmedia/portfolio",
  },

  {
    title: "KickHost",
    category: "Hosting",
    image: kickhostImg,
    tech: ["Hosting", "Domains", "Responsive"],
    url: "https://kickhost.com/",
  },

  {
    title: "ProofHub",
    category: "SaaS",
    image: proofhubImg,
    tech: ["SaaS", "Productivity", "Responsive"],
    url: "https://www.proofhub.com/",
  },

  {
    title: "DFYNE",
    category: "E-commerce",
    image: dfyneImg,
    tech: ["Shopify", "E-commerce", "Responsive"],
    url: "https://dfyne.com/",
  },

  {
    title: "RYSGAL Oilfield Services",
    category: "Business",
    image: rysgalImg,
    tech: ["Oil & Gas", "Corporate", "Responsive"],
    url: "https://www.rysgal.ae/",
  },
];

const ITEMS_PER_PAGE = 6;

export default function PortfolioGallery() {
  const [activeFilter, setActiveFilter] =
    useState("All Projects");

  const [currentPage, setCurrentPage] =
    useState(1);

  const sectionRef = useRef(null);

  const filteredItems = useMemo(() => {
    if (activeFilter === "All Projects") {
      return portfolioItems;
    }

    return portfolioItems.filter(
      (item) => item.category === activeFilter
    );
  }, [activeFilter]);

  const totalPages = Math.ceil(
    filteredItems.length / ITEMS_PER_PAGE
  );

  const startIndex =
    (currentPage - 1) * ITEMS_PER_PAGE;

  const visibleItems = filteredItems.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [activeFilter]);

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) {
      return;
    }

    setCurrentPage(page);

    setTimeout(() => {
      sectionRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 50);
  };

  return (
    <section
      className="gallery-section"
      id="portfolio"
      ref={sectionRef}
    >
      <div className="gallery-container">

        <div className="section-heading gallery-heading">
          <span className="section-kicker">
            Portfolio
          </span>

          <h2>
            A closer look at my
            <span> selected project work.</span>
          </h2>

          <p>
            Explore projects across healthcare, SaaS,
            business websites, e-commerce, hosting,
            and commercial ThemeForest development.
          </p>
        </div>

        <div className="gallery-filters">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              aria-pressed={activeFilter === filter}
              className={
                activeFilter === filter
                  ? "gallery-filter active"
                  : "gallery-filter"
              }
              onClick={() =>
                setActiveFilter(filter)
              }
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="gallery-grid">
          {visibleItems.map((item) => (
            <article
              className="gallery-card"
              key={item.title}
            >

              <div className="gallery-image-wrap">

                <img
                  src={item.image}
                  alt={`${item.title} website project`}
                  loading="lazy"
                />

                {item.url && (
                  <div className="gallery-overlay">
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Open ${item.title}`}
                    >
                      <ArrowUpRight size={20} />
                    </a>
                  </div>
                )}

                <span className="gallery-category">
                  {item.category}
                </span>

              </div>

              <div className="gallery-content">

                <h3>
                  {item.title}
                </h3>

                <div className="gallery-tech">
                  {item.tech.map((tech) => (
                    <span key={tech}>
                      {tech}
                    </span>
                  ))}
                </div>

                {item.url && (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    className="gallery-project-link"
                  >
                    {item.category === "ThemeForest"
                      ? "View ThemeForest Portfolio"
                      : "View Live Project"}

                    <ArrowUpRight size={14} />
                  </a>
                )}

              </div>

            </article>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="gallery-pagination">

            <button
              type="button"
              className="pagination-arrow"
              onClick={() =>
                handlePageChange(currentPage - 1)
              }
              disabled={currentPage === 1}
              aria-label="Previous page"
            >
              <ArrowLeft size={17} />
            </button>

            <div className="pagination-pages">
              {Array.from(
                { length: totalPages },
                (_, index) => index + 1
              ).map((page) => (
                <button
                  key={page}
                  type="button"
                  className={
                    currentPage === page
                      ? "pagination-page active"
                      : "pagination-page"
                  }
                  onClick={() =>
                    handlePageChange(page)
                  }
                  aria-current={
                    currentPage === page
                      ? "page"
                      : undefined
                  }
                >
                  {page}
                </button>
              ))}
            </div>

            <button
              type="button"
              className="pagination-arrow"
              onClick={() =>
                handlePageChange(currentPage + 1)
              }
              disabled={
                currentPage === totalPages
              }
              aria-label="Next page"
            >
              <ArrowRight size={17} />
            </button>

          </div>
        )}

      </div>
    </section>
  );
}