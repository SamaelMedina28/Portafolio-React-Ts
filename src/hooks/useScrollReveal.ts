import { useEffect } from 'react';

export default function useScrollReveal() {
  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (!('IntersectionObserver' in window)) return;
    const animations = new Set<Animation>();
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        observer.unobserve(entry.target);
        if (preference.matches) return;
        const animation = entry.target.animate(
          [{ opacity: 0, transform: 'translateY(20px)' }, { opacity: 1, transform: 'translateY(0)' }],
          { duration: 650, easing: 'cubic-bezier(0.22, 1, 0.36, 1)' },
        );
        animations.add(animation);
        animation.onfinish = () => animations.delete(animation);
      });
    }, { threshold: 0.08 });
    document.querySelectorAll('.section-intro, .project-case, .about-layout > *, .skills-layout > .section-heading, .skill-groups > div, .contact-layout > *, .footer-top').forEach(element => observer.observe(element));
    const stopAnimations = () => {
      if (preference.matches) {
        animations.forEach(animation => animation.cancel());
        animations.clear();
      }
    };
    preference.addEventListener('change', stopAnimations);
    return () => {
      observer.disconnect();
      animations.forEach(animation => animation.cancel());
      preference.removeEventListener('change', stopAnimations);
    };
  }, []);
}
