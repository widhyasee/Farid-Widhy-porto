import { useState, useEffect } from "react";
import SplitText from "../bits/SplitText";

const Nav = () => {
  const [hovered, setHover] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed z-10 top-0 w-full h-20 transition-all duration-300 ${
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

        {/* Menu */}
        <ul className="flex gap-10 text-lg font-medium items-center">
          {["Home", "About", "Education", "Experiences", "Projects"].map(
            (item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase()}`} className="group capitalize">
                  {item}
                  <div className="h-[2px] w-0 bg-teal-500 group-hover:w-full transition-all duration-500" />
                </a>
              </li>
            ),
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
