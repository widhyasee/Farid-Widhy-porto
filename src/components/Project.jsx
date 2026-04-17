import abatrainingImage from "../assets/img/abatrainingindonesia.png";
import foodWebsite from "../assets/img/food-website.png";

const Project = () => {
  const data = [
    {
      id: "1",
      image: abatrainingImage,
      title: "ABATI E-Learning Platform",
      description:
        "ABATI (ABA Training Indonesia) is a comprehensive digital learning platform tailored for therapists working with children with special needs...",
      tech: ["tailwindcss", "javascript"],
      role: "front-end",
      live: "https://abatrainingindonesia.com/",
      github: "https://github.com/roammm/elearning.git",
    },
    {
      id: "2",
      image: foodWebsite,
      title: "Warung Para Kabita",
      description:
        "This project was developed as a practical assignment for the Web Development course. The goal was to build a functional restaurant website...",
      tech: ["css", "php"],
      role: "front-end",
      github: "https://github.com/widhyasee/food-website.git",
    },
  ];

  return (
    <section className="w-ful py-10" id="projects">
      <div className="mx-4 md:mx-15 bg-white rounded-xl shadow-2xl p-6 md:p-10">
        <div className="flex justify-center">
          <h2 className="text-4xl font-bold mb-8">My Project</h2>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {data.map((item) => (
            <div
              key={item.id}
              className="bg-neutral-primary-soft flex flex-col w-full max-w-sm p-6 shadow-lg rounded-lg border border-slate-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="overflow-hidden rounded-lg">
                <img
                  className="hover:scale-105 transition-transform duration-300"
                  src={item.image}
                  alt={item.title}
                />
              </div>

              <h5 className="mt-6 mb-2 text-2xl font-semibold tracking-tight text-heading">
                {item.title}
              </h5>

              <p className="mb-5 text-body text-sm flex-grow">
                {item.description}
              </p>

              <div className="flex flex-row gap-2 font-semibold mb-4">
                {item.live && (
                  <a
                    href={item.live}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-xl p-2 text-white bg-blue-500 text-xs hover:bg-blue-600 transition-all duration-300 hover:-translate-y-0.5"
                  >
                    Live Now
                  </a>
                )}
                {item.github && (
                  <a
                    href={item.github}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-xl p-2 text-white bg-slate-700 text-xs hover:bg-slate-900 transition-all duration-300 hover:-translate-y-0.5"
                  >
                    Github
                  </a>
                )}
              </div>

              <div className="flex flex-wrap gap-3 mt-auto border-t pt-4">
                {item.tech.map((name, index) => (
                  <span
                    key={index}
                    className="text-[10px] uppercase tracking-wider font-bold text-slate-500"
                  >
                    • {name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
