import { useEffect } from "react";
import Nav from "./components/Nav.jsx";
import Header from "./components/Header.jsx";
import About from "./components/About.jsx";
import Experience from "./components/Experience.jsx";
import Project from "./components/Project.jsx";
import Tech from "./components/Tech.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal");
    if (!reveals.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    reveals.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="font-inter">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-teal-600 focus:text-white focus:rounded-lg focus:text-sm focus:font-medium focus:outline-none"
      >
        Skip to content
      </a>
      <Nav />
      <main id="main-content">
        <Header />
        <About />
        <Experience />
        <Project />
        <Tech />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
