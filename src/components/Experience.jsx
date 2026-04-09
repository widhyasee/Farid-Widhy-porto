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
    <section className="w-full py-10 mb-10 px-25 bg-slate-100" id="experiences">
      <div className="mx-20 rounded-2xl p-10 shadow-2xl bg-white">
        <h2 className="text-4xl font-bold mb-6 text-center">My Experience</h2>

        <div className="flex justify-center mb-10">
          <div className="flex flex-row gap-x-8 bg-white rounded-2xl p-4 shadow-lg text-2xl">
            {["work", "organization", "education"].map((item) => (
              <Link
                key={item}
                to={item}
                onClick={() => handleClick(item)}
                className="group capitalize cursor-pointer flex flex-col items-center"
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

        {/* Area Konten Dinamis */}
        <div className="bg-gray-100 p-8 rounded-xl min-h-[300px] mx-12">
          <Routes>
            <Route index element={<Organization />} />
            <Route path="organization" element={<Organization />} />
            <Route path="work" element={<Work />} />
            <Route path="education" element={<Education />} />
          </Routes>
        </div>
      </div>
    </section>
  );
};

export default Experience;
