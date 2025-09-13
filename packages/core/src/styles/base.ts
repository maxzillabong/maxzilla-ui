import { css } from 'lit';

/**
 * Base styles for all Maxzilla UI components.
 * These styles define CSS custom properties that are available to all components.
 * Note: CSS linters may show "unresolved custom property" errors, but these are
 * false positives - the properties are defined and scoped correctly for Lit components.
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

    /* Semantic colors */
    --mz-color-success: hsl(142, 71%, 45%);
    --mz-color-warning: hsl(38, 92%, 50%);
    --mz-color-error: hsl(0, 84%, 60%);

    /* Typography */
    --mz-font-sans: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    --mz-font-mono: 'JetBrains Mono', 'Fira Code', Consolas, Monaco, monospace;

    /* Font sizes */
    --mz-text-xs: clamp(0.75rem, 0.7rem + 0.25vw, 0.8rem);
    --mz-text-sm: clamp(0.875rem, 0.8rem + 0.375vw, 0.95rem);
    --mz-text-base: clamp(1rem, 0.9rem + 0.5vw, 1.125rem);
    --mz-text-lg: clamp(1.125rem, 1rem + 0.625vw, 1.25rem);
    --mz-text-xl: clamp(1.25rem, 1.1rem + 0.75vw, 1.5rem);

    /* Spacing */
    --mz-space-1: 0.25rem;
    --mz-space-2: 0.5rem;
    --mz-space-3: 0.75rem;
    --mz-space-4: 1rem;
    --mz-space-6: 1.5rem;
    --mz-space-8: 2rem;

    /* Border radius */
    --mz-radius-sm: 0.125rem;
    --mz-radius-base: 0.25rem;
    --mz-radius-md: 0.375rem;
    --mz-radius-lg: 0.5rem;
    --mz-radius-xl: 0.75rem;
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