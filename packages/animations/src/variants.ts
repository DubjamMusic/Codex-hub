/**
 * Framer Motion animation variants for the HustleCodeX ecosystem
 */

/**
 * Fade in animation variant
 */
export const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

/**
 * Slide in from left animation variant
 */
export const slideIn = {
  initial: { x: -100, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: { x: 100, opacity: 0 },
};

/**
 * Slide in from right animation variant
 */
export const slideInRight = {
  initial: { x: 100, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: { x: -100, opacity: 0 },
};

/**
 * Scale animation variant
 */
export const scale = {
  initial: { scale: 0.8, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  exit: { scale: 0.8, opacity: 0 },
};

/**
 * Glow pulse animation variant
 */
export const glowPulse = {
  animate: {
    opacity: [0.5, 1, 0.5],
    scale: [1, 1.05, 1],
  },
  transition: {
    duration: 2,
    repeat: Infinity,
    ease: 'easeInOut',
  },
};

/**
 * Bounce animation variant
 */
export const bounce = {
  animate: {
    y: [0, -10, 0],
  },
  transition: {
    duration: 0.6,
    repeat: Infinity,
    ease: 'easeInOut',
  },
};

/**
 * Rotate animation variant
 */
export const rotate = {
  animate: {
    rotate: 360,
  },
  transition: {
    duration: 2,
    repeat: Infinity,
    ease: 'linear',
  },
};

/**
 * Shimmer effect animation variant
 */
export const shimmer = {
  animate: {
    backgroundPosition: ['200% 0', '-200% 0'],
  },
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: 'linear',
  },
};

/**
 * Stagger children animation variant
 */
export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

/**
 * Stagger item animation variant (use with staggerContainer)
 */
export const staggerItem = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

/**
 * Modal backdrop animation
 */
export const modalBackdrop = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

/**
 * Modal content animation
 */
export const modalContent = {
  initial: { scale: 0.9, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  exit: { scale: 0.9, opacity: 0 },
};

/**
 * Slide up drawer animation
 */
export const slideUpDrawer = {
  initial: { y: '100%' },
  animate: { y: 0 },
  exit: { y: '100%' },
};

/**
 * Fade and blur animation
 */
export const fadeBlur = {
  initial: { opacity: 0, filter: 'blur(10px)' },
  animate: { opacity: 1, filter: 'blur(0px)' },
  exit: { opacity: 0, filter: 'blur(10px)' },
};
