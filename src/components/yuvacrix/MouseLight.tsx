import React, { useEffect, useRef } from "react";

const MouseLight: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onMove = (e: PointerEvent) => {
      el.style.left = `${e.clientX - 300}px`;
      el.style.top = `${e.clientY - 300}px`;
      el.style.opacity = "1";
    };

    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <div
      ref={ref}
      style={{
        position: "fixed",
        width: 600,
        height: 600,
        borderRadius: "50%",
        background:
          "radial-gradient(circle, rgba(75,139,255,0.18) 0%, transparent 70%)",
        pointerEvents: "none",
        zIndex: 998,
        mixBlendMode: "screen",
        opacity: 0,
        transition: "opacity 0.3s",
        willChange: "transform",
      }}
    />
  );
};

export default MouseLight;
