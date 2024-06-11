"use client";
import React from "react";
import { Boxes } from "../ui/background-boxes";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
import { cn } from "../../utils/cn";

export default function BlogIntro() {
  const words = [
    {
      text: "Take",
    },
    {
      text: "a",
    },
    {
      text: "look",
    },
    {
      text: "at",
    },
    {
      text: "Kim Nguyen Blog.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="h-[70vh] relative w-full overflow-hidden bg-black flex flex-col items-center justify-center rounded-lg">
      <div className="absolute inset-0 w-full h-full bg-black z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      <Boxes />
      <div className="z-20 flex flex-col items-center justify-center">
        <p className="text-white dark:text-neutral-200 text-xs sm:text-base">
          Learn some interesting things now
        </p>
        <TypewriterEffectSmooth words={words} />
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
          <a href="/blog">
            <button className="flex items-center justify-center space-x-2 w-40 h-10 rounded-xl bg-white text-black border border-black text-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 -960 960 960"
                fill="#000"
                className="w-4 h-4 sm:w-5 sm:h-5 translate-y-[2px]"
              >
                <path d="m256-240-56-56 384-384H240v-80h480v480h-80v-344L256-240Z" />
              </svg>
              <span>Blog</span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
