import personImage from "../assets/img/creator.png";
import SocialLinks from "./ui/SocialLinks";
import { Download } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 sm:py-28 bg-slate-50/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="reveal flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Image */}
          <div className="lg:w-5/12 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-2xl overflow-hidden border border-slate-100">
                <img
                  src={personImage}
                  alt="Farid Widhy Asee"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-3 -right-3 w-24 h-24 bg-teal-50 border border-teal-100 rounded-2xl -z-10" />
            </div>
          </div>

          {/* Content */}
          <div className="lg:w-7/12 text-center lg:text-left">
            <span className="text-teal-600 text-sm font-semibold uppercase tracking-widest mb-3 block">
              About Me
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-6">
              Building for the web, one project at a time
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6 max-w-xl lg:max-w-none mx-auto lg:mx-0">
              I am a fresh graduate in Informatics from UPN Veteran Jakarta,
              driven by an entrepreneurial mindset and a passion for creative
              problem-solving. With a strong interest in technology, I am
              particularly focused on software development, web development,
              and game development. I thrive on tackling complex challenges
              and enjoy creating innovative solutions through technology.
            </p>

            <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4 mb-8">
              <SocialLinks />
              <a
                href="/document/CV_Farid Widhy Asee (2025).pdf"
                download="CV_Farid_Widhy_Asee.pdf"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-slate-200 text-slate-700 text-sm font-medium rounded-lg hover:border-teal-300 hover:text-teal-600 transition-all duration-300"
              >
                <Download size={16} />
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
