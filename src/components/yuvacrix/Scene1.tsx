import React, { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { IMAGES } from "./constants";
import Particles from "./Particles";

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

  // Parallax: image moves down as user scrolls
  const yImg = useTransform(springProgress, [0, 1], ["0%", "28%"]);
  // Blur image as scroll progresses
  const blurVal = useTransform(springProgress, [0, 1], [0, 8]);
  const filterVal = useTransform(blurVal, (v) => `blur(${v}px)`);
  // Scale image via separate motion value (no GSAP conflict)
  const scaleImg = useTransform(springProgress, [0, 1], [1, 1.5]);

  // Title fade — use raw scrollYProgress for sharp response
  const titleOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const titleY = useTransform(scrollYProgress, [0, 0.4], [0, -70]);

  return (
    <section
      id="scene-1"
      ref={sectionRef}
      className="relative vignette overflow-hidden"
      style={{ height: "140vh" }}
    >
      {/* Parallax + blur wrapper — framer-motion owns y and filter */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        style={{ y: yImg, filter: filterVal, transformOrigin: "center center" }}
      >
        {/* Scale wrapper — framer-motion owns scale; no GSAP on this element */}
        <motion.div
          className="s1-img-scale w-full h-full"
          style={{ scale: scaleImg, transformOrigin: "center center" }}
        >
          <img
            src={IMAGES.sunrise}
            alt="Indian gully cricket maidan at sunrise"
            className="w-full h-full object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-[#060B1F]" />
      </motion.div>

      {/* Particles */}
      <Particles count={50} color="#F59E0B" />

      {/* Sticky title — framer-motion owns opacity and y; no GSAP */}
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center z-10 px-6">
        <motion.div
          className="s1-title text-center"
          style={{ opacity: titleOpacity, y: titleY }}
        >
          <p className="font-display text-white/50 text-xs md:text-sm uppercase tracking-[0.3em] mb-4">
            01 — Prologue
          </p>
          <h1
            className="font-display font-black uppercase leading-none text-balance"
            style={{ fontSize: "clamp(3rem, 12vw, 7rem)" }}
          >
            <span className="text-white">Every run remembered.</span>
            <br />
            <span className="text-sky glow-sky">Every legend recorded.</span>
          </h1>
          <p className="mt-6 text-white/50 font-body text-base md:text-lg tracking-wide">
            Scroll. Let it play out.
          </p>
        </motion.div>

        {/* Scroll indicator */}
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
