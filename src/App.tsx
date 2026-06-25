import React, { useEffect, useRef } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import MouseLight from "./components/yuvacrix/MouseLight";
import Nav from "./components/yuvacrix/Nav";
import Footer from "./components/yuvacrix/Footer";
import Scene1 from "./components/yuvacrix/Scene1";
import Scene2 from "./components/yuvacrix/Scene2";
import Scene3 from "./components/yuvacrix/Scene3";
import Scene4 from "./components/yuvacrix/Scene4";
import Scene5 from "./components/yuvacrix/Scene5";
import Scene6 from "./components/yuvacrix/Scene6";
import Scene7 from "./components/yuvacrix/Scene7";

gsap.registerPlugin(ScrollTrigger);

const App: React.FC = () => {
  const rootRef = useRef<HTMLDivElement>(null);

  // ── Lenis smooth scroll ────────────────────────────────────
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.2, smoothWheel: true });

    const onScroll = () => {
      ScrollTrigger.update();
      // Keep GSAP's scroll proxy in sync
      console.log(window.scrollY); // just access to trigger
    };
    lenis.on("scroll", onScroll);

    let rafId: number;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      cancelAnimationFrame(rafId);
    };
  }, []);

  // ── GSAP ScrollTrigger animations ─────────────────────────
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Scene 3 — ball rise
      gsap.fromTo(
        ".s3-ball",
        { y: "60vh", scale: 1, rotation: 0 },
        {
          y: "-30vh",
          scale: 0.5,
          rotation: 720,
          ease: "none",
          scrollTrigger: {
            trigger: ".s3",
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        },
      );

      // Scene 3 — distance counter
      const distEl = document.querySelector(".s3-dist") as HTMLElement | null;
      if (distEl) {
        const obj = { val: 0 };
        gsap.to(obj, {
          val: 92,
          ease: "none",
          snap: { val: 1 },
          onUpdate: () => {
            distEl.textContent = `${Math.round(obj.val)}m`;
          },
          scrollTrigger: {
            trigger: ".s3",
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }

      // Scene 4 — stat counters
      document
        .querySelectorAll<HTMLElement>(
          ".s4-stat-0, .s4-stat-1, .s4-stat-2, .s4-stat-3",
        )
        .forEach((el) => {
          const target = parseFloat(el.dataset.target ?? "0");
          const obj = { val: 0 };
          gsap.to(obj, {
            val: target,
            duration: 2,
            ease: "power2.out",
            snap: { val: 1 },
            onUpdate: () => {
              el.textContent = Math.round(obj.val).toLocaleString();
            },
            scrollTrigger: {
              trigger: el,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          });
        });

      // Scene 4 — card reveals
      gsap.utils.toArray<HTMLElement>(".reveal").forEach((el) => {
        gsap.fromTo(
          el,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          },
        );
      });

      // Scene 5 — horizontal pin
      const track = document.querySelector<HTMLElement>(".timeline-track");
      if (track) {
        const getScrollAmount = () =>
          -(track.scrollWidth - window.innerWidth + 80);
        const mm = gsap.matchMedia();
        mm.add("(min-width: 1px)", () => {
          const tl = gsap.to(track, {
            x: getScrollAmount(),
            ease: "none",
            scrollTrigger: {
              trigger: ".s5",
              start: "top top",
              end: () => `+=${Math.abs(getScrollAmount()) + window.innerWidth}`,
              pin: true,
              scrub: 1,
              invalidateOnRefresh: true,
            },
          });
          return () => tl.kill();
        });
      }
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={rootRef} className="relative">
      <MouseLight />
      <Nav />
      <main>
        <Scene1 />
        <Scene2 />
        <Scene3 />
        <Scene4 />
        <Scene5 />
        <Scene6 />
        <Scene7 />
      </main>
      <Footer />
    </div>
  );
};

export default App;
