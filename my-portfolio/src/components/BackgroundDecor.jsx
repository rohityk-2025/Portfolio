import React from "react";
import "./BackgroundDecor.css";

const shapes = ["⭐", "✦", "✧", "●", "✷", "✺", "〰️"];

function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}

export default function BackgroundDecor({ count = 20 }) {
  return (
    <div className="bg-decor">
      {Array.from({ length: count }).map((_, i) => {
        const size = getRandom(12, 32);
        const top = getRandom(0, 100);
        const left = getRandom(0, 100);
        const delay = getRandom(0, 6);
        const duration = getRandom(6, 14);

        return (
          <span
            key={i}
            className="bg-shape"
            style={{
              top: `${top}%`,
              left: `${left}%`,
              fontSize: `${size}px`,
              animationDelay: `${delay}s`,
              animationDuration: `${duration}s`,
            }}
          >
            {shapes[Math.floor(Math.random() * shapes.length)]}
          </span>
        );
      })}
    </div>
  );
}
