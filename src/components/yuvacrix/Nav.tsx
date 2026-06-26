import React, { useState } from "react";

const scrollTo = (id: string) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

const NAV_LINKS: [string, string][] = [
  ["Story", "scene-1"],
  ["Legacy", "scene-5"],
  ["Community", "scene-6"],
  ["Early Access", "scene-7"],
];

const Nav: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 py-4"
      style={{ mixBlendMode: "difference" }}
    >
      {/* Logo */}
      <button
        className="flex items-center h-14 overflow-hidden"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="YuvaCrix home"
      >
        <img
          src={"../../../public/logo_dark_croped.png"}
          alt="yuvacrix logo"
          className="w-32 h-18"
        />
      </button>

      {/* Desktop links */}
      <div className="hidden md:flex items-center gap-8">
        {NAV_LINKS.map(([label, id]) => (
          <button
            key={label}
            onClick={() => scrollTo(id)}
            className="text-white/70 hover:text-white text-sm font-body font-medium uppercase tracking-widest transition-colors"
          >
            {label}
          </button>
        ))}
        <button
          onClick={() => scrollTo("scene-7")}
          className="px-5 py-2 rounded-full border border-white/30 text-white text-sm font-body font-semibold uppercase tracking-widest hover:bg-white/10 transition-colors"
        >
          Join
        </button>
      </div>

      {/* Mobile hamburger */}
      <button
        className="md:hidden flex flex-col gap-1.5 p-2"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        <span
          className={`block h-0.5 w-6 bg-white transition-all ${open ? "rotate-45 translate-y-2" : ""}`}
        />
        <span
          className={`block h-0.5 w-6 bg-white transition-all ${open ? "opacity-0" : ""}`}
        />
        <span
          className={`block h-0.5 w-6 bg-white transition-all ${open ? "-rotate-45 -translate-y-2" : ""}`}
        />
      </button>

      {/* Mobile menu */}
      {open && (
        <div className="absolute top-full left-0 right-0 bg-black/90 backdrop-blur-lg flex flex-col items-center gap-6 py-8 md:hidden">
          {NAV_LINKS.map(([label, id]) => (
            <button
              key={label}
              onClick={() => {
                scrollTo(id);
                setOpen(false);
              }}
              className="text-white/80 text-lg font-body font-semibold uppercase tracking-widest"
            >
              {label}
            </button>
          ))}
          <button
            onClick={() => {
              scrollTo("scene-7");
              setOpen(false);
            }}
            className="px-6 py-2.5 rounded-full border border-white/30 text-white font-body font-semibold uppercase tracking-widest"
          >
            Join
          </button>
        </div>
      )}
    </nav>
  );
};

export default Nav;
