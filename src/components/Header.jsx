import { Download, Moon, Sun, Menu, X } from "lucide-react";
import { useState } from "react";
import "../styles/header.css";

export default function Header({ theme, toggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: "Services", href: "#services" },
    { label: "Work", href: "#projects" },
    { label: "Process", href: "#process" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="site-header">
      <div className="header-container">
        <a href="#hero" className="brand">
          M. Hasnain <span>  Ali Saeed</span>
        </a>

        <nav className={`main-nav ${menuOpen ? "open" : ""}`}>
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Moon size={18} /> : <Sun size={18} />}
          </button>

          <a
  href="/M.%20Hasnain%20Ali%20Saeed%20Resume.pdf"
  className="resume-button"
  download="M-Hasnain-Ali-Saeed-Resume.pdf"
>
  <Download size={17} />
  <span>Download Resume</span>
</a>

          <button
            className="mobile-menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle mobile menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
    </header>
  );
}