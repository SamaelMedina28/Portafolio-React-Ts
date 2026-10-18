import { useEffect, useRef, useState } from 'react';

const glyphs = '!<>-_\\/[]{}=+*^?#01';

// Decodifica el texto carácter por carácter la primera vez que entra en pantalla.
export default function ScrambleText({ text }: { text: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(text);

  useEffect(() => {
    const element = ref.current;
    if (!element || !('IntersectionObserver' in window)) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let frame = 0;
    let raf = 0;
    const run = () => {
      setDisplay([...text].map((char, i) => char === ' ' || i < frame ? char : glyphs[Math.floor(Math.random() * glyphs.length)]).join(''));
      if (frame++ < text.length) raf = requestAnimationFrame(run);
      else setDisplay(text);
    };
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      run();
    }, { threshold: 0.6 });
    observer.observe(element);
    return () => { observer.disconnect(); cancelAnimationFrame(raf); };
  }, [text]);

  return <span ref={ref}><span className="sr-only">{text}</span><span aria-hidden="true">{display}</span></span>;
}
