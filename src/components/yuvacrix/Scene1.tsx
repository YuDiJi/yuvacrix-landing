import React, { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { IMAGES } from "./constants";
import Particles from "./Particles";

// Tailwind sr-only equivalent as inline style (add to your global CSS instead if preferred)
const srOnly: React.CSSProperties = {
  position: "absolute",
  width: "1px",
  height: "1px",
  padding: 0,
  margin: "-1px",
  overflow: "hidden",
  clip: "rect(0,0,0,0)",
  whiteSpace: "nowrap",
  border: 0,
};

const Scene1: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const springProgress = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 25,
  });

  const yImg = useTransform(springProgress, [0, 1], ["0%", "28%"]);
  const blurVal = useTransform(springProgress, [0, 1], [0, 8]);
  const filterVal = useTransform(blurVal, (v) => `blur(${v}px)`);
  const scaleImg = useTransform(springProgress, [0, 1], [1, 1.5]);

  const titleOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const titleY = useTransform(scrollYProgress, [0, 0.4], [0, -70]);

  return (
    <section
      id="scene-1"
      ref={sectionRef}
      className="relative vignette overflow-hidden"
      style={{ height: "140vh" }}
    >
      <motion.div
        className="absolute inset-0 w-full h-full"
        style={{ y: yImg, filter: filterVal, transformOrigin: "center center" }}
      >
        <motion.div
          className="s1-img-scale w-full h-full"
          style={{ scale: scaleImg, transformOrigin: "center center" }}
        >
          <img
            src={IMAGES.sunrise}
            // ── SEO: descriptive alt with product + location keywords ──
            alt="Gully cricket match at sunrise — YuvaCrix cricket scoring app"
            className="w-full h-full object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-[#060B1F]" />
      </motion.div>

      <Particles count={50} color="#F59E0B" />

      <div className="sticky top-0 h-screen flex flex-col items-center justify-center z-10 px-6">
        <motion.div
          className="s1-title text-center"
          style={{ opacity: titleOpacity, y: titleY }}
        >
          <p className="font-display text-white/50 text-xs md:text-sm uppercase tracking-[0.3em] mb-4">
            {/* ── SEO: screen-reader / crawler label with product keywords ── */}
            <span style={srOnly}>YuvaCrix — </span>
            01 — Prologue
          </p>

          <h1
            className="font-display font-black uppercase leading-none text-balance"
            style={{ fontSize: "clamp(3rem, 12vw, 6rem)" }}
          >
            {/*
             * The sr-only span is read by Google but invisible to users.
             * It anchors the H1 to your core product keywords without
             * changing a single pixel of the visual design.
             */}
            <span style={srOnly}>YuvaCrix Cricket Scoring App — </span>
            <span className="text-white">Every run remembered.</span>
            <br />
            <span className="text-sky glow-sky">Every legend recorded.</span>
          </h1>

          {/* ── SEO: replace vague tagline with a keyword-rich subtitle ── */}
          <p className="mt-6 text-white/50 font-body text-base md:text-lg tracking-wide">
            {/*
             * Visible text now doubles as your meta-description equivalent.
             * Users read it as brand copy; Google reads it as product description.
             */}
            Organise cricket tournaments, track live scores, view scorecards and
            celebrate player awards.
          </p>
        </motion.div>

        <div className="absolute bottom-10 flex flex-col items-center gap-2">
          <span className="scroll-bounce text-white/40 text-2xl select-none">
            ↓
          </span>
          <span className="text-white/30 font-body text-xs uppercase tracking-[0.3em]">
            scroll
          </span>
        </div>
      </div>
    </section>
  );
};

export default Scene1;
