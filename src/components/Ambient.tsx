"use client";

import { useEffect, useState, type CSSProperties } from "react";

export function Ambient() {
  const [reduce, setReduce] = useState(false);

  useEffect(() => {
    setReduce(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  if (reduce) return null;

  return (
    <div className="ambient" aria-hidden>
      <span className="ambient-orb ambient-orb-a" />
      <span className="ambient-orb ambient-orb-b" />
      <span className="ambient-orb ambient-orb-c" />
      <div className="ambient-particles">
        {Array.from({ length: 18 }).map((_, i) => (
          <span
            key={i}
            className="ambient-particle"
            style={
              {
                "--x": `${(i * 53) % 100}%`,
                "--d": `${8 + (i % 7) * 1.4}s`,
                "--delay": `${(i % 9) * 0.45}s`,
                "--size": `${2 + (i % 3)}px`,
              } as CSSProperties
            }
          />
        ))}
      </div>
    </div>
  );
}
