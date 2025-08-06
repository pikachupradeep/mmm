"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

type Direction = "left" | "right";
type Speed = "fast" | "normal" | "slow";

type CardItem = {
  quote: string;
  name: string;
  title: string;
  img: string;
  rating: number; // ⭐️ Rating (0–5)
};

interface InfiniteMovingCardsProps {
  items: CardItem[];
  direction?: Direction;
  speed?: Speed;
  pauseOnHover?: boolean;
  className?: string;
}

export const InfiniteMovingCards: React.FC<InfiniteMovingCardsProps> = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    addAnimation();
  }, []);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        scrollerRef.current?.appendChild(duplicatedItem as Node);
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        "--animation-direction",
        direction === "left" ? "forwards" : "reverse"
      );
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      let duration = "40s";
      if (speed === "fast") duration = "20s";
      else if (speed === "slow") duration = "80s";

      containerRef.current.style.setProperty("--animation-duration", duration);
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            className="relative w-[350px] max-w-full shrink-0 rounded-2xl border border-b-0 border-zinc-200 bg-[linear-gradient(180deg,#fafafa,#f5f5f5)] px-8 py-6 md:w-[450px] dark:border-zinc-700 dark:bg-[linear-gradient(180deg,#27272a,#18181b)]"
            key={`${item.name}-${idx}`}
          >
            <blockquote>
              <div
                aria-hidden="true"
                className="user-select-none pointer-events-none absolute -top-0.5 -left-0.5 -z-1 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
              ></div>
              <p className="relative z-20 text-sm leading-[1.6] font-normal text-neutral-800 dark:text-gray-100">
                {item.quote}
              </p>
              <div className="relative z-20 mt-6 flex flex-row items-center">
                <span className="flex items-center gap-1">
                  <Image
                    src={item.img}
                    className="h-[4rem] w-[4rem] rounded-full object-cover"
                    width={400}
                    height={400}
                    alt="profile"
                  />
                  <div className="flex flex-col gap-1">
                    <p className="text-sm leading-[1.6] font-normal text-neutral-500 dark:text-gray-400">
                      {item.name}
                    </p>
                    <p className="text-sm leading-[1.6] font-normal text-neutral-500 dark:text-gray-400">
                      {item.title}
                    </p>
                    {/* ⭐️ Star Rating */}
                    <div className="flex items-center mt-1">
                      {Array.from({ length: 5 }).map((_, starIdx) => (
                        <svg
                          key={starIdx}
                          xmlns="http://www.w3.org/2000/svg"
                          fill={starIdx < item.rating ? "#facc15" : "none"}
                          viewBox="0 0 24 24"
                          stroke="#facc15"
                          className="w-4 h-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M11.48 3.499l2.272 4.605 5.074.738-3.673 3.58.867 5.055-4.54-2.388-4.54 2.388.867-5.055-3.673-3.58 5.074-.738L11.48 3.5z"
                          />
                        </svg>
                      ))}
                    </div>
                  </div>
                </span>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
