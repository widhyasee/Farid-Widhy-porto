const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer
      className="bg-slate-900 text-slate-200 mt-10 transition-colors duration-500"
      id="contact"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 border-b border-slate-700 pb-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-white">
              Farid<span className="text-teal-400">.</span>
            </h3>
            <p className="text-sm text-slate-400 mt-1">
              Frontend enthusiast building clean and responsive interfaces.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-5 text-sm">
            {["home", "about", "experiences", "projects", "tech"].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="capitalize hover:text-teal-400 transition-all duration-300 hover:-translate-y-0.5"
              >
                {item}
              </a>
            ))}
          </div>
        </div>

        <div className="pt-5 text-center text-sm text-slate-400">
          <p>Copyright {year} Farid. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;