import { css } from 'lit';

// CSS utility functions and helpers

/**
 * Create a CSS custom property
 */
export function cssVar(name: string, fallback?: string): string {
  return fallback ? `var(--${name}, ${fallback})` : `var(--${name})`;
}

/**
 * Create responsive CSS using clamp()
 */
export function responsive(min: string, preferred: string, max: string): string {
  return `clamp(${min}, ${preferred}, ${max})`;
}

/**
 * Create a CSS shadow with optional color
 */
export function shadow(level: 'sm' | 'md' | 'lg' | 'xl', color?: string): string {
  const shadows = {
    sm: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
    md: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
    lg: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
    xl: '0 25px 50px -12px rgb(0 0 0 / 0.25)',
  };
  
  let shadowValue = shadows[level];
  
  if (color) {
    shadowValue = shadowValue.replace(/rgb\(0 0 0 \/ [\d.]+\)/g, color);
  }
  
  return shadowValue;
}

/**
 * Create a transition with timing function
 */
export function transition(
  properties: string | string[] = 'all',
  duration = '200ms',
  timing = 'cubic-bezier(0.4, 0, 0.2, 1)'
): string {
  const props = Array.isArray(properties) ? properties.join(', ') : properties;
  return `${props} ${duration} ${timing}`;
}

/**
 * Create a gradient background
 */
export function gradient(
  direction: string,
  ...colors: string[]
): string {
  return `linear-gradient(${direction}, ${colors.join(', ')})`;
}

/**
 * Utility CSS classes
 */
export const utilityStyles = css`
  /* Layout utilities */
  .flex { display: flex; }
  .inline-flex { display: inline-flex; }
  .grid { display: grid; }
  .inline-grid { display: inline-grid; }
  .block { display: block; }
  .inline-block { display: inline-block; }
  .inline { display: inline; }
  .hidden { display: none; }

  /* Flexbox utilities */
  .flex-col { flex-direction: column; }
  .flex-row { flex-direction: row; }
  .flex-wrap { flex-wrap: wrap; }
  .flex-nowrap { flex-wrap: nowrap; }
  .items-center { align-items: center; }
  .items-start { align-items: flex-start; }
  .items-end { align-items: flex-end; }
  .items-stretch { align-items: stretch; }
  .justify-center { justify-content: center; }
  .justify-start { justify-content: flex-start; }
  .justify-end { justify-content: flex-end; }
  .justify-between { justify-content: space-between; }
  .justify-around { justify-content: space-around; }
  .justify-evenly { justify-content: space-evenly; }

  /* Spacing utilities */
  .gap-1 { gap: var(--mz-space-1); }
  .gap-2 { gap: var(--mz-space-2); }
  .gap-3 { gap: var(--mz-space-3); }
  .gap-4 { gap: var(--mz-space-4); }
  .gap-6 { gap: var(--mz-space-6); }
  .gap-8 { gap: var(--mz-space-8); }

  /* Text utilities */
  .text-center { text-align: center; }
  .text-left { text-align: left; }
  .text-right { text-align: right; }
  .text-justify { text-align: justify; }
  
  /* Font weights */
  .font-light { font-weight: 300; }
  .font-normal { font-weight: 400; }
  .font-medium { font-weight: 500; }
  .font-semibold { font-weight: 600; }
  .font-bold { font-weight: 700; }

  /* Border radius */
  .rounded-none { border-radius: 0; }
  .rounded-sm { border-radius: var(--mz-radius-sm); }
  .rounded { border-radius: var(--mz-radius-base); }
  .rounded-md { border-radius: var(--mz-radius-md); }
  .rounded-lg { border-radius: var(--mz-radius-lg); }
  .rounded-xl { border-radius: var(--mz-radius-xl); }
  .rounded-full { border-radius: var(--mz-radius-full); }

  /* Position utilities */
  .relative { position: relative; }
  .absolute { position: absolute; }
  .fixed { position: fixed; }
  .sticky { position: sticky; }

  /* Overflow utilities */
  .overflow-hidden { overflow: hidden; }
  .overflow-visible { overflow: visible; }
  .overflow-auto { overflow: auto; }
  .overflow-scroll { overflow: scroll; }

  /* Cursor utilities */
  .cursor-pointer { cursor: pointer; }
  .cursor-default { cursor: default; }
  .cursor-not-allowed { cursor: not-allowed; }

  /* Select utilities */
  .select-none { user-select: none; }
  .select-text { user-select: text; }
  .select-all { user-select: all; }
  .select-auto { user-select: auto; }

  /* Pointer events */
  .pointer-events-none { pointer-events: none; }
  .pointer-events-auto { pointer-events: auto; }

  /* Opacity utilities */
  .opacity-0 { opacity: 0; }
  .opacity-25 { opacity: 0.25; }
  .opacity-50 { opacity: 0.5; }
  .opacity-75 { opacity: 0.75; }
  .opacity-100 { opacity: 1; }

  /* Transform utilities */
  .transform { transform: var(--transform); }
  .transform-none { transform: none; }

  /* Transition utilities */
  .transition-none { transition: none; }
  .transition-all { transition: all var(--mz-transition-normal); }
  .transition-colors { transition: color var(--mz-transition-normal), background-color var(--mz-transition-normal), border-color var(--mz-transition-normal); }
  .transition-opacity { transition: opacity var(--mz-transition-normal); }
  .transition-transform { transition: transform var(--mz-transition-normal); }

  /* Responsive utilities */
  @media (max-width: 640px) {
    .sm\\:hidden { display: none; }
    .sm\\:block { display: block; }
    .sm\\:flex { display: flex; }
  }

  @media (max-width: 768px) {
    .md\\:hidden { display: none; }
    .md\\:block { display: block; }
    .md\\:flex { display: flex; }
  }

  @media (max-width: 1024px) {
    .lg\\:hidden { display: none; }
    .lg\\:block { display: block; }
    .lg\\:flex { display: flex; }
  }
`;