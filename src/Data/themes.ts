export const themes = [
  {
    id: 'ethereal',
    name: 'Ethereal',
    mode: 'dark',
    swatches: ['#060b1e', '#7d82d9', '#c2c4f0', '#c89dc1'],
  },
  {
    id: 'tokyo-night',
    name: 'Tokyo Night',
    mode: 'dark',
    swatches: ['#1a1b26', '#7aa2f7', '#bb9af7', '#9ece6a'],
  },
  {
    id: 'osaka-jade',
    name: 'Osaka Jade',
    mode: 'dark',
    swatches: ['#111c18', '#80b5a3', '#e5c736', '#afd898'],
  },
  {
    id: 'gruvbox',
    name: 'Gruvbox',
    mode: 'dark',
    swatches: ['#282828', '#7daea3', '#d8a657', '#ea6962'],
  },
  {
    id: 'flexoki-light',
    name: 'Flexoki Light',
    mode: 'light',
    swatches: ['#fffcf0', '#205ea6', '#24837b', '#ad8301'],
  },
] as const;

export type ThemeId = (typeof themes)[number]['id'];
export const themeStorageKey = 'devcode-omarchy-theme-v2';

export function resolveTheme(value: string | undefined | null): ThemeId {
  if (value === 'light') return 'flexoki-light';
  if (value === 'dark') return 'tokyo-night';
  return themes.find(theme => theme.id === value)?.id ?? 'ethereal';
}
