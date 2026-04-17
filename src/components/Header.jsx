import "../App.css";
import TextType from "../bits/TextType";
import { ArrowRight } from "lucide-react";

const Header = () => {
  return (
    <section
      className="flex justify-center items-center font-poppins bg-slate-50 transition-colors duration-500"
      id="home"
    >
      <div className="h-screen w-full flex flex-col justify-center items-center px-4">
        {/* Headline */}
        <div className="text-5xl md:text-7xl font-bold mb-6 text-center leading-tight">
          Hi, I'm <span className="text-teal-500">Farid</span>
          <br />
          <span className="text-slate-800 text-4xl md:text-5xl">
            <TextType
              text={[
                "Frontend Enthusiast",
                "Problem Solver",
                "Continuous Learner",
              ]}
              speed={100}
              eraseSpeed={50}
            />
          </span>
        </div>
        <a href="#projects" className="group flex gap-2 items-center mt-8 px-8 py-3 bg-teal-500 text-white rounded-full font-semibold hover:bg-teal-600 hover:-translate-y-0.5 transition-all duration-300 shadow-lg shadow-teal-200 text-2xl">
          View My Work
          <ArrowRight
            size={20}
            strokeWidth={2.5}
            className="text-white transition-transform duration-300 group-hover:translate-x-1"
          />
        </a>
      </div>
    </section>
  );
};

export default Header;
