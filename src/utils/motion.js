export const transition = { type: "spring", duration: 0.3, stiffness: 200, damping: 25 };

// Slide Animation with faster, smoother transition
export const slideAnimation = (direction) => {
  return {
    initial: {
      x: direction === "left" ? -50 : direction === "right" ? 50 : 0,
      y: direction === "up" ? 50 : direction === "down" ? -50 : 0,
      opacity: 0,
      transition: { ...transition, delay: 0.1 },
    },
    animate: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: { ...transition, delay: 0.1 },
    },
    exit: {
      x: direction === "left" ? -50 : direction === "right" ? 50 : 0,
      y: direction === "up" ? 50 : direction === "down" ? -50 : 0,
      opacity: 0,
      transition: { ...transition, delay: 0.1 },
    },
  };
};

// Fade Animation with quicker fade-in and fade-out
export const fadeAnimation = {
  initial: {
    opacity: 0,
    transition: { ...transition, delay: 0.1 },
  },
  animate: {
    opacity: 1,
    transition: { ...transition, delay: 0.1 },
  },
  exit: {
    opacity: 0,
    transition: { ...transition, delay: 0.1 },
  },
};

// Headline Text Animation with smoother, faster entry
export const headTextAnimation = {
  initial: { x: 50, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  transition: {
    type: "spring",
    damping: 18,  // Reduced damping for faster response
    stiffness: 250, // Increased stiffness for snappier movement
    restDelta: 0.001,
    duration: 0.2,  // Shorter duration for quicker animations
  },
};

// Head Content Animation with quicker delay and smoother effect
export const headContentAnimation = {
  initial: { y: 50, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: {
    type: "spring",
    damping: 20,  // Faster damping for more dynamic movement
    stiffness: 200,
    restDelta: 0.001,
    duration: 0.35, // Adjusted duration for faster animation
    delay: 0.1,    // Reduced delay for faster transitions
  },
};

// Head Container Animation with faster entry and smooth flow
export const headContainerAnimation = {
  initial: { x: -50, opacity: 0, transition: { ...transition, delay: 0.1 } },
  animate: { x: 0, opacity: 1, transition: { ...transition, delay: 0 } },
  exit: { x: -50, opacity: 0, transition: { ...transition, delay: 0 } },
};
