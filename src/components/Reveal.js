"use client";

import { useEffect, useRef, useState } from "react";

export default function Reveal({ children, className = "", as: Tag = "div" }) {
  const ref = useRef(null);
  const [ready, setReady] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Only start hiding content once JS has hydrated, so no-JS/SSR
    // visitors always see the full content immediately.
    setReady(true);
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const revealClass = !ready ? "" : visible ? "reveal" : "opacity-0";

  return (
    <Tag ref={ref} className={`${className} ${revealClass}`}>
      {children}
    </Tag>
  );
}
