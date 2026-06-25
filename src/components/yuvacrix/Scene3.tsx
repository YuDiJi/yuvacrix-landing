import React, { useRef } from "react";
import { motion } from "framer-motion";
import { IMAGES } from "./constants";

const BARS = Array.from({ length: 28 }, (_, i) => ({
  id: i,
  h: 30 + Math.random() * 40,
  delay: i * 0.05,
}));

const SoundWave: React.FC = () => (
  <div
    className="flex items-end gap-0.5 h-16"
    style={{
      position: "absolute",
      bottom: 80,
      left: "50%",
      transform: "translateX(-50%)",
    }}
  >
    {BARS.map((b) => (
      <motion.div
        key={b.id}
        style={{ width: 3, background: "var(--sky)", borderRadius: 2 }}
        animate={{ height: [4, b.h, 4] }}
        transition={{
          duration: 0.8,
          delay: b.delay,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    ))}
  </div>
);

const Scene3: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="scene-3"
      ref={sectionRef}
      className="s3 relative bg-black overflow-hidden"
      style={{ height: "130vh" }}
    >
      <div className="sticky top-0 h-screen vignette overflow-hidden">
        {/* Background image */}
        <img
          src={IMAGES.six}
          alt="Cricket bat hitting ball"
          className="absolute inset-0 w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-[#0D1B3E]" />

        {/* Impact ring */}
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{ zIndex: 3 }}
        >
          <motion.div
            className="border-2 border-six rounded-full"
            style={{ width: 60, height: 60 }}
            animate={{ scale: [0, 6], opacity: [0.8, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeOut" }}
          />
        </div>

        {/* Tennis ball — GSAP controlled via class, fallback with CSS */}
        <div
          className="s3-ball absolute"
          style={{
            width: 24,
            height: 24,
            borderRadius: "50%",
            background: "#dfff5b",
            boxShadow: "0 0 40px 12px rgba(100,255,80,0.6)",
            left: "50%",
            top: "60%",
            transform: "translateX(-50%)",
            zIndex: 5,
          }}
        />

        {/* Distance counter */}
        <div className="absolute top-10 right-8 text-right z-10">
          <p className="text-white/40 font-body text-xs uppercase tracking-[0.2em] mb-1">
            Distance
          </p>
          <p
            className="s3-dist font-display font-black glow-amber text-six"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
          >
            0m
          </p>
        </div>

        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center z-10 px-6 pt-20">
          <p className="font-display text-white/40 text-xs uppercase tracking-[0.3em] mb-4">
            03 — The Six
          </p>
          <h2
            className="font-display font-black uppercase text-center text-white text-balance leading-tight"
            style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
          >
            That six deserves
            <br />
            to be remembered.
          </h2>
        </div>

        {/* Sound wave */}
        <SoundWave />

        {/* Crowd silhouette */}
        <div className="absolute bottom-0 left-0 right-0 h-1/3 mask-fade-t z-4">
          <img
            src={IMAGES.crowd}
            alt="Cheering crowd"
            className="w-full h-full object-cover opacity-50"
          />
        </div>
      </div>
    </section>
  );
};

export default Scene3;
