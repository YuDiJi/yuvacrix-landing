import React from "react";

const Footer: React.FC = () => (
  <footer className="border-t border-white/10 px-6 md:px-16 py-8 flex flex-col md:flex-row items-center justify-between gap-4 bg-black">
    <div className="flex items-center gap-2">
      <img
        src={"../../../public/logo_dark_croped.png"}
        alt="yuvacrix logo"
        className="w-32 h-18"
      />
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
