import { useEffect, useMemo, useState } from "react";
import Header from "./components/Header.jsx";
import AboutSection from "./components/AboutSection.jsx";
import ProjectsSection from "./components/ProjectsSection.jsx";
import ContactSection from "./components/ContactSection.jsx";
import Footer from "./components/Footer.jsx";
import projects from "./data/projects.js";

const getInitialTheme = () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark" || savedTheme === "light") {
    return savedTheme;
  }
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  return prefersDark ? "dark" : "light";
};

function App() {
  const [theme, setTheme] = useState(getInitialTheme);
  const isDark = theme === "dark";

  useEffect(() => {
    document.body.classList.toggle("dark", isDark);
    localStorage.setItem("theme", theme);
  }, [theme, isDark]);

  const handleToggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const projectList = useMemo(() => projects, []);

  return (
    <>
      <Header isDark={isDark} onToggleTheme={handleToggleTheme} />
      <main>
        <AboutSection />
        <ProjectsSection projects={projectList} />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

export default App;
