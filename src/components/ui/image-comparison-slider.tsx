"use client";

import React, { useState, useRef, useCallback, useEffect } from "react";
import Image from "next/image";

export const ImageComparison = ({
  beforeImage,
  afterImage,
  altBefore = "Before",
  altAfter = "After",
}: {
  beforeImage: string;
  afterImage: string;
  altBefore?: string;
  altAfter?: string;
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback(
    (clientX: number) => {
      if (!isDragging || !containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const newPosition = Math.max(
        0,
        Math.min(100, ((clientX - rect.left) / rect.width) * 100),
      );
      setSliderPosition(newPosition);
    },
    [isDragging],
  );

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = useCallback(() => setIsDragging(false), []);
  const handleMouseMove = (e: React.MouseEvent) => handleMove(e.clientX);

  const handleTouchStart = () => setIsDragging(true);
  const handleTouchEnd = () => setIsDragging(false);
  const handleTouchMove = (e: React.TouchEvent) =>
    handleMove(e.touches[0].clientX);

  useEffect(() => {
    window.addEventListener("mouseup", handleMouseUp);
    return () => window.removeEventListener("mouseup", handleMouseUp);
  }, [handleMouseUp]);

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-4xl mx-auto select-none rounded-2xl overflow-hidden shadow-2xl aspect-[16/9]"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseUp}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* After Image (Top Layer) */}
      <div
        className="absolute top-0 left-0 h-full w-full overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <Image
          src={afterImage}
          alt={altAfter}
          fill
          className="object-cover object-left"
          draggable={false}
          sizes="(min-width: 768px) 75vw, 100vw"
        />
      </div>

      {/* Before Image (Bottom Layer) */}
      <Image
        src={beforeImage}
        alt={altBefore}
        fill
        className="object-cover object-left"
        draggable={false}
        sizes="(min-width: 768px) 75vw, 100vw"
        priority
      />

      {/* Slider Handle */}
      <div
        className="absolute top-0 bottom-0 w-1.5 bg-white/80 cursor-ew-resize flex items-center justify-center"
        style={{ left: `calc(${sliderPosition}% - 0.375rem)` }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
      >
        <div
          className={`bg-white rounded-full h-12 w-12 flex items-center justify-center shadow-md transition-all duration-200 ease-in-out ${isDragging ? "scale-110 shadow-xl" : ""}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-gray-700"
          >
            <line x1="15" y1="18" x2="9" y2="12" />
            <line x1="9" y1="6" x2="15" y2="12" />
          </svg>
        </div>
      </div>
    </div>
  );
};
