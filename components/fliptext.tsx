import React from "react";
import { FlipWords } from "././ui/flip-words";

export function FlipText() {
  const words = [
    "React",
    "Flutter",
    "NextJS",
    "TypeScript",
    "Tailwind",
    "Webflow",
    "FlutterFlow",
    "Figma",
    "Penpot",
  ];

  return (
    <div className="text-2xl  md:text-5xl lg:text-6xl mx-auto font-normal text-neutral-600 dark:text-neutral-400   leading-normal truncate">
      HI, I&apos;m Emmanuel <br />I Design & Build beautiful
      <br />
      Applications with
      <FlipWords
        words={words}
        className="text-3xl lg:text-7xl md:text-6xl sm:text-5xl"
      />
    </div>
  );
}
