import SocialLinks from "./ui/SocialLinks";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-400">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8 pb-8 border-b border-slate-800">
          {/* Brand */}
          <div className="text-center md:text-left">
            <a href="#home" className="text-xl font-bold text-white tracking-tight">
              Farid<span className="text-teal-400">.</span>
            </a>
            <p className="text-sm text-slate-500 mt-1">
              Frontend Developer
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm hover:text-teal-400 transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <SocialLinks variant="dark" />
          <p className="text-sm text-slate-600">
            &copy; {year} Farid Widhy Asee. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
