import React from "react";

const Footer: React.FC = () => (
  <footer className="border-t border-white/10 px-6 md:px-16 py-8 flex flex-col md:flex-row items-center justify-between gap-4 bg-black">
    <div className="flex items-center gap-2">
      <span className="font-display text-xl font-black uppercase tracking-widest text-white">
        Yuva
      </span>
      <span className="font-display text-xl font-black uppercase tracking-widest text-sky">
        Crix
      </span>
    </div>
    <p className="text-white/40 text-xs font-body tracking-widest uppercase">
      © 2026 · Made for the maidan
    </p>
    <p className="text-white/50 text-xs font-body italic text-right">
      Every cricket match deserves to be remembered.
    </p>
  </footer>
);

export default Footer;
