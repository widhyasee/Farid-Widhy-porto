import { useState, useEffect } from "react";
import TimelineItem from "./TimelineItem";

const Timeline = ({ endpoint, dataKey }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    fetch(endpoint)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load data");
        return res.json();
      })
      .then((json) => {
        if (!cancelled) {
          setData(json[dataKey]);
          setLoading(false);
        }
      })
      .catch((err) => {
        if (!cancelled) {
          setError(err.message);
          setLoading(false);
        }
      });

    return () => {
      cancelled = true;
    };
  }, [endpoint, dataKey]);

  if (loading) {
    return (
      <div className="flex justify-center py-12">
        <div className="w-6 h-6 border-2 border-teal-500 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (error) {
    return (
      <p className="text-center text-slate-400 py-8 text-sm">
        Unable to load data.
      </p>
    );
  }

  return (
    <div className="space-y-0">
      <div className="border-l-2 border-slate-200">
        {data.map((item) => (
          <TimelineItem
            key={item.id}
            title={item.title}
            subtitle={`${item.company} · ${item.employment}`}
            date={`${item.stardate[0].month} ${item.stardate[0].year} — ${item.enddate[0].month} ${item.enddate[0].year}`}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Timeline;
