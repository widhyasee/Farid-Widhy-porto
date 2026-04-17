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

        <div className="flex justify-center gap-3 sm:gap-4 pt-6">
          <a
            href="https://github.com/widhyasee"
            target="_blank"
            rel="noreferrer"
            className="hover:text-slate-900 hover:bg-teal-300 border border-teal-300 p-3 rounded-2xl transition-all duration-300 hover:-translate-y-0.5"
            aria-label="GitHub"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5-.73 1.02-1.08 2.25-1 3.5 0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
          </a>

          <a
            href="https://www.linkedin.com/in/widhyasee/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-slate-900 hover:bg-teal-300 border border-teal-300 p-3 rounded-2xl transition-all duration-300 hover:-translate-y-0.5"
            aria-label="LinkedIn"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect width="4" height="12" x="2" y="9" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>

          <a
            href="mailto:faridasee8@gmail.com"
            className="hover:text-slate-900 hover:bg-teal-300 border border-teal-300 p-3 rounded-2xl transition-all duration-300 hover:-translate-y-0.5"
            aria-label="Email"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
          </a>
        </div>

        <div className="pt-5 text-center text-sm text-slate-400">
          <p>Copyright {year} Farid. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;