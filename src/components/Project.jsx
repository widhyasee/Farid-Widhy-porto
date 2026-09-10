import { ExternalLink, Github } from "lucide-react";
import { projects } from "../data/projects";
import SectionHeading from "./ui/SectionHeading";

const Project = () => {
  return (
    <section id="projects" className="py-20 sm:py-28 bg-slate-50/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="reveal">
          <SectionHeading
            label="Projects"
            title="Selected Work"
            description="A selection of projects I have worked on."
          />

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <article
                key={project.id}
                className="group bg-white border border-slate-100 rounded-xl overflow-hidden transition-all duration-300 hover:border-teal-200 hover:shadow-lg hover:shadow-teal-50"
              >
                {/* Image */}
                <div className="aspect-video overflow-hidden bg-slate-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h3 className="text-xl font-semibold text-slate-900 group-hover:text-teal-600 transition-colors">
                      {project.title}
                    </h3>
                    <span className="text-xs font-medium text-teal-600 bg-teal-50 px-2.5 py-1 rounded-md whitespace-nowrap">
                      {project.role}
                    </span>
                  </div>

                  <p className="text-sm text-slate-500 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-medium text-slate-600 bg-slate-100 px-2.5 py-1 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3 pt-4 border-t border-slate-100">
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-600 hover:text-teal-600 transition-colors"
                      >
                        <ExternalLink size={14} />
                        Live Demo
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-600 hover:text-teal-600 transition-colors"
                      >
                        <Github size={14} />
                        Source Code
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
