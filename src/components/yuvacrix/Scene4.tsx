import React from "react";
import { IMAGES } from "./constants";

const STATS = [
  {
    label: "Runs Recorded",
    target: 24782,
    color: "var(--sky)",
    cls: "s4-stat-0",
  },
  {
    label: "Wickets Taken",
    target: 1436,
    color: "var(--live)",
    cls: "s4-stat-1",
  },
  {
    label: "Tournaments Tracked",
    target: 127,
    color: "var(--four)",
    cls: "s4-stat-2",
  },
  {
    label: "Player Awards",
    target: 386,
    color: "var(--six)",
    cls: "s4-stat-3",
  },
];

const BALLS = ["1", "4", "·", "6", "W", "2"] as const;
const ballColor = (b: string) => {
  if (b === "4") return { bg: "var(--four)", color: "#fff" };
  if (b === "6") return { bg: "var(--six)", color: "#000" };
  if (b === "W") return { bg: "var(--live)", color: "#fff" };
  return { bg: "rgba(255,255,255,0.15)", color: "#fff" };
};

const Scene4: React.FC = () => (
  <section
    id="scene-4"
    className="s4 relative py-24 md:py-32 overflow-hidden"
    style={{ background: "#060B1F" }}
  >
    <div className="max-w-7xl mx-auto px-6 md:px-16">
      {/* Header */}
      <div className="mb-16">
        <p className="font-display text-white/40 text-xs uppercase tracking-[0.3em] mb-4">
          04 — The Memories
        </p>
        <h2
          className="font-display font-black uppercase leading-none text-balance"
          style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
        >
          <span className="text-white">Track every run. Every wicket.</span>
          <br />
          <span className="text-sky glow-sky">Every memory.</span>
        </h2>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
        {STATS.map((s) => (
          <div key={s.label} className="s4-stat-wrap">
            <div
              className={`${s.cls} font-display font-black leading-none`}
              data-target={s.target}
              style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", color: s.color }}
            >
              0
            </div>
            <p className="text-white/40 font-body text-xs uppercase tracking-widest mt-2">
              {s.label}
            </p>
          </div>
        ))}
      </div>

      {/* Card grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
        {/* Live scorecard */}
        <div
          className="reveal md:col-span-7 rounded-2xl p-6"
          style={{
            background: "#0D1B3E",
            boxShadow: "0 0 60px rgba(75,139,255,0.2)",
          }}
        >
          <div className="flex items-center gap-2 mb-1">
            <span className="live-dot w-2 h-2 rounded-full bg-live inline-block" />
            <span className="text-white/60 font-body text-xs uppercase tracking-widest">
              Live · Over 18.2
            </span>
          </div>
          <p className="text-white/40 font-body text-xs mb-3">
            Borivali Maidan · Mumbai
          </p>
          <p className="text-white/70 font-display font-bold uppercase text-sm tracking-widest mb-1">
            Mumbai XI
          </p>
          <div
            className="font-display font-black text-white leading-none mb-3"
            style={{ fontSize: "clamp(3rem, 7vw, 5rem)" }}
          >
            142/4
          </div>
          <div className="flex gap-6 mb-4">
            <div>
              <p className="text-white/40 font-body text-xs uppercase tracking-widest">
                CRR
              </p>
              <p className="text-sky font-display font-bold text-xl">7.8</p>
            </div>
            <div>
              <p className="text-white/40 font-body text-xs uppercase tracking-widest">
                RRR
              </p>
              <p className="text-six font-display font-bold text-xl">10.5</p>
            </div>
            <div>
              <p className="text-white/40 font-body text-xs uppercase tracking-widest">
                Target
              </p>
              <p className="text-white font-display font-bold text-xl">168</p>
            </div>
          </div>
          <div className="flex gap-2 flex-wrap">
            {BALLS.map((b, i) => {
              const { bg, color } = ballColor(b);
              return (
                <span
                  key={i}
                  className="w-9 h-9 rounded-full flex items-center justify-center font-display font-bold text-sm"
                  style={{ background: bg, color }}
                >
                  {b}
                </span>
              );
            })}
          </div>
        </div>

        {/* Player card */}
        <div
          className="reveal md:col-span-5 rounded-2xl p-6 relative overflow-hidden"
          style={{
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.08)",
            backdropFilter: "blur(12px)",
          }}
        >
          <div className="flex items-start gap-4 mb-4">
            <img
              src={IMAGES.portrait}
              alt="V. Sharma"
              className="w-16 h-16 rounded-xl object-cover"
            />
            <div>
              <p className="text-white font-body font-semibold text-sm">
                V. Sharma
              </p>
              <p className="text-white/40 font-body text-xs">
                Borivali Strikers · Opener
              </p>
              <span
                className="inline-block mt-1 px-2 py-0.5 rounded-full text-xs font-display font-bold uppercase tracking-wider"
                style={{ background: "rgba(245,158,11,0.2)", color: "#F59E0B" }}
              >
                MVP
              </span>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-2 mb-4">
            {[
              ["RUNS", "54*"],
              ["BALLS", "38"],
              ["4s", "7"],
              ["6s", "2"],
            ].map(([k, v]) => (
              <div key={k} className="text-center">
                <p className="text-white/40 font-body text-[10px] uppercase tracking-wider">
                  {k}
                </p>
                <p className="text-white font-display font-black text-xl">
                  {v}
                </p>
              </div>
            ))}
          </div>
          {/* Progress bar */}
          <div className="w-full h-1.5 rounded-full bg-white/10 mb-2 overflow-hidden">
            <div
              className="h-full rounded-full"
              style={{
                width: "68%",
                background: "linear-gradient(to right, var(--sky), var(--six))",
              }}
            />
          </div>
          <p className="text-white/40 font-body text-xs">
            Strike rate <span className="text-sky">142.1</span>
          </p>
        </div>

        {/* Scorebook banner */}
        <div
          className="reveal md:col-span-12 relative rounded-2xl overflow-hidden flex items-center"
          style={{ height: 288 }}
        >
          <img
            src={IMAGES.scorebook}
            alt="Cricket scorebook"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, rgba(6,11,31,0.95) 40%, transparent)",
            }}
          />
          <div className="relative z-10 px-8 md:px-12">
            <p className="text-white/80 font-body text-lg md:text-2xl leading-relaxed text-pretty max-w-lg">
              From notebook <span className="text-white/40">→</span> To a legacy
              you can <strong className="text-sky">share.</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Scene4;
