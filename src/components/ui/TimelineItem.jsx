const TimelineItem = ({ title, subtitle, date, description }) => {
  return (
    <div className="relative pl-8 pb-8 last:pb-0 group">
      <div className="absolute left-0 top-1.5 w-3 h-3 rounded-full bg-teal-500 ring-4 ring-white transition-transform duration-300 group-hover:scale-125" />

      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 mb-2">
        <div>
          <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
          <p className="text-sm text-teal-600 font-medium">
            {subtitle}
          </p>
        </div>
        <span className="text-sm text-slate-400 italic whitespace-nowrap">
          {date}
        </span>
      </div>

      <p className="text-sm text-slate-600 leading-relaxed">{description}</p>
    </div>
  );
};

export default TimelineItem;
