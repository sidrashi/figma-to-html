import { Variants } from "framer-motion";

// Standard fade in animation
export const fadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }
  }
};

// Fade in from left
export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

// Fade in from right
export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

// Scale up animation
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }
  }
};

// Staggered container for children
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

// Staggered item animation
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" }
  }
};

// Hover scale effect
export const hoverScale = {
  scale: 1.02,
  transition: { type: "spring", stiffness: 300, damping: 20 }
};

// Tap scale effect
export const tapScale = {
  scale: 0.98
};

// Card hover effect
export const cardHover = {
  y: -5,
  boxShadow: "0 20px 40px -15px rgba(0, 0, 0, 0.15)",
  transition: { type: "spring", stiffness: 200, damping: 20 }
};

// Button hover gradient reveal
export const buttonGradient: Variants = {
  initial: { x: "-100%" },
  hover: { x: 0, transition: { duration: 0.3 } }
};

// Float animation (for decorative elements)
export const floatAnimation = {
  y: [0, -10, 0],
  transition: { duration: 3, repeat: Infinity, ease: "easeInOut" }
};

// Rotate animation (for icons/emojis)
export const rotateAnimation = {
  rotate: [0, 5, -5, 0],
  transition: { duration: 4, repeat: Infinity, ease: "easeInOut" }
};

// Pulse animation
export const pulseAnimation = {
  scale: [1, 1.1, 1],
  transition: { duration: 2, repeat: Infinity, ease: "easeInOut" }
};

// Shine effect (for cards)
export const shineEffect = {
  initial: { x: "-200%" },
  animate: { x: "200%" },
  transition: { duration: 3, repeat: Infinity, repeatDelay: 2 }
};

// Page transition variants
export const pageTransition: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" }
  },
  exit: { 
    opacity: 0, 
    y: -20,
    transition: { duration: 0.3 }
  }
};

// Viewport settings for scroll animations
export const defaultViewport = {
  once: true,
  margin: "-100px"
};

export const earlyViewport = {
  once: true,
  margin: "-50px"
};
