// Animation system for smooth, physics-based interactions inspired by Aceternity
export const animations = {
  // Duration values
  duration: {
    75: '75ms',
    100: '100ms',
    150: '150ms',
    200: '200ms',
    300: '300ms',
    500: '500ms',
    700: '700ms',
    1000: '1000ms',
  },

  // Timing functions - physics-based easing
  timingFunction: {
    linear: 'linear',
    ease: 'ease',
    easeIn: 'ease-in',
    easeOut: 'ease-out',
    easeInOut: 'ease-in-out',
    // Custom cubic-bezier curves for modern feel
    bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
    snappy: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    spring: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
  },

  // Common animation presets
  preset: {
    // Micro-interactions
    hover: {
      duration: '200ms',
      timingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
    },
    focus: {
      duration: '150ms',
      timingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
    },
    active: {
      duration: '100ms',
      timingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
    },

    // Component transitions
    fade: {
      duration: '300ms',
      timingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
    },
    slide: {
      duration: '300ms',
      timingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    },
    scale: {
      duration: '200ms',
      timingFunction: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    },
    bounce: {
      duration: '500ms',
      timingFunction: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    },

    // Loading states
    pulse: {
      duration: '1000ms',
      timingFunction: 'ease-in-out',
    },
    spin: {
      duration: '1000ms',
      timingFunction: 'linear',
    },
  },

  // Transform values for common effects
  transform: {
    scale: {
      0: 'scale(0)',
      95: 'scale(0.95)',
      100: 'scale(1)',
      105: 'scale(1.05)',
      110: 'scale(1.1)',
      125: 'scale(1.25)',
    },
    rotate: {
      0: 'rotate(0deg)',
      45: 'rotate(45deg)',
      90: 'rotate(90deg)',
      180: 'rotate(180deg)',
      270: 'rotate(270deg)',
      360: 'rotate(360deg)',
    },
    translate: {
      0: 'translateY(0)',
      1: 'translateY(0.25rem)',
      2: 'translateY(0.5rem)',
      4: 'translateY(1rem)',
      '-1': 'translateY(-0.25rem)',
      '-2': 'translateY(-0.5rem)',
      '-4': 'translateY(-1rem)',
    },
  },
};

// CSS Custom Properties
export const cssAnimations = {
  // Durations
  '--mz-duration-75': animations.duration[75],
  '--mz-duration-100': animations.duration[100],
  '--mz-duration-150': animations.duration[150],
  '--mz-duration-200': animations.duration[200],
  '--mz-duration-300': animations.duration[300],
  '--mz-duration-500': animations.duration[500],
  '--mz-duration-700': animations.duration[700],
  '--mz-duration-1000': animations.duration[1000],

  // Timing functions
  '--mz-ease-linear': animations.timingFunction.linear,
  '--mz-ease': animations.timingFunction.ease,
  '--mz-ease-in': animations.timingFunction.easeIn,
  '--mz-ease-out': animations.timingFunction.easeOut,
  '--mz-ease-in-out': animations.timingFunction.easeInOut,
  '--mz-ease-bounce': animations.timingFunction.bounce,
  '--mz-ease-smooth': animations.timingFunction.smooth,
  '--mz-ease-snappy': animations.timingFunction.snappy,
  '--mz-ease-spring': animations.timingFunction.spring,

  // Common transitions
  '--mz-transition-hover': `all ${animations.preset.hover.duration} ${animations.preset.hover.timingFunction}`,
  '--mz-transition-focus': `all ${animations.preset.focus.duration} ${animations.preset.focus.timingFunction}`,
  '--mz-transition-active': `all ${animations.preset.active.duration} ${animations.preset.active.timingFunction}`,
  '--mz-transition-fade': `opacity ${animations.preset.fade.duration} ${animations.preset.fade.timingFunction}`,
  '--mz-transition-slide': `transform ${animations.preset.slide.duration} ${animations.preset.slide.timingFunction}`,
  '--mz-transition-scale': `transform ${animations.preset.scale.duration} ${animations.preset.scale.timingFunction}`,
};