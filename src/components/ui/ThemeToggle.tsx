import { useEffect, useId, useRef, useState } from 'react';
import { Check, ChevronDown, Palette } from 'lucide-react';
import { resolveTheme, themes, themeStorageKey } from '../../Data/themes';
import type { ThemeId } from '../../Data/themes';

export default function ThemeToggle() {
  const [activeTheme, setActiveTheme] = useState(() => resolveTheme(document.documentElement.dataset.theme));
  const [open, setOpen] = useState(false);
  const pickerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const menuId = useId();
  const currentTheme = themes.find(theme => theme.id === activeTheme) ?? themes[0];

  useEffect(() => {
    if (!open) return;
    function handlePointerDown(event: PointerEvent) {
      if (event.target instanceof Node && !pickerRef.current?.contains(event.target)) setOpen(false);
    }
    function handleEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setOpen(false);
        triggerRef.current?.focus();
      }
    }
    document.addEventListener('pointerdown', handlePointerDown);
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('pointerdown', handlePointerDown);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [open]);

  function selectTheme(id: ThemeId) {
    const selected = themes.find(theme => theme.id === id) ?? themes[0];
    document.documentElement.dataset.theme = id;
    document.documentElement.style.colorScheme = selected.mode;
    setActiveTheme(id);
    setOpen(false);
    triggerRef.current?.focus();
    try {
      localStorage.setItem(themeStorageKey, id);
    } catch {
      // Theme selection remains available when browser storage is blocked.
    }
  }

  return (
    <div className="theme-picker" ref={pickerRef} onBlur={event => {
      if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false);
    }}>
      <button
        ref={triggerRef}
        className="theme-toggle"
        type="button"
        onClick={() => setOpen(previous => !previous)}
        aria-expanded={open}
        aria-controls={menuId}
        aria-label={`Cambiar tema. Tema actual: ${currentTheme.name}`}
        title="Cambiar tema"
      >
        <Palette size={15} aria-hidden="true" />
        <span className="theme-current-name">{currentTheme.name}</span>
        <ChevronDown className="theme-chevron" size={13} aria-hidden="true" />
      </button>
      <div className="theme-menu" id={menuId} hidden={!open} aria-label="Temas de color">
        <p className="theme-menu-heading">Elige tu entorno<span>{themes.length} temas</span></p>
        {themes.map(theme => (
          <button
            className="theme-option"
            key={theme.id}
            type="button"
            aria-pressed={activeTheme === theme.id}
            data-selected={activeTheme === theme.id}
            onClick={() => selectTheme(theme.id)}
          >
            <span className="theme-swatches" aria-hidden="true">
              {theme.swatches.map(color => <span key={color} style={{ backgroundColor: color }} />)}
            </span>
            <span className="theme-option-name">{theme.name}<span className="theme-option-mode">{theme.mode === 'light' ? 'Claro' : 'Oscuro'}</span></span>
            {activeTheme === theme.id && <Check className="theme-check" size={15} aria-hidden="true" />}
          </button>
        ))}
      </div>
    </div>
  );
}
