// utils/motion.ts
import { Variants } from "framer-motion";

// Texto que aparece desde abajo
export const textVariant = (delay: number = 0): Variants => {
  return {
    hidden: {
      y: 50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.25,
        delay,
      },
    },
  };
};

// Fade con dirección
export const fadeIn = (
  direction: "left" | "right" | "up" | "down" | "",
  type: "spring" | "tween" = "tween", // 👈 default válido
  delay: number = 0,
  duration: number = 0.75
): Variants => {
  return {
    hidden: {
      x:
        direction === "left"
          ? 100
          : direction === "right"
          ? -100
          : 0,
      y:
        direction === "up"
          ? 100
          : direction === "down"
          ? -100
          : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type, // siempre válido ("spring" | "tween")
        delay,
        duration,
        ease: "easeOut",
      },
    },
  };
};

// Zoom con fade
export const zoomIn = (delay: number = 0, duration: number = 0.5): Variants => {
  return {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "tween",
        delay,
        duration,
        ease: "easeOut",
      },
    },
  };
};

// Slide con dirección
export const slideIn = (
  direction: "left" | "right" | "up" | "down",
  type: "spring" | "tween" = "tween",
  delay: number = 0,
  duration: number = 0.75
): Variants => {
  return {
    hidden: {
      x:
        direction === "left"
          ? "-100%"
          : direction === "right"
          ? "100%"
          : 0,
      y:
        direction === "up"
          ? "100%"
          : direction === "down"
          ? "-100%"
          : 0,
    },
    show: {
      x: 0,
      y: 0,
      transition: {
        type,
        delay,
        duration,
        ease: "easeOut",
      },
    },
  };
};
