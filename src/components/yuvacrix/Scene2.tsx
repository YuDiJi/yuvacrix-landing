import React from "react";
import ScoreDemo from "./ScoreDemo";

const Scene2: React.FC = () => (
  <section
    id="scene-2"
    className="relative min-h-screen flex items-center overflow-hidden"
    style={{ background: "#060B1F" }}
  >
    {/* Gradient blobs */}
    <div
      className="absolute pointer-events-none"
      style={{
        top: "-10%",
        left: "-5%",
        width: "50%",
        height: "60%",
        background:
          "radial-gradient(ellipse, rgba(75,139,255,0.12) 0%, transparent 70%)",
      }}
    />
    <div
      className="absolute pointer-events-none"
      style={{
        bottom: "-10%",
        right: "-5%",
        width: "50%",
        height: "60%",
        background:
          "radial-gradient(ellipse, rgba(245,158,11,0.08) 0%, transparent 70%)",
      }}
    />

    <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-16 py-24 grid md:grid-cols-2 gap-12 md:gap-20 items-center">
      {/* Left */}
      <div>
        <p className="font-display text-white/40 text-xs uppercase tracking-[0.3em] mb-6">
          02 — Live Scoring
        </p>
        <h2
          className="font-display font-black uppercase leading-none text-balance mb-8"
          style={{ fontSize: "clamp(3.5rem, 8vw, 6rem)" }}
        >
          <span className="text-white block">Tap.</span>
          <span className="text-stroke block">Score.</span>
          <span className="text-sky block">Remember.</span>
        </h2>
        <p className="text-white/50 font-body text-base leading-relaxed mb-8 max-w-sm text-pretty">
          YuvaCrix brings professional-grade scoring to your local maidan. Every
          ball, every boundary, every wicket — captured in real time.
        </p>
        <div className="flex flex-wrap gap-3">
          {["Ball-by-ball", "Auto overs", "Live share"].map((tag) => (
            <span
              key={tag}
              className="px-4 py-1.5 rounded-full border border-white/20 text-white/70 font-body text-sm font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Right — phone mockup */}
      <div className="flex justify-center">
        <ScoreDemo />
      </div>
    </div>
  </section>
);

export default Scene2;
