// import React, { useMemo } from "react";

// interface ParticlesProps {
//   count?: number;
//   color?: string;
// }

// const Particles: React.FC<ParticlesProps> = ({
//   count = 50,
//   color = "#F59E0B",
// }) => {
//   const particles = useMemo(
//     () =>
//       Array.from({ length: count }, (_, i) => {
//         const size = 1 + Math.random() * 3;
//         const dx = (Math.random() - 0.5) * 200;
//         const dy = -(60 + Math.random() * 200);
//         const left = Math.random() * 100;
//         const top = Math.random() * 100;
//         const delay = Math.random() * 6;
//         const dur = 4 + Math.random() * 6;
//         return { id: i, size, dx, dy, left, top, delay, dur };
//       }),
//     [count],
//   );

//   return (
//     <div
//       className="absolute inset-0 overflow-hidden pointer-events-none"
//       style={{ zIndex: 3 }}
//     >
//       {particles.map((p) => (
//         <div
//           key={p.id}
//           style={{
//             position: "absolute",
//             width: p.size,
//             height: p.size,
//             borderRadius: "50%",
//             background: color,
//             left: `${p.left}%`,
//             top: `${p.top}%`,
//             opacity: 0,
//             // @ts-expect-error CSS custom property
//             "--dx": `${p.dx}px`,
//             "--dy": `${p.dy}px`,
//             animation: `drift ${p.dur}s ${p.delay}s ease-out infinite`,
//           }}
//         />
//       ))}
//     </div>
//   );
// };

// export default Particles;

import React, { useState } from "react";

interface ParticlesProps {
  count?: number;
  color?: string;
}

const Particles: React.FC<ParticlesProps> = ({
  count = 50,
  color = "#F59E0B",
}) => {
  const [particles] = useState(() =>
    Array.from({ length: count }, (_, i) => {
      const size = 1 + Math.random() * 3;
      const dx = (Math.random() - 0.5) * 200;
      const dy = -(60 + Math.random() * 200);
      const left = Math.random() * 100;
      const top = Math.random() * 100;
      const delay = Math.random() * 6;
      const dur = 4 + Math.random() * 6;

      return {
        id: i,
        size,
        dx,
        dy,
        left,
        top,
        delay,
        dur,
      };
    }),
  );

  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none"
      style={{ zIndex: 3 }}
    >
      {particles.map((p) => (
        <div
          key={p.id}
          style={{
            position: "absolute",
            width: p.size,
            height: p.size,
            borderRadius: "50%",
            background: color,
            left: `${p.left}%`,
            top: `${p.top}%`,
            opacity: 0,
            // @ts-expect-error CSS custom property
            "--dx": `${p.dx}px`,
            "--dy": `${p.dy}px`,
            animation: `drift ${p.dur}s ${p.delay}s ease-out infinite`,
          }}
        />
      ))}
    </div>
  );
};

export default Particles;
