import { useEffect, useState } from "react";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Process from "./components/Process";
import About from "./components/About";
import Skills from "./components/Skills";
import PortfolioGallery from "./components/PortfolioGallery";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollControls from "./components/ScrollControls";
import PortfolioChatbot from "./components/PortfolioChatbot";

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("portfolio-theme") || "dark";
  });

  const toggleTheme = () => {
    setTheme((currentTheme) =>
      currentTheme === "dark" ? "light" : "dark"
    );
  };

  useEffect(() => {
    localStorage.setItem("portfolio-theme", theme);

    document.documentElement.style.colorScheme =
      theme === "dark" ? "dark" : "light";
  }, [theme]);

  return (
    <div className={`app ${theme}`}>
      <Header
        theme={theme}
        toggleTheme={toggleTheme}
      />

      <main>
        <Hero />
        <Stats />
        <Services />
        <Projects />
        <Process />
        <About />
        <Skills />
        <PortfolioGallery />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>

      <Footer />
      <ScrollControls />
      <PortfolioChatbot />
    </div>
  );
}

export default App;