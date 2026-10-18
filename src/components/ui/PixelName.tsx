import type { CSSProperties } from 'react';

const letters: Record<string, string[]> = {
  S: ['01111', '11000', '11000', '01110', '00011', '00011', '11110'],
  A: ['01110', '11011', '11011', '11111', '11011', '11011', '11011'],
  M: ['11011', '11111', '11111', '11011', '11011', '11011', '11011'],
  E: ['11111', '11000', '11000', '11110', '11000', '11000', '11111'],
  L: ['11000', '11000', '11000', '11000', '11000', '11000', '11111'],
  D: ['11110', '11011', '11011', '11011', '11011', '11011', '11110'],
  I: ['11111', '00100', '00100', '00100', '00100', '00100', '11111'],
  N: ['11001', '11101', '11101', '11011', '11011', '11001', '11001'],
};

export default function PixelName() {
  return <svg viewBox="0 0 35 16" aria-hidden="true" className="pixel-name" shapeRendering="crispEdges">
    {['SAMAEL', 'MEDINA'].flatMap((word, line) => [...word].flatMap((letter, col) =>
      letters[letter].flatMap((row, y) => [...row].map((pixel, x) => pixel === '1'
        ? <rect key={`${line}-${col}-${y}-${x}`} x={col * 6 + x} y={line * 9 + y} width="1" height="1" fill="currentColor" opacity={y > 4 ? 0.68 : y > 2 ? 0.84 : 1}
            style={{ '--pixel-delay': `${(col * 6 + x) * 10 + y * 14 + line * 70 + ((x * 7 + y * 13) % 5) * 10}ms` } as CSSProperties} />
        : null))
    ))}
  </svg>;
}
