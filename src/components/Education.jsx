import { useState, useEffect } from "react";
import { OrbitProgress } from "react-loading-indicators";

const Education = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data/education.json")
      .then((res) => {
        if (!res.ok) throw new Error("Gagal load data");
        return res.json();
      })
      .then((json) => {
        setData(json.education);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);

  if (loading)
    return (
      <div className="flex justify-center">
        <OrbitProgress
          dense
          color="#32cd32"
          size="medium"
          text="loading"
          textColor=""
        />
      </div>
    );

  return (
    <div className="space-y-10">
      {data.map((item) => (
        <div key={item.id} className="relative pl-8 border-l-2 border-teal-500">
          <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-teal-500" />

          <div className="flex flex-col md:flex-row md:justify-between mb-2">
            <div>
              <h3 className="text-2xl font-bold text-gray-800">{item.title}</h3>
              <p className="text-teal-600 font-semibold">
                {item.company} · {item.employment}
              </p>
            </div>

            <div className="text-gray-500 italic mt-1 md:mt-0">
              {item.stardate[0].month} {item.stardate[0].year} -
              {item.enddate[0].month} {item.enddate[0].year}
            </div>
          </div>

          <p className="text-gray-600 leading-relaxed">{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Education;
