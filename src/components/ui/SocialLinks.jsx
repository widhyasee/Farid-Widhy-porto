import { Github, Linkedin, Mail } from "lucide-react";

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/widhyasee",
    icon: Github,
    external: true,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/widhyasee/",
    icon: Linkedin,
    external: true,
  },
  {
    label: "Email",
    href: "mailto:faridasee8@gmail.com",
    icon: Mail,
    external: false,
  },
];

const SocialLinks = ({ variant = "default", className = "" }) => {
  const baseStyles =
    "inline-flex items-center justify-center p-3 rounded-xl border transition-all duration-300 hover:-translate-y-0.5";

  const variants = {
    default:
      "border-slate-200 text-slate-600 hover:border-teal-300 hover:text-teal-600 hover:bg-teal-50",
    dark: "border-slate-700 text-slate-400 hover:border-teal-400 hover:text-teal-400 hover:bg-teal-900/20",
    minimal:
      "border-transparent text-slate-500 hover:text-teal-600 p-2",
  };

  return (
    <div className={`flex gap-3 ${className}`}>
      {socialLinks.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target={link.external ? "_blank" : undefined}
          rel={link.external ? "noopener noreferrer" : undefined}
          aria-label={link.label}
          className={`${baseStyles} ${variants[variant]}`}
        >
          <link.icon size={20} strokeWidth={1.8} />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
