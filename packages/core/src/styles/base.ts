import { css } from 'lit';

/**
 * Base styles for all Maxzilla UI components.
 * These styles define CSS custom properties that are available to all components.
 *
 * IMPORTANT: CSS linters/IDEs may show "unresolved custom property" errors for:
 * - --mz-font-sans (line ~233)
 * - --mz-text-base (line ~234)
 * - --mz-color-primary-500 (line ~246)
 *
 * These are FALSE POSITIVES. The properties ARE defined in the :host block above
 * and work correctly in Lit Element components. This is a limitation of CSS linters
 * that don't understand Lit's Shadow DOM scoping. The build succeeds and the
 * properties work correctly at runtime.
 */
export const baseStyles = css`
  /* CSS Custom Properties for theming */
  :host {
    /* Colors */
    --mz-color-primary-50: hsl(180, 100%, 97%);
    --mz-color-primary-100: hsl(180, 84%, 92%);
    --mz-color-primary-200: hsl(180, 83%, 84%);
    --mz-color-primary-300: hsl(180, 82%, 72%);
    --mz-color-primary-400: hsl(180, 76%, 58%);
    --mz-color-primary-500: hsl(180, 70%, 45%);
    --mz-color-primary-600: hsl(180, 75%, 37%);
    --mz-color-primary-700: hsl(180, 79%, 30%);
    --mz-color-primary-800: hsl(180, 82%, 25%);
    --mz-color-primary-900: hsl(180, 86%, 20%);

    /* Neutral colors */
    --mz-color-neutral-0: hsl(0, 0%, 100%);
    --mz-color-neutral-50: hsl(210, 20%, 98%);
    --mz-color-neutral-100: hsl(220, 14%, 96%);
    --mz-color-neutral-200: hsl(220, 13%, 91%);
    --mz-color-neutral-300: hsl(216, 12%, 84%);
    --mz-color-neutral-400: hsl(218, 11%, 65%);
    --mz-color-neutral-500: hsl(220, 9%, 46%);
    --mz-color-neutral-600: hsl(215, 14%, 34%);
    --mz-color-neutral-700: hsl(217, 19%, 27%);
    --mz-color-neutral-800: hsl(215, 28%, 17%);
    --mz-color-neutral-900: hsl(221, 39%, 11%);
    --mz-color-neutral-950: hsl(224, 71%, 4%);

    /* Semantic colors - Full scale */
    --mz-color-success-50: hsl(142, 100%, 97%);
    --mz-color-success-100: hsl(142, 95%, 92%);
    --mz-color-success-200: hsl(142, 90%, 84%);
    --mz-color-success-300: hsl(142, 85%, 72%);
    --mz-color-success-400: hsl(142, 78%, 58%);
    --mz-color-success-500: hsl(142, 71%, 45%);
    --mz-color-success-600: hsl(142, 76%, 37%);
    --mz-color-success-700: hsl(142, 80%, 30%);
    --mz-color-success-800: hsl(142, 83%, 25%);
    --mz-color-success-900: hsl(142, 87%, 20%);
    --mz-color-success: hsl(142, 71%, 45%); /* Alias for 500 */

    --mz-color-warning-50: hsl(38, 100%, 97%);
    --mz-color-warning-100: hsl(38, 95%, 92%);
    --mz-color-warning-200: hsl(38, 92%, 84%);
    --mz-color-warning-300: hsl(38, 90%, 72%);
    --mz-color-warning-400: hsl(38, 91%, 58%);
    --mz-color-warning-500: hsl(38, 92%, 50%);
    --mz-color-warning-600: hsl(38, 93%, 42%);
    --mz-color-warning-700: hsl(38, 94%, 35%);
    --mz-color-warning-800: hsl(38, 95%, 28%);
    --mz-color-warning-900: hsl(38, 96%, 22%);
    --mz-color-warning: hsl(38, 92%, 50%); /* Alias for 500 */

    --mz-color-error-50: hsl(0, 100%, 97%);
    --mz-color-error-100: hsl(0, 95%, 92%);
    --mz-color-error-200: hsl(0, 90%, 84%);
    --mz-color-error-300: hsl(0, 86%, 72%);
    --mz-color-error-400: hsl(0, 85%, 65%);
    --mz-color-error-500: hsl(0, 84%, 60%);
    --mz-color-error-600: hsl(0, 84%, 52%);
    --mz-color-error-700: hsl(0, 85%, 42%);
    --mz-color-error-800: hsl(0, 86%, 35%);
    --mz-color-error-900: hsl(0, 88%, 28%);
    --mz-color-error: hsl(0, 84%, 60%); /* Alias for 500 */

    /* Accent colors for special effects */
    --mz-color-accent-purple: hsl(270, 95%, 75%);
    --mz-color-accent-blue: hsl(210, 100%, 70%);
    --mz-color-accent-pink: hsl(320, 100%, 75%);
    --mz-color-accent-orange: hsl(25, 100%, 65%);
    --mz-color-accent-indigo: hsl(243, 100%, 70%);
    --mz-color-accent-teal: hsl(175, 100%, 45%);
    --mz-color-accent-lime: hsl(90, 100%, 50%);
    --mz-color-accent-amber: hsl(45, 100%, 60%);

    /* Typography */
    --mz-font-sans: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    --mz-font-mono: 'JetBrains Mono', 'Fira Code', Consolas, Monaco, monospace;

    /* Font sizes - Responsive with clamp */
    --mz-text-xs: clamp(0.75rem, 0.7rem + 0.25vw, 0.8rem);
    --mz-text-sm: clamp(0.875rem, 0.8rem + 0.375vw, 0.95rem);
    --mz-text-base: clamp(1rem, 0.9rem + 0.5vw, 1.125rem);
    --mz-text-lg: clamp(1.125rem, 1rem + 0.625vw, 1.25rem);
    --mz-text-xl: clamp(1.25rem, 1.1rem + 0.75vw, 1.5rem);
    --mz-text-2xl: clamp(1.5rem, 1.3rem + 1vw, 2rem);
    --mz-text-3xl: clamp(1.875rem, 1.6rem + 1.375vw, 2.5rem);
    --mz-text-4xl: clamp(2.25rem, 1.9rem + 1.75vw, 3rem);
    --mz-text-5xl: clamp(3rem, 2.5rem + 2.5vw, 4rem);
    --mz-text-6xl: clamp(3.75rem, 3rem + 3.75vw, 5rem);

    /* Font weights */
    --mz-font-light: 300;
    --mz-font-normal: 400;
    --mz-font-medium: 500;
    --mz-font-semibold: 600;
    --mz-font-bold: 700;
    --mz-font-extrabold: 800;

    /* Line heights */
    --mz-leading-tight: 1.25;
    --mz-leading-snug: 1.375;
    --mz-leading-normal: 1.5;
    --mz-leading-relaxed: 1.625;
    --mz-leading-loose: 2;

    /* Letter spacing */
    --mz-tracking-tighter: -0.05em;
    --mz-tracking-tight: -0.025em;
    --mz-tracking-normal: 0;
    --mz-tracking-wide: 0.025em;
    --mz-tracking-wider: 0.05em;
    --mz-tracking-widest: 0.1em;

    /* Spacing - Complete scale */
    --mz-space-0: 0;
    --mz-space-px: 1px;
    --mz-space-0-5: 0.125rem;
    --mz-space-1: 0.25rem;
    --mz-space-1-5: 0.375rem;
    --mz-space-2: 0.5rem;
    --mz-space-2-5: 0.625rem;
    --mz-space-3: 0.75rem;
    --mz-space-3-5: 0.875rem;
    --mz-space-4: 1rem;
    --mz-space-5: 1.25rem;
    --mz-space-6: 1.5rem;
    --mz-space-7: 1.75rem;
    --mz-space-8: 2rem;
    --mz-space-9: 2.25rem;
    --mz-space-10: 2.5rem;
    --mz-space-12: 3rem;
    --mz-space-14: 3.5rem;
    --mz-space-16: 4rem;
    --mz-space-20: 5rem;
    --mz-space-24: 6rem;
    --mz-space-28: 7rem;
    --mz-space-32: 8rem;
    --mz-space-36: 9rem;
    --mz-space-40: 10rem;
    --mz-space-44: 11rem;
    --mz-space-48: 12rem;
    --mz-space-52: 13rem;
    --mz-space-56: 14rem;
    --mz-space-60: 15rem;
    --mz-space-64: 16rem;
    --mz-space-72: 18rem;
    --mz-space-80: 20rem;
    --mz-space-96: 24rem;

    /* Border radius */
    --mz-radius-none: 0;
    --mz-radius-sm: 0.125rem;
    --mz-radius-base: 0.25rem;
    --mz-radius-md: 0.375rem;
    --mz-radius-lg: 0.5rem;
    --mz-radius-xl: 0.75rem;
    --mz-radius-2xl: 1rem;
    --mz-radius-3xl: 1.5rem;
    --mz-radius-full: 9999px;

    /* Shadows - Box shadows */
    --mz-shadow-none: none;
    --mz-shadow-xs: 0 1px 2px 0 rgb(0 0 0 / 0.05);
    --mz-shadow-sm: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
    --mz-shadow-base: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
    --mz-shadow-md: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
    --mz-shadow-lg: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
    --mz-shadow-xl: 0 25px 50px -12px rgb(0 0 0 / 0.25);
    --mz-shadow-2xl: 0 50px 100px -20px rgb(0 0 0 / 0.25);

    /* Colored shadows for interactive elements */
    --mz-shadow-primary-glow: 0 0 20px rgb(6 182 212 / 0.3);
    --mz-shadow-primary-glow-hover: 0 0 30px rgb(6 182 212 / 0.4);
    --mz-shadow-error-glow: 0 0 20px rgb(239 68 68 / 0.3);
    --mz-shadow-success-glow: 0 0 20px rgb(34 197 94 / 0.3);
    --mz-shadow-glow: 0 0 20px rgb(6 182 212 / 0.3);

    /* Inner shadows for inset effects */
    --mz-shadow-inner: inset 0 2px 4px 0 rgb(0 0 0 / 0.05);
    --mz-shadow-inner-lg: inset 0 4px 8px 0 rgb(0 0 0 / 0.1);

    /* Container max-widths */
    --mz-container-sm: 40rem;
    --mz-container-md: 48rem;
    --mz-container-lg: 64rem;
    --mz-container-xl: 80rem;

    /* Transitions */
    --mz-transition-fast: 150ms cubic-bezier(0.4, 0, 0.2, 1);
    --mz-transition-normal: 200ms cubic-bezier(0.4, 0, 0.2, 1);
    --mz-transition-slow: 300ms cubic-bezier(0.4, 0, 0.2, 1);
    --mz-transition-spring: 300ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  /* Dark mode overrides */
  :host([data-theme='dark']),
  :host-context([data-theme='dark']) {
    --mz-color-neutral-0: hsl(224, 71%, 4%);
    --mz-color-neutral-50: hsl(221, 39%, 11%);
    --mz-color-neutral-100: hsl(215, 28%, 17%);
    --mz-color-neutral-200: hsl(217, 19%, 27%);
    --mz-color-neutral-300: hsl(215, 14%, 34%);
    --mz-color-neutral-400: hsl(220, 9%, 46%);
    --mz-color-neutral-500: hsl(218, 11%, 65%);
    --mz-color-neutral-600: hsl(216, 12%, 84%);
    --mz-color-neutral-700: hsl(220, 13%, 91%);
    --mz-color-neutral-800: hsl(220, 14%, 96%);
    --mz-color-neutral-900: hsl(210, 20%, 98%);
    --mz-color-neutral-950: hsl(0, 0%, 100%);

    /* Brighter primary for dark mode */
    --mz-color-primary-500: hsl(180, 76%, 58%);
    --mz-color-primary-600: hsl(180, 82%, 72%);
    --mz-color-primary-700: hsl(180, 83%, 84%);
  }

  /* Base component styling */
  /* CSS linters may show "unresolved custom property" errors for the properties below,
   * but these are false positives - the properties are defined above in the same :host block
   * and are correctly scoped for Lit components */
  :host {
    box-sizing: border-box;
    font-family: var(--mz-font-sans), sans-serif;
    font-size: var(--mz-text-base);
    line-height: 1.5;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: border-box;
  }

  /* Focus styles */
  :host(:focus-visible) {
    outline: 2px solid var(--mz-color-primary-500);
    outline-offset: 2px;
  }
`;