import { useState } from "react";
import SectionHeading from "./ui/SectionHeading";
import Timeline from "./ui/Timeline";

const tabs = [
  { key: "work", label: "Work", endpoint: "/data/work.json", dataKey: "work" },
  {
    key: "organization",
    label: "Organizations",
    endpoint: "/data/organization.json",
    dataKey: "organization",
  },
  {
    key: "education",
    label: "Education",
    endpoint: "/data/education.json",
    dataKey: "education",
  },
];

const Experience = () => {
  const [activeTab, setActiveTab] = useState("work");

  const current = tabs.find((tab) => tab.key === activeTab);

  return (
    <section id="experience" className="py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="reveal">
          <SectionHeading
            label="Experience"
            title="My Background"
          />

          {/* Tabs */}
          <div className="flex gap-1 p-1 bg-slate-100 rounded-lg w-fit mb-10">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                type="button"
                onClick={() => setActiveTab(tab.key)}
                className={`px-5 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
                  activeTab === tab.key
                    ? "bg-white text-teal-600 shadow-sm"
                    : "text-slate-500 hover:text-slate-700"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="bg-slate-50/50 border border-slate-100 rounded-xl p-6 sm:p-8">
            <Timeline endpoint={current.endpoint} dataKey={current.dataKey} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
