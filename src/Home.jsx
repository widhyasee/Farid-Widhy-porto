import "./App.css";
import TextType from "./bits/TextType";

const Home = () => {
  return (
    <div className="relative isolate px-6 pt-20 lg:px-8">
      <div className="mx-auto max-w-4xl py-24 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          <TextType
            text={["Hi, I’m Farid \n Web Developer & IT Enthusiast"]}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="|"
          />
        </h1>

        <p className="mt-6 text-lg font-semibold leading-8 text-gray-600">
          A fresh graduate in Informatics with a strong passion for building
          modern, responsive, and user-focused web applications using
          JavaScript, React, and backend technologies.
        </p>

        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="#projects"
            className="rounded-md bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow hover:bg-indigo-500 transition"
          >
            HIRE ME
          </a>
          <a
            href="#projects"
            className="rounded-md bg-slate-300 px-6 py-3 text-sm font-semibold text-black shadow transition hover:bg-slate-200"
          >
            GET CV
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
