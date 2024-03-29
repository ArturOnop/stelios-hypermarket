import {cn} from "../../utils/cn";
import React, {useEffect, useState} from "react";

export const Carousel = ({
                           items,
                           direction = "right",
                           speed = "normal",
                           pauseOnHover = true,
                           className,
                           isImage
                         }: {
  items: string[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
  isImage: boolean
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        "absolute bottom-0 scroller z-20 w-screen overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex shrink-0 gap-4 py-4 w-max flex-nowrap",
          start && "animate-scroll ",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          isImage ?
            <li
              className="max-w-full relative w-[250px]"
              key={item}>
              <img
                className="rounded h-full object-cover"
                src={item}
                alt="food"/>
            </li>
            :
            <li
              className="max-w-full relative w-[250px] bg-stone-50 p-3 rounded shadow"
              key={item.name}>
              <div className="flex flex-col gap-3">
                <div className="font-bold tracking-wide">{item.name}</div>
                <div className="flex h-5 gap-1">
                  <img src="/star.svg" className="h-full"/>
                  <img src="/star.svg" className="h-full"/>
                  <img src="/star.svg" className="h-full"/>
                  <img src="/star.svg" className="h-full"/>
                  <img src="/star.svg" className="h-full"/>
                </div>
                <div className="text-sm">{item.desc}</div>
              </div>
            </li>
        ))}
      </ul>
    </div>
  );
};
