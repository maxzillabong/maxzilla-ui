import { css } from 'lit';

export const animationStyles = css`
  /* Keyframes for common animations */
  @keyframes mz-fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes mz-fade-out {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }

  @keyframes mz-slide-up {
    from {
      transform: translateY(10px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes mz-slide-down {
    from {
      transform: translateY(-10px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes mz-scale-up {
    from {
      transform: scale(0.95);
      opacity: 0;
    }
    to {
      transform: scale(1);
      opacity: 1;
    }
  }

  @keyframes mz-scale-down {
    from {
      transform: scale(1.05);
      opacity: 0;
    }
    to {
      transform: scale(1);
      opacity: 1;
    }
  }

  @keyframes mz-pulse {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
  }

  @keyframes mz-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  @keyframes mz-bounce {
    0%, 100% {
      transform: translateY(-25%);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    50% {
      transform: none;
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
  }

  @keyframes mz-shimmer {
    0% {
      background-position: -200px 0;
    }
    100% {
      background-position: calc(200px + 100%) 0;
    }
  }

  @keyframes mz-glow {
    0%, 100% {
      box-shadow: 0 0 5px var(--mz-color-primary-500);
    }
    50% {
      box-shadow: 0 0 20px var(--mz-color-primary-500), 0 0 30px var(--mz-color-primary-500);
    }
  }

  /* Utility classes */
  .mz-animate-fade-in {
    animation: mz-fade-in var(--mz-transition-normal) ease-out;
  }

  .mz-animate-fade-out {
    animation: mz-fade-out var(--mz-transition-normal) ease-in;
  }

  .mz-animate-slide-up {
    animation: mz-slide-up var(--mz-transition-slow) ease-out;
  }

  .mz-animate-slide-down {
    animation: mz-slide-down var(--mz-transition-slow) ease-out;
  }

  .mz-animate-scale-up {
    animation: mz-scale-up var(--mz-transition-spring) ease-out;
  }

  .mz-animate-scale-down {
    animation: mz-scale-down var(--mz-transition-spring) ease-out;
  }

  .mz-animate-pulse {
    animation: mz-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  }

  .mz-animate-spin {
    animation: mz-spin 1s linear infinite;
  }

  .mz-animate-bounce {
    animation: mz-bounce 1s infinite;
  }

  .mz-animate-shimmer {
    animation: mz-shimmer 2s infinite linear;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
    background-size: 200px 100%;
  }

  .mz-animate-glow {
    animation: mz-glow 2s ease-in-out infinite alternate;
  }

  /* Reduced motion support */
  @media (prefers-reduced-motion: reduce) {
    .mz-animate-fade-in,
    .mz-animate-fade-out,
    .mz-animate-slide-up,
    .mz-animate-slide-down,
    .mz-animate-scale-up,
    .mz-animate-scale-down {
      animation-duration: 0.01s;
    }

    .mz-animate-pulse,
    .mz-animate-spin,
    .mz-animate-bounce,
    .mz-animate-shimmer,
    .mz-animate-glow {
      animation: none;
    }
  }
`;