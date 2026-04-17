import { useState, useEffect } from "react";

interface Column {
  id: number;
  left: number;
  speed: number;
  delay: number;
  chars: string[];
}

interface RainProps {
  randChar: () => string;
}

export function Rain({ randChar }: RainProps) {
  const createColumns = (): Column[] => {
    const count = Math.floor(window.innerWidth / 19);
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      left: i * 20,
      speed: 3 + Math.random() * 5,
      delay: Math.random() * 2000,
      chars: Array.from({ length: 12 }, () => randChar()),
    }));
  };

  const [columns, setColumns] = useState(() => createColumns());

  useEffect(() => {
    const interval = setInterval(() => {
      setColumns((prev) =>
        prev.map((col) => {
          return {
            ...col,
            chars: col.chars.map((ch) =>
              Math.random() > 0.7 ? randChar() : ch,
            ),
          };
        }),
      );
    }, 120);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="absolute inset-0 overflow-hidden select-none">
        {columns.map((col) => (
          <div
            key={col.id}
            className="absolute top-0 text-emerald-500 opacity-70 animate-fall"
            style={{
              left: col.left,
              animationDelay: `${col.delay}ms`,
              animationDuration: `${col.speed}s`,
              opacity: 0,
            }}
          >
            {col.chars.map((ch, i) => (
              <div
                key={i}
                style={{
                  opacity: 1.3 - i / col.chars.length,
                  textShadow: "0 0 8px #22c55e, 0 0 16px #22c55e",
                }}
              >
                {ch}
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
}
