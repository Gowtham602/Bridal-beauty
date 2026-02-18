import React from "react";

const FlowerBackground = () => {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden z-[60]">
      {[...Array(15)].map((_, i) => (
        <span
          key={i}
          className="absolute animate-flower select-none opacity-70"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 8}s`,
            animationDuration: `${10 + Math.random() * 10}s`,
            fontSize: `${20 + Math.random() * 20}px`,
          }}
        >
          🌸
        </span>
      ))}
    </div>
  );
};

export default FlowerBackground;
