import { css } from 'lit';

export const componentStyles = css`
  /* Shared component utilities */
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }

  .focus-visible {
    outline: 2px solid var(--mz-color-primary-500);
    outline-offset: 2px;
  }

  .interactive {
    cursor: pointer;
    user-select: none;
  }

  .disabled {
    opacity: 0.5;
    cursor: not-allowed;
    pointer-events: none;
  }

  .loading {
    position: relative;
    pointer-events: none;
  }

  .loading::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 1rem;
    height: 1rem;
    margin: -0.5rem 0 0 -0.5rem;
    border: 2px solid currentColor;
    border-radius: 50%;
    border-top-color: transparent;
    animation: mz-spin 1s linear infinite;
  }
`;