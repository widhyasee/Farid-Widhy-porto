import { useState, useEffect } from "react";
import SplitText from "../bits/SplitText";
import { Menu, X } from "lucide-react";

const Nav = () => {
  const [hovered, setHover] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navItems = ["Home", "About", "Experiences", "Projects", "Tech"];

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  return (
    <nav
      className={`fixed z-20 top-0 w-full h-20 transition-all duration-300 ${
        scroll ? "backdrop-blur-lg bg-white/70 shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto h-full flex items-center justify-between font-inter px-6">
        {/* Logo */}
        <a
          href="#home"
          className="relative group"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          {/* Container ini menjaga agar ukuran logo tidak goyang saat ganti teks */}
          <div className="h-8 flex items-center">
            {!hovered ? (
              <h1 className="text-xl font-bold tracking-wide">
                Farid<span className="text-teal-500">.</span>
              </h1>
            ) : (
              <SplitText
                text="Farid"
                className="text-xl font-bold"
                delay={60}
                duration={0.5}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 10 }}
                to={{ opacity: 1, y: 0 }}
              />
            )}
          </div>
          <div className="h-[2px] w-0 bg-teal-500 group-hover:w-full transition-all duration-500" />
        </a>

        <ul className="hidden md:flex gap-10 text-lg font-medium items-center scroll-smooth">
          {navItems.map((item) => (
            <li key={item}>
              <a href={`#${item.toLowerCase()}`} className="group capitalize">
                {item}
                <div className="h-[2px] w-0 bg-teal-500 group-hover:w-full transition-all duration-500" />
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="md:hidden p-2 rounded-lg border border-slate-300 bg-white/80 transition-all duration-300 hover:bg-white hover:shadow-md"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
        >
          <span
            className={`block transition-transform duration-300 ${
              menuOpen ? "rotate-90 scale-95" : "rotate-0 scale-100"
            }`}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </span>
        </button>
      </div>

      <div
        className={`md:hidden absolute top-20 left-0 w-full bg-white/95 backdrop-blur-md shadow-xl border-t border-slate-200 origin-top transform transition-all duration-300 ${
          menuOpen
            ? "opacity-100 translate-y-0 scale-y-100 pointer-events-auto"
            : "opacity-0 -translate-y-2 scale-y-95 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col px-6 py-4 text-base font-medium">
          {navItems.map((item, index) => (
            <li
              key={item}
              className={`transition-all duration-300 ${
                menuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-1"
              }`}
              style={{ transitionDelay: `${menuOpen ? index * 40 : 0}ms` }}
            >
              <a
                href={`#${item.toLowerCase()}`}
                className="block py-3 border-b border-slate-100 last:border-b-0 transition-colors duration-300 hover:text-teal-600"
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
