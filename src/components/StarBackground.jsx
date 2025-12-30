import { useEffect, useState } from "react";

export const BlossomBackground = () => {
  const [blossoms, setBlossoms] = useState([]);
  const [leaves, setLeaves] = useState([]);

  useEffect(() => {
    generateBlossoms();
    generateLeaves();

    const handleResize = () => generateBlossoms();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const generateBlossoms = () => {
    const numItems = Math.floor((window.innerWidth * window.innerHeight) / 12000);
    const items = [];
    for (let i = 0; i < numItems; i++) {
      items.push({
        id: i,
        size: Math.random() * 14 + 10,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        opacity: Math.random() * 0.5 + 0.6,
        animationDuration: Math.random() * 5 + 4,
      });
    }
    setBlossoms(items);
  };

  const generateLeaves = () => {
    const numItems = 15;
    const items = [];
    for (let i = 0; i < numItems; i++) {
      items.push({
        id: i,
        size: Math.random() * 12 + 8,
        x: Math.random() * window.innerWidth,
        y: -50,
        delay: Math.random() * 10,
        swayAmplitude: Math.random() * 20 + 10, // amplitude of left-right sway
        swayDuration: Math.random() * 4 + 4,    // duration of sway
        rotationDirection: Math.random() > 0.5 ? "cw" : "ccw",
        animationDuration: Math.random() * 6 + 6,
      });
    }
    setLeaves(items);
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Blossoms */}
      {blossoms.map((b) => (
        <div
          key={b.id}
          className="blossom animate-blossom"
          style={{
            width: b.size + "px",
            height: b.size + "px",
            left: b.x + "px",
            top: b.y + "px",
            opacity: b.opacity,
            animationDuration: b.animationDuration + "s",
          }}
        >
          {[...Array(5)].map((_, idx) => (
            <div
              key={idx}
              className="petal-shape"
              style={{ transform: `rotate(${idx * 72}deg) translateY(-50%)` }}
            />
          ))}
        </div>
      ))}

      {}
      {leaves.map((l) => (
        <div
          key={l.id}
          className={`leaf animate-leaf ${l.rotationDirection === "cw" ? "rotate-cw" : "rotate-ccw"}`}
          style={{
            width: l.size + "px",
            height: l.size * 1.4 + "px",
            left: l.x + "px",
            top: l.y + "px",
            animationDelay: l.delay + "s",
            animationDuration: l.animationDuration + "s",
            "--sway-amplitude": l.swayAmplitude + "px",
            "--sway-duration": l.swayDuration + "s",
          }}
        />
      ))}
    </div>
  );
};
