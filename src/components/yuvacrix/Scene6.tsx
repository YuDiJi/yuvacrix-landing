import React from "react";
import { IMAGES } from "./constants";

const STAT_CARDS = [
  { value: "1,284", label: "Grounds active" },
  { value: "8,940", label: "Live matches this week" },
  { value: "312", label: "Tournaments running" },
];

const TEAMS = [
  {
    name: "Borivali Strikers",
    score: "142/4",
    result: "Won by 14 runs",
    won: true,
  },
  {
    name: "Mumbai Daredevils",
    score: "128/9",
    result: "Lost · advances",
    won: false,
  },
  {
    name: "Bandra Blasters",
    score: "164/3",
    result: "Won by 14 runs",
    won: true,
  },
  {
    name: "Worli Warriors",
    score: "97/10",
    result: "Lost · advances",
    won: false,
  },
];

const Scene6: React.FC = () => (
  <section
    id="scene-6"
    className="relative py-24 md:py-32 overflow-hidden"
    style={{ background: "#060B1F" }}
  >
    {/* Full-bleed background */}
    <div className="absolute inset-0">
      <img
        src={IMAGES.map}
        alt="Aerial cricket grounds"
        className="w-full h-full object-cover opacity-40"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, #060B1F 8%, transparent 30%, transparent 70%, #060B1F 92%)",
        }}
      />
    </div>

    <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16">
      {/* Header */}
      <div className="mb-14">
        <p className="font-display text-white/40 text-xs uppercase tracking-[0.3em] mb-4">
          06 — The Community
        </p>
        <h2
          className="font-display font-black uppercase leading-none text-balance max-w-2xl"
          style={{ fontSize: "clamp(2.2rem, 5vw, 4.5rem)" }}
        >
          <span className="text-white">Turn your local ground into a</span>
          <br />
          <strong className="text-sky">professional ecosystem.</strong>
        </h2>
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
        {STAT_CARDS.map((s) => (
          <div
            key={s.label}
            className="rounded-xl p-6"
            style={{
              background: "rgba(13,27,62,0.7)",
              borderLeft: "3px solid var(--live)",
              backdropFilter: "blur(8px)",
            }}
          >
            <p
              className="font-display font-black text-white leading-none mb-1"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              {s.value}
            </p>
            <p className="text-white/50 font-body text-sm uppercase tracking-widest">
              {s.label}
            </p>
          </div>
        ))}
      </div>

      {/* Tournament bracket */}
      <div
        className="rounded-2xl p-6 md:p-8"
        style={{
          background: "rgba(0,0,0,0.5)",
          backdropFilter: "blur(16px)",
          border: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <p className="text-white/60 font-body text-xs uppercase tracking-widest mb-6">
          Borivali Premier T15 · Quarter Finals
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {TEAMS.map((t) => (
            <div
              key={t.name}
              className="rounded-xl p-4"
              style={{
                background: t.won
                  ? "rgba(34,197,94,0.1)"
                  : "rgba(255,255,255,0.04)",
                border: `1px solid ${t.won ? "rgba(34,197,94,0.3)" : "rgba(255,255,255,0.07)"}`,
              }}
            >
              <p className="text-white font-display font-bold text-sm uppercase tracking-wide mb-1">
                {t.name}
              </p>
              <p
                className="font-display font-black text-xl mb-2"
                style={{ color: t.won ? "#22C55E" : "#fff" }}
              >
                {t.score}
              </p>
              <p className="text-white/40 font-body text-xs leading-tight">
                {t.result}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Scene6;
