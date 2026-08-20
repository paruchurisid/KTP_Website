"use client";

import { useEffect, useRef, useState } from "react";

export function StatBand({ activeMembers }: { activeMembers: number }) {
  const suffixes = ["+", "", "", "+"];
  const labels = ["active members", "pledge classes", "grad years", "companies represented"];
  const [values, setValues] = useState([0, 0, 0, 0]);
  const band = useRef<HTMLElement>(null);

  useEffect(() => {
    const targets = [activeMembers, 6, 5, 17];
    const element = band.current;
    if (!element) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        setValues(targets);
        return;
      }
      const started = performance.now();
      const animate = (now: number) => {
        const progress = Math.min(1, (now - started) / 900);
        setValues(targets.map(target => Math.round(target * progress)));
        if (progress < 1) requestAnimationFrame(animate);
      };
      requestAnimationFrame(animate);
    }, { threshold: .35 });
    observer.observe(element);
    return () => observer.disconnect();
  }, [activeMembers]);

  return <section ref={band} className="stat-band" aria-label="Chapter statistics"><div className="wrap stats">{labels.map((label,index)=><div key={label}><strong aria-live="polite">{values[index]}{suffixes[index]}</strong><span>{label}</span></div>)}</div></section>;
}
