import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { IMAGES, FORM_ENTRIES } from "./constants";
import Particles from "./Particles";

const GOOGLE_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSfHchMeVwFQFxCbf9VCIgN_GtikFd6m0x4ryDdGT5ZbZXS_TQ/formResponse";

const schema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Enter a valid email"),
  mobile: z.string().regex(/^\d{10}$/, "Enter a 10-digit mobile number"),
  city: z.string().min(1, "City is required"),
});
type FormData = z.infer<typeof schema>;

// ── Countdown ────────────────────────────────────────────────
const TARGET = new Date("2026-08-01T00:00:00+05:30");

function useCountdown() {
  const [timeLeft, setTimeLeft] = useState({ d: 0, h: 0, m: 0, s: 0 });
  useEffect(() => {
    const tick = () => {
      const diff = TARGET.getTime() - Date.now();
      if (diff <= 0) {
        setTimeLeft({ d: 0, h: 0, m: 0, s: 0 });
        return;
      }
      setTimeLeft({
        d: Math.floor(diff / 86400000),
        h: Math.floor((diff % 86400000) / 3600000),
        m: Math.floor((diff % 3600000) / 60000),
        s: Math.floor((diff % 60000) / 1000),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  return timeLeft;
}

const pad = (n: number) => String(n).padStart(2, "0");

// ── Countdown tile ────────────────────────────────────────────
const Tile: React.FC<{ value: number; label: string }> = ({ value, label }) => (
  <div
    className="flex flex-col items-center justify-center rounded-2xl px-4 py-5 min-w-[72px]"
    style={{
      background: "rgba(255,255,255,0.06)",
      border: "1px solid rgba(255,255,255,0.1)",
      backdropFilter: "blur(12px)",
    }}
  >
    <span
      className="font-display font-black tabular-nums leading-none text-sky"
      style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
    >
      {pad(value)}
    </span>
    <span className="text-white/40 font-body text-xs uppercase tracking-widest mt-1">
      {label}
    </span>
  </div>
);

// ── Scene 7 ───────────────────────────────────────────────────
const Scene7: React.FC = () => {
  const { d, h, m, s } = useCountdown();
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    setStatus("loading");
    try {
      const fd = new FormData();
      fd.append(FORM_ENTRIES.name, data.name);
      fd.append(FORM_ENTRIES.email, data.email);
      fd.append(FORM_ENTRIES.mobile, data.mobile);
      fd.append(FORM_ENTRIES.city, data.city);
      await fetch(GOOGLE_FORM_URL, {
        method: "POST",
        mode: "no-cors",
        body: fd,
      });
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="scene-7"
      className="relative min-h-screen bg-black flex items-center overflow-hidden"
    >
      {/* Background trophy */}
      <div className="absolute inset-0">
        <img
          src={IMAGES.trophy}
          alt="Cricket trophy"
          className="w-full h-full object-cover opacity-50"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, transparent 30%, transparent 70%, rgba(0,0,0,0.8) 100%)",
          }}
        />
      </div>

      {/* Amber particles */}
      <Particles count={60} color="#F59E0B" />

      <div className="relative z-10 w-full max-w-3xl mx-auto px-6 md:px-16 py-24 md:py-32 flex flex-col items-center text-center">
        {/* Label */}
        <p className="font-display text-white/40 text-xs uppercase tracking-[0.3em] mb-6">
          07 — Coming Soon
        </p>

        {/* Headline */}
        <h2
          className="font-display font-black uppercase leading-none text-balance mb-6"
          style={{ fontSize: "clamp(3rem, 9vw, 7rem)" }}
        >
          <span className="text-white block">Your cricket legacy</span>
          <span className="text-six glow-amber block">starts here.</span>
        </h2>

        {/* Subcopy */}
        <p className="text-white/50 font-body text-base md:text-lg leading-relaxed mb-12 text-pretty max-w-md">
          Early access opens in <span className="text-sky">{d} days</span>.
          We're hand-picking the first 500 grounds across India.
        </p>

        {/* Countdown */}
        <div className="flex items-center gap-3 md:gap-4 mb-14 flex-wrap justify-center">
          <Tile value={d} label="Days" />
          <span className="text-white/30 font-display font-black text-3xl">
            :
          </span>
          <Tile value={h} label="Hours" />
          <span className="text-white/30 font-display font-black text-3xl">
            :
          </span>
          <Tile value={m} label="Mins" />
          <span className="text-white/30 font-display font-black text-3xl">
            :
          </span>
          <Tile value={s} label="Secs" />
        </div>

        {/* Waitlist form */}
        {status === "success" ? (
          <div
            className="w-full rounded-2xl p-8 mb-10 text-center"
            style={{
              background: "rgba(34,197,94,0.12)",
              border: "1px solid rgba(34,197,94,0.3)",
            }}
          >
            <p className="font-display font-black text-four text-3xl uppercase mb-2">
              You're in! 🏏
            </p>
            <p className="text-white/60 font-body text-sm">
              We'll reach out when your spot is ready. Get your bat ready.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full rounded-2xl p-6 md:p-8 mb-8"
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.08)",
              backdropFilter: "blur(16px)",
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              {/* Name */}
              <div>
                <label className="text-white/50 font-body text-xs uppercase tracking-widest block mb-1.5">
                  Name
                </label>
                <input
                  {...register("name")}
                  placeholder="Virat S."
                  className="w-full rounded-xl px-4 py-3 font-body text-sm text-white bg-white/5 border border-white/10 focus:border-sky focus:outline-none placeholder:text-white/20 transition-colors"
                  style={{ background: "rgba(255,255,255,0.06)" }}
                />
                {errors.name && (
                  <p className="text-live text-xs mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="text-white/50 font-body text-xs uppercase tracking-widest block mb-1.5">
                  Email
                </label>
                <input
                  {...register("email")}
                  type="email"
                  placeholder="you@maidan.in"
                  className="w-full rounded-xl px-4 py-3 font-body text-sm text-white bg-white/5 border border-white/10 focus:border-sky focus:outline-none placeholder:text-white/20 transition-colors"
                  style={{ background: "rgba(255,255,255,0.06)" }}
                />
                {errors.email && (
                  <p className="text-live text-xs mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Mobile */}
              <div>
                <label className="text-white/50 font-body text-xs uppercase tracking-widest block mb-1.5">
                  Mobile
                </label>
                <input
                  {...register("mobile")}
                  placeholder="9876543210"
                  maxLength={10}
                  className="w-full rounded-xl px-4 py-3 font-body text-sm text-white bg-white/5 border border-white/10 focus:border-sky focus:outline-none placeholder:text-white/20 transition-colors"
                  style={{ background: "rgba(255,255,255,0.06)" }}
                />
                {errors.mobile && (
                  <p className="text-live text-xs mt-1">
                    {errors.mobile.message}
                  </p>
                )}
              </div>

              {/* City */}
              <div>
                <label className="text-white/50 font-body text-xs uppercase tracking-widest block mb-1.5">
                  City
                </label>
                <input
                  {...register("city")}
                  placeholder="Mumbai"
                  className="w-full rounded-xl px-4 py-3 font-body text-sm text-white bg-white/5 border border-white/10 focus:border-sky focus:outline-none placeholder:text-white/20 transition-colors"
                  style={{ background: "rgba(255,255,255,0.06)" }}
                />
                {errors.city && (
                  <p className="text-live text-xs mt-1">
                    {errors.city.message}
                  </p>
                )}
              </div>
            </div>

            {status === "error" && (
              <p className="text-live font-body text-sm mb-3">
                Something went wrong. Please try again.
              </p>
            )}

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full py-4 rounded-xl font-display font-black uppercase tracking-widest text-lg transition-all disabled:opacity-50"
              style={{ background: "var(--sky)", color: "#fff" }}
            >
              {status === "loading"
                ? "Securing your spot…"
                : "Claim Early Access →"}
            </button>

            <p className="text-white/25 font-body text-xs mt-4 text-center">
              🔒 No spam. Your data stays private. Unsubscribe anytime.
            </p>
          </form>
        )}

        {/* Social links */}
        <div className="flex flex-wrap items-center justify-center gap-6">
          {["WhatsApp"].map((s) => (
            <a
              key={s}
              href="https://wa.me/8591771137"
              className="text-white/40 hover:text-white font-body text-sm transition-colors uppercase tracking-widest"
            >
              {s}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Scene7;
