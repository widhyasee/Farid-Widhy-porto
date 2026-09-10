import TextType from "../bits/TextType";
import { ArrowDown } from "lucide-react";

const Header = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-white"
    >
      <div className="max-w-6xl mx-auto px-6 py-24 text-center">
        {/* Eyebrow */}
        <div className="animate-fade-in-up delay-100 mb-6">
          <span className="inline-block px-4 py-1.5 text-xs font-medium tracking-wider uppercase text-teal-700 bg-teal-50 border border-teal-100 rounded-full">
            Frontend Developer
          </span>
        </div>

        {/* Name */}
        <h1 className="animate-fade-in-up delay-200 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-slate-900 tracking-tight leading-none mb-4">
          Hi, I&apos;m{" "}
          <span className="text-teal-500">Farid</span>
        </h1>

        {/* Subtitle */}
        <div className="animate-fade-in-up delay-300 text-xl sm:text-2xl md:text-3xl text-slate-500 font-light mb-10">
          <TextType
            text={[
              "Frontend Enthusiast",
              "Problem Solver",
              "Continuous Learner",
            ]}
            speed={80}
            eraseSpeed={40}
            cursorCharacter="|"
          />
        </div>

        {/* CTA */}
        <div className="animate-fade-in-up delay-400 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-7 py-3 bg-teal-500 text-white text-sm font-semibold rounded-lg hover:bg-teal-600 transition-all duration-300 hover:-translate-y-0.5 shadow-sm shadow-teal-200"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-7 py-3 border border-slate-200 text-slate-700 text-sm font-semibold rounded-lg hover:border-teal-300 hover:text-teal-600 transition-all duration-300"
          >
            Get in Touch
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="animate-fade-in delay-600 mt-16">
          <a
            href="#about"
            aria-label="Scroll to about section"
            className="inline-flex flex-col items-center gap-2 text-slate-400 hover:text-teal-500 transition-colors duration-300"
          >
            <span className="text-xs tracking-wider uppercase">Scroll</span>
            <ArrowDown size={16} className="animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Header;
