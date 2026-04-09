import abatrainingImage from "../assets/img/abatrainingindonesia.png";

const Project = () => {
  const data = [
    {
      id: "1",
      image: abatrainingImage,
      title: "ABATI E-Learning Platform",
      description:
        "ABATI (ABA Training Indonesia) is a comprehensive digital learning platform tailored for therapists working with children with special needs. It integrates structured curriculum delivery, progress tracking, and professional certification workflows into a seamless web experience.",
      tech: ["tailwindcss", "javascript"],
      role: "front-end",
      live: "https://abatrainingindonesia.com/",
      github: "https://github.com/roammm/elearning.git",
    },
  ];
  return (
    <section className="w-full bg-slate-50" id="projects">
      <div className="mx-15 bg-white rounded-xl shadow-2xl p-10">
        <div className="flex justify-center">
          <div className="text-4xl font-bold mb-8">My Project</div>
        </div>
        <div className="grid grid-cols-3 gap-3 mx-10">
          {data.map((item) => (
            <div
              key={item.id}
              className="bg-neutral-primary-soft block max-w-sm p-6 shadow-lg rounded-lg"
            >
              <div href="#">
                <img className="rounded-base" src={item.image} alt="" />
              </div>
              <div href="#">
                <h5 className="mt-6 mb-2 text-2xl font-semibold tracking-tight text-heading">
                  {item.title}
                </h5>
              </div>
              <p className="mb-5 text-body">{item.description}</p>
              <div className="flex flex-row gap-2 font-semibold">
                <a
                  href={item.live}
                  className="rounded-xl p-2 text-white bg-blue-500 text-xs hover:bg-blue-300"
                >
                  Live Now
                </a>
                <a
                  href={item.github}
                  className="rounded-xl p-2 text-white bg-blue-500 text-xs hover:bg-blue-300"
                >
                  Github
                </a>
              </div>
              <div className="flex flex-row">
                <div className="text-sm rounded-full flex gap-3 mt-3">
                  {item.tech.map((name, index) => (
                    <span
                      key={index}
                      className="text-xs font-medium text-slate-600"
                    >
                      •{name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
