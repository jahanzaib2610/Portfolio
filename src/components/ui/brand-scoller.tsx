"use client";

import React from "react";
import { BsAmazon, BsGoogle, BsSpotify, BsYoutube } from "react-icons/bs";

export interface MarqueeProps {
  children?: React.ReactNode;
  direction?: "left" | "right";
  duration?: string;
  gap?: string;
  className?: string;
  pauseOnHover?: boolean;
}

export const Marquee: React.FC<MarqueeProps> = ({
  children,
  direction = "left",
  duration = "40s",
  gap = "2rem",
  className = "",
  pauseOnHover = true,
}) => {
  const animClass =
    direction === "right" ? "animate-marquee-reverse" : "animate-marquee";

  return (
    <div
      className={`group flex overflow-hidden py-2 max-w-full marquee-container ${pauseOnHover ? "marquee-track" : ""} ${className}`}
      style={
        {
          "--gap": gap,
          gap: "var(--gap)",
          "--duration": duration,
        } as React.CSSProperties
      }
    >
      {Array(4)
        .fill(0)
        .map((_, i) => (
          <div
            className={`flex shrink-0 justify-around ${animClass} flex-row`}
            style={{ gap: "var(--gap)" }}
            key={i}
          >
            {children}
          </div>
        ))}
    </div>
  );
};

export const BrandScroller = () => {
  return (
    <Marquee direction="left" duration="40s">
      <div className="flex items-center w-28 gap-3">
        <BsSpotify size={24} />
        <p className="text-lg font-semibold opacity-80">Spotify</p>
      </div>
      <div className="flex items-center w-28 gap-3">
        <BsYoutube size={24} />
        <p className="text-lg font-semibold opacity-80">YouTube</p>
      </div>
      <div className="flex items-center w-28 gap-3">
        <BsAmazon size={24} />
        <p className="text-lg font-semibold opacity-80">Amazon</p>
      </div>

      <div className="flex items-center w-28 gap-3">
        <BsGoogle size={24} />
        <p className="text-lg font-semibold opacity-80">Google</p>
      </div>
    </Marquee>
  );
};

export const BrandScrollerReverse = () => {
  return (
    <Marquee direction="right" duration="40s">
      <div className="flex items-center w-28 gap-3">
        <BsSpotify size={24} />
        <p className="text-lg font-semibold opacity-80">Spotify</p>
      </div>
      <div className="flex items-center w-28 gap-3">
        <BsYoutube size={24} />
        <p className="text-lg font-semibold opacity-80">YouTube</p>
      </div>
      <div className="flex items-center w-28 gap-3">
        <BsAmazon size={24} />
        <p className="text-lg font-semibold opacity-80">Amazon</p>
      </div>

      <div className="flex items-center w-28 gap-3">
        <BsGoogle size={24} />
        <p className="text-lg font-semibold opacity-80">Google</p>
      </div>
    </Marquee>
  );
};
