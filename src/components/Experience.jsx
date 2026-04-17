import { Link, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Organization from "./Oragnization";
import Education from "./Education";
import Work from "./Work";

const Experience = () => {
  const [activeMenu, setActiveMenu] = useState("organization");

  const handleClick = (menuName) => {
    setActiveMenu(menuName);
  };

  return (
    <section className="w-full py-10 mb-10 bg-slate-100" id="experiences">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl p-5 sm:p-8 md:p-10 shadow-2xl bg-white transition-shadow duration-300 hover:shadow-[0_20px_60px_-20px_rgba(15,23,42,0.35)]">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center">
            My Experience
          </h2>

          <div className="flex justify-center mb-8">
            <div className="w-full max-w-2xl grid grid-cols-3 gap-2 sm:gap-4 bg-slate-50 rounded-2xl p-3 shadow-lg text-sm sm:text-base md:text-lg">
              {["work", "organization", "education"].map((item) => (
                <Link
                  key={item}
                  to={item}
                  onClick={() => handleClick(item)}
                  className="group capitalize cursor-pointer flex flex-col items-center rounded-lg py-2 transition-colors duration-300 hover:bg-white"
                >
                  <span
                    className={`transition-colors duration-300 ${
                      activeMenu === item
                        ? "text-teal-600 font-semibold"
                        : "text-gray-500"
                    }`}
                  >
                    {item}
                  </span>

                  <div
                    className={`h-[2px] bg-teal-500 transition-all duration-500 ${
                      activeMenu === item ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              ))}
            </div>
          </div>

          <div className="bg-gray-100 p-4 sm:p-6 md:p-8 rounded-xl min-h-[300px] transition-colors duration-300">
            <Routes>
              <Route index element={<Organization />} />
              <Route path="organization" element={<Organization />} />
              <Route path="work" element={<Work />} />
              <Route path="education" element={<Education />} />
            </Routes>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
