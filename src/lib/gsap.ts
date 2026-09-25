"use client";

import gsap from "gsap";

export function animatePulse(element: HTMLElement | string) {
  return gsap.to(element, {
    opacity: 0.7,
    duration: 1.5,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut",
  });
}

export { gsap };
