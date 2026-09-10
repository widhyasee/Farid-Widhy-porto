const SectionHeading = ({ label, title, description, className = "" }) => {
  return (
    <div className={`mb-12 ${className}`}>
      {label && (
        <span className="text-teal-600 text-sm font-semibold uppercase tracking-widest mb-3 block">
          {label}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-slate-500 text-lg max-w-2xl">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
