import { css } from 'lit';

export const themeStyles = css`
  /* Theme-specific styles and utilities */
  .theme-transition {
    transition: background-color var(--mz-transition-normal),
                color var(--mz-transition-normal),
                border-color var(--mz-transition-normal);
  }

  /* Light theme utilities */
  .light-only {
    display: block;
  }

  .dark-only {
    display: none;
  }

  /* Dark theme utilities */
  :host-context([data-theme='dark']) .light-only,
  :host([data-theme='dark']) .light-only {
    display: none;
  }

  :host-context([data-theme='dark']) .dark-only,
  :host([data-theme='dark']) .dark-only {
    display: block;
  }

  /* High contrast support */
  @media (prefers-contrast: high) {
    :host {
      --mz-color-neutral-200: hsl(220, 13%, 85%);
      --mz-color-neutral-300: hsl(216, 12%, 78%);
      --mz-color-neutral-700: hsl(217, 19%, 20%);
      --mz-color-neutral-800: hsl(215, 28%, 12%);
    }
  }

  /* Reduced transparency for better accessibility */
  @media (prefers-reduced-transparency: reduce) {
    :host {
      --modal-backdrop: rgba(0, 0, 0, 0.8);
    }
  }
`;