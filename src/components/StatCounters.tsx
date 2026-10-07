"use client";

import { useEffect, useRef, useState } from "react";
import { data } from "@/lib/data";

function useCountUp(target: number, active: boolean) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;
    let frame = 0;
    const start = performance.now();
    const duration = 1400;

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setValue(Math.round(target * eased));
      if (t < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, target]);

  return value;
}

function Stat({
  value,
  suffix,
  label,
}: {
  value: number;
  suffix: string;
  label: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const count = useCountUp(value, active);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          obs.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className="float-soft text-center">
      <p className="stat-value">
        {count}
        {suffix}
      </p>
      <p className="stat-label">{label}</p>
    </div>
  );
}

export function StatCounters({ className = "" }: { className?: string }) {
  return (
    <div className={`grid gap-8 sm:grid-cols-2 lg:grid-cols-4 ${className}`}>
      {data.stats.map((stat, i) => (
        <div key={stat.label} style={{ animationDelay: `${i * 0.35}s` }}>
          <Stat value={stat.value} suffix={stat.suffix} label={stat.label} />
        </div>
      ))}
    </div>
  );
}
