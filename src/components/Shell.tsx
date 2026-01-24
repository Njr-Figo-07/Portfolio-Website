"use client";

import { useEffect, useState } from "react";

export default function Shell({ children }: { children: React.ReactNode }) {
  const [pos, setPos] = useState({ x: -9999, y: -9999 });

  useEffect(() => {
    const move = (e: MouseEvent) =>
      setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div className="relative min-h-screen">
      <div
        className="pointer-events-none fixed inset-0 z-30"
        style={{
          background: `radial-gradient(160px circle at ${pos.x}px ${pos.y}px, rgba(120,120,255,0.08), transparent 70%)`,
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
