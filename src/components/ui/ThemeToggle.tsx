import { useState } from 'react';
import { Moon, Sun } from 'lucide-react';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(() => document.documentElement.dataset.theme === 'dark');

  function toggleTheme() {
    const next = !isDark;
    document.documentElement.dataset.theme = next ? 'dark' : 'light';
    setIsDark(next);
    try {
      localStorage.setItem('devcode-theme', next ? 'dark' : 'light');
    } catch {
      // The toggle still works when browser storage is unavailable.
    }
  }

  const label = isDark ? 'Activar modo claro' : 'Activar modo oscuro';
  return <button className="theme-toggle" type="button" onClick={toggleTheme} aria-label={label} title={label}>
    {isDark ? <Sun key="sun" size={18} /> : <Moon key="moon" size={18} />}
  </button>;
}
