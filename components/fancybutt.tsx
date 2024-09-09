"use client";
import React from "react";
import { HoverBorderGradient } from "./ui/hover-border-gradient";

export function HoverBorderButton() {
  return (
    <div className=" flex justify-left text-center">
      <a href="/my cv.pdf" download>
        <HoverBorderGradient
          containerClassName="rounded-lg"
          as="button"
          className="bg-transparent p-4 text-white flex items-center space-x-2"
        >
          <span>Download My Resume</span>
        </HoverBorderGradient>
      </a>
    </div>
  );
}
