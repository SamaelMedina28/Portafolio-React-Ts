import { useEffect } from 'react';

// Solo los títulos y las tarjetas de proyecto aparecen; la experiencia únicamente dibuja su línea de tiempo.
const SELECTOR = '.section-intro, :not(.section-intro) > .section-heading, .project-case';
const TRACKED = '.experience-entry';
const DURATION = 500;

export default function useScrollReveal() {
  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (preference.matches || !('IntersectionObserver' in window)) return;
    const elements = [...document.querySelectorAll<HTMLElement>(SELECTOR)];
    const tracked = [...document.querySelectorAll<HTMLElement>(TRACKED)];
    const timers = new Set<number>();

    // Los elementos hermanos aparecen en cascada.
    elements.forEach(element => {
      const siblings = element.parentElement ? [...element.parentElement.children].filter(child => elements.includes(child as HTMLElement)) : [];
      element.style.setProperty('--reveal-delay', `${Math.min(Math.max(siblings.indexOf(element), 0), 4) * 60}ms`);
      element.classList.add('reveal');
    });

    const finish = (element: HTMLElement) => {
      element.classList.add('is-revealed', 'in-view');
      const delay = parseInt(element.style.getPropertyValue('--reveal-delay')) || 0;
      // Al terminar se quitan las clases para que las transiciones de hover no hereden el retraso.
      const timer = window.setTimeout(() => {
        element.classList.remove('reveal', 'is-revealed');
        element.style.removeProperty('--reveal-delay');
        timers.delete(timer);
      }, DURATION + delay);
      timers.add(timer);
    };

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        observer.unobserve(entry.target);
        if (entry.target.classList.contains('reveal')) finish(entry.target as HTMLElement);
        else entry.target.classList.add('in-view');
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
    [...elements, ...tracked].forEach(element => observer.observe(element));

    const showAll = () => { if (preference.matches) elements.forEach(finish); };
    preference.addEventListener('change', showAll);
    return () => {
      observer.disconnect();
      timers.forEach(timer => window.clearTimeout(timer));
      preference.removeEventListener('change', showAll);
      elements.forEach(element => element.classList.remove('reveal', 'is-revealed'));
    };
  }, []);
}
