import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SplitText = ({
  text,
  className = "",
  delay = 0.04,
  duration = 0.5,
  ease = "power3.out",
  from = { opacity: 0, y: 12 },
  to = { opacity: 1, y: 0 },
  threshold = 0.1,
  rootMargin = "-40px",
  textAlign = "center",
  tag = "p",
  onLetterAnimationComplete,
}) => {
  const ref = useRef(null);
  const fontsLoadedRef = useRef(document.fonts.status === "loaded");
  const animRef = useRef(null);

  useEffect(() => {
    if (fontsLoadedRef.current) return;

    document.fonts.ready.then(() => {
      fontsLoadedRef.current = true;
    });
  }, []);

  useEffect(() => {
    if (!ref.current || !text) return;
    const el = ref.current;

    const runAnimation = () => {
      const chars = text.split("").map((char) => {
        const span = document.createElement("span");
        span.textContent = char === " " ? "\u00A0" : char;
        span.style.display = "inline-block";
        span.style.willChange = "transform, opacity";
        return span;
      });

      el.innerHTML = "";
      chars.forEach((span) => el.appendChild(span));

      const marginMatch = /^(-?\d+(?:\.\d+)?)(px|em|rem|%)?$/.exec(rootMargin);
      const marginValue = marginMatch ? parseFloat(marginMatch[1]) : 0;
      const marginUnit = marginMatch ? marginMatch[2] || "px" : "px";
      const sign =
        marginValue === 0
          ? ""
          : marginValue < 0
            ? `-=${Math.abs(marginValue)}${marginUnit}`
            : `+=${marginValue}${marginUnit}`;
      const startPct = (1 - threshold) * 100;
      const start = `top ${startPct}%${sign}`;

      animRef.current = gsap.fromTo(
        chars,
        { ...from },
        {
          ...to,
          duration,
          ease,
          stagger: delay,
          scrollTrigger: {
            trigger: el,
            start,
            once: true,
            fastScrollEnd: true,
          },
          onComplete: () => onLetterAnimationComplete?.(),
        }
      );
    };

    if (fontsLoadedRef.current) {
      runAnimation();
    } else {
      document.fonts.ready.then(runAnimation);
    }

    return () => {
      animRef.current?.scrollTrigger?.kill();
      animRef.current?.kill();
      animRef.current = null;
    };
  }, [
    text,
    delay,
    duration,
    ease,
    from,
    to,
    threshold,
    rootMargin,
    onLetterAnimationComplete,
  ]);

  const style = {
    textAlign,
    wordWrap: "break-word",
    willChange: "transform, opacity",
  };
  const classes = `split-parent overflow-hidden ${className}`;
  const Tag = tag;

  return (
    <Tag ref={ref} style={style} className={classes}>
      {text}
    </Tag>
  );
};

export default SplitText;
