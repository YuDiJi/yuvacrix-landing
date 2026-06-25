import React from "react";

const TIMELINE = [
  {
    num: "01",
    year: "2019",
    title: "First Match",
    desc: "12 runs. Out caught at deep mid-wicket.",
  },
  {
    num: "02",
    year: "2020",
    title: "First Fifty",
    desc: "54 not out, society league semi-final.",
  },
  {
    num: "03",
    year: "2021",
    title: "First Tournament",
    desc: "Borivali Premier T15 — runners up.",
  },
  {
    num: "04",
    year: "2022",
    title: "First Trophy",
    desc: "Maidan Cup champions. MVP.",
  },
  {
    num: "05",
    year: "2023",
    title: "Local Legend",
    desc: "1,200+ runs across 4 leagues.",
  },
];

const Scene5: React.FC = () => (
  <section
    id="scene-5"
    className="s5 relative bg-black overflow-hidden"
    style={{ height: "100vh" }}
  >
    {/* Top-left label */}
    <div className="absolute top-12 left-8 md:left-16 z-20">
      <p className="font-display text-white/40 text-xs uppercase tracking-[0.3em] mb-2">
        05 — The Legacy
      </p>
      <h2
        className="font-display font-black uppercase leading-tight text-balance"
        style={{ fontSize: "clamp(1.6rem, 3.5vw, 3rem)" }}
      >
        <span className="text-white">From first ball</span>
        <br />
        <strong className="text-sky">to local legend.</strong>
      </h2>
    </div>

    {/* Horizontal track */}
    <div className="absolute inset-0 flex items-center overflow-hidden">
      <div
        className="timeline-track flex gap-8 pl-[50vw] pr-24"
        style={{ width: "max-content", willChange: "transform" }}
      >
        {TIMELINE.map((item) => (
          <div
            key={item.num}
            className="relative flex-shrink-0 flex flex-row items-center"
            style={{ width: "80vw", maxWidth: 560 }}
          >
            {/* Giant number — left column, wide enough to never bleed into content */}
            <span
              className="flex-shrink-0 select-none font-display font-black pointer-events-none leading-none"
              style={{
                fontSize: "clamp(6rem, 14vw, 11rem)",
                color: "rgba(255,255,255,0.07)",
                lineHeight: 1,
                width: "clamp(7rem, 15vw, 12rem)",
                minWidth: "clamp(7rem, 15vw, 12rem)",
                textAlign: "left",
                marginLeft: "-2rem",
                overflow: "visible",
              }}
            >
              {item.num}
            </span>

            {/* Content — right column, starts after number column */}
            <div className="flex flex-col justify-center min-w-0 pl-4">
              <p className="text-sky font-display font-bold text-2xl mb-2">
                {item.year}
              </p>
              <h3
                className="font-display font-black uppercase text-white leading-none mb-3"
                style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
              >
                {item.title}
              </h3>
              <p className="text-white/50 font-body text-base text-pretty max-w-sm leading-relaxed mb-5">
                {item.desc}
              </p>
              <div
                className="h-0.5 w-full max-w-xs"
                style={{
                  background:
                    "linear-gradient(to right, var(--sky), transparent)",
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Bottom hint */}
    <p className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/25 font-body text-xs uppercase tracking-[0.25em] z-20 whitespace-nowrap">
      scroll to advance the years
    </p>
  </section>
);

export default Scene5;
