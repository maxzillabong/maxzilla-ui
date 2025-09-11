// Animation utilities for components

/**
 * Animate an element with a given animation name and options
 */
export function animate(
  element: Element,
  keyframes: Keyframe[] | PropertyIndexedKeyframes,
  options?: KeyframeAnimationOptions
): Animation {
  return element.animate(keyframes, {
    duration: 200,
    easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
    fill: 'both',
    ...options,
  });
}

/**
 * Fade in animation
 */
export function fadeIn(element: Element, duration = 200): Animation {
  return animate(
    element,
    [
      { opacity: 0 },
      { opacity: 1 },
    ],
    { duration }
  );
}

/**
 * Fade out animation
 */
export function fadeOut(element: Element, duration = 200): Animation {
  return animate(
    element,
    [
      { opacity: 1 },
      { opacity: 0 },
    ],
    { duration }
  );
}

/**
 * Slide up animation
 */
export function slideUp(element: Element, duration = 300): Animation {
  return animate(
    element,
    [
      { transform: 'translateY(10px)', opacity: 0 },
      { transform: 'translateY(0)', opacity: 1 },
    ],
    { duration, easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)' }
  );
}

/**
 * Slide down animation
 */
export function slideDown(element: Element, duration = 300): Animation {
  return animate(
    element,
    [
      { transform: 'translateY(-10px)', opacity: 0 },
      { transform: 'translateY(0)', opacity: 1 },
    ],
    { duration, easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)' }
  );
}

/**
 * Scale in animation
 */
export function scaleIn(element: Element, duration = 200): Animation {
  return animate(
    element,
    [
      { transform: 'scale(0.95)', opacity: 0 },
      { transform: 'scale(1)', opacity: 1 },
    ],
    { duration, easing: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)' }
  );
}

/**
 * Scale out animation
 */
export function scaleOut(element: Element, duration = 200): Animation {
  return animate(
    element,
    [
      { transform: 'scale(1)', opacity: 1 },
      { transform: 'scale(0.95)', opacity: 0 },
    ],
    { duration, easing: 'cubic-bezier(0.4, 0, 0.2, 1)' }
  );
}

/**
 * Bounce animation
 */
export function bounce(element: Element, duration = 500): Animation {
  return animate(
    element,
    [
      { transform: 'translateY(-25%)', animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)' },
      { transform: 'translateY(0)', animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)' },
      { transform: 'translateY(-25%)', animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)' },
      { transform: 'translateY(0)', animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)' },
    ],
    { duration }
  );
}

/**
 * Pulse animation
 */
export function pulse(element: Element, duration = 1000): Animation {
  return animate(
    element,
    [
      { opacity: 1 },
      { opacity: 0.5 },
      { opacity: 1 },
    ],
    { duration, iterations: Infinity, easing: 'ease-in-out' }
  );
}

/**
 * Check if user prefers reduced motion
 */
export function prefersReducedMotion(): boolean {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/**
 * Get appropriate animation duration based on user preferences
 */
export function getAnimationDuration(duration: number): number {
  return prefersReducedMotion() ? Math.min(duration, 100) : duration;
}

/**
 * Spring physics animation
 */
export function spring(
  element: Element,
  from: Record<string, string | number>,
  to: Record<string, string | number>,
  options: { tension?: number; friction?: number; duration?: number } = {}
): Animation {
  const { tension = 300, friction = 30, duration = 500 } = options;
  
  // Convert spring physics to cubic-bezier approximation
  const damping = friction / (2 * Math.sqrt(tension));
  let easing: string;
  
  if (damping < 1) {
    // Underdamped - bouncy
    easing = 'cubic-bezier(0.175, 0.885, 0.32, 1.275)';
  } else if (damping > 1) {
    // Overdamped - smooth
    easing = 'cubic-bezier(0.4, 0, 0.2, 1)';
  } else {
    // Critically damped - balanced
    easing = 'cubic-bezier(0.25, 0.46, 0.45, 0.94)';
  }
  
  return animate(element, [from, to], { 
    duration: getAnimationDuration(duration), 
    easing 
  });
}