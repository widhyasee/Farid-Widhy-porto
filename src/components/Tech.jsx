const Tech = () => {
  const stacks = [
    {
      name: "HTML",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      name: "CSS",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
      name: "JavaScript",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "Tailwind CSS",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    },
    {
      name: "Bootstrap",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    },
    {
      name: "MongoDB",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    },
    {
      name: "Express",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    },
    {
      name: "Node.js",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
  ];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-slate-50" id="tech">
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-2xl p-6 sm:p-10 transition-shadow duration-300 hover:shadow-[0_20px_60px_-20px_rgba(15,23,42,0.35)]">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-3">
          Tech Stack
        </h2>
        <p className="text-center text-slate-600 mb-8">
          Tools and technologies I use to build modern web applications.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
          {stacks.map((stack) => (
            <div
              key={stack.name}
              className="group rounded-xl border border-slate-200 bg-white p-4 sm:p-5 flex flex-col items-center justify-center gap-3 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              <img
                src={stack.logo}
                alt={`${stack.name} logo`}
                className="w-12 h-12 sm:w-14 sm:h-14 transition-transform duration-300 group-hover:scale-110"
              />
              <p className="font-semibold text-sm sm:text-base text-slate-800 text-center">
                {stack.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tech;
