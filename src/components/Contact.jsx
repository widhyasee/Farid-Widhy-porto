import SectionHeading from "./ui/SectionHeading";
import SocialLinks from "./ui/SocialLinks";
import { Mail } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 sm:py-28 bg-slate-50/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="reveal max-w-2xl mx-auto text-center">
          <SectionHeading
            label="Contact"
            title="Get in Touch"
            description="Have a question or want to work together? Feel free to reach out."
            className="items-center"
          />

          <div className="flex justify-center mb-8">
            <SocialLinks variant="default" />
          </div>

          <a
            href="mailto:faridasee8@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3 bg-teal-500 text-white text-sm font-semibold rounded-lg hover:bg-teal-600 transition-all duration-300 hover:-translate-y-0.5 shadow-sm shadow-teal-200"
          >
            <Mail size={16} />
            Send me an email
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
