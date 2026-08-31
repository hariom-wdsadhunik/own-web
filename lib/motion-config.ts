export const MOTION_SPRINGS = {
  soft: { stiffness: 100, damping: 20 },
  default: { stiffness: 200, damping: 25 },
  snappy: { stiffness: 300, damping: 28 },
  stiff: { stiffness: 400, damping: 30 },
} as const;

export const MOTION_TRANSITIONS = {
  fast: { duration: 0.15, ease: [0.16, 1, 0.3, 1] },
  base: { duration: 0.3, ease: [0.16, 1, 0.3, 1] },
  smooth: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  slow: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
} as const;

export const FADE_IN_VARIANTS = {
  hidden: { opacity: 0, y: 16 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: MOTION_TRANSITIONS.base
  },
} as const;

export const STAGGER_CONTAINER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
} as const;
