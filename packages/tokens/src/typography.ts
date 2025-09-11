// Typography system for modern, readable interfaces
export const typography = {
  // Font families
  fontFamily: {
    sans: [
      'Inter',
      '-apple-system',
      'BlinkMacSystemFont',
      'Segoe UI',
      'Roboto',
      'Oxygen',
      'Ubuntu',
      'Cantarell',
      'sans-serif',
    ].join(', '),
    mono: [
      'JetBrains Mono',
      'Fira Code',
      'Consolas',
      'Monaco',
      'Courier New',
      'monospace',
    ].join(', '),
  },

  // Font sizes - fluid typography scale
  fontSize: {
    xs: 'clamp(0.75rem, 0.7rem + 0.25vw, 0.8rem)',      // 12-13px
    sm: 'clamp(0.875rem, 0.8rem + 0.375vw, 0.95rem)',   // 14-15px
    base: 'clamp(1rem, 0.9rem + 0.5vw, 1.125rem)',      // 16-18px
    lg: 'clamp(1.125rem, 1rem + 0.625vw, 1.25rem)',     // 18-20px
    xl: 'clamp(1.25rem, 1.1rem + 0.75vw, 1.5rem)',      // 20-24px
    '2xl': 'clamp(1.5rem, 1.3rem + 1vw, 2rem)',         // 24-32px
    '3xl': 'clamp(1.875rem, 1.6rem + 1.375vw, 2.5rem)', // 30-40px
    '4xl': 'clamp(2.25rem, 1.9rem + 1.75vw, 3rem)',     // 36-48px
    '5xl': 'clamp(3rem, 2.5rem + 2.5vw, 4rem)',         // 48-64px
    '6xl': 'clamp(3.75rem, 3rem + 3.75vw, 5.5rem)',     // 60-88px
  },

  // Font weights
  fontWeight: {
    light: '300',
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800',
  },

  // Line heights
  lineHeight: {
    tight: '1.25',
    snug: '1.375',
    normal: '1.5',
    relaxed: '1.625',
    loose: '2',
  },

  // Letter spacing
  letterSpacing: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em',
  },
};

// CSS Custom Properties
export const cssTypography = {
  // Font families
  '--mz-font-sans': typography.fontFamily.sans,
  '--mz-font-mono': typography.fontFamily.mono,

  // Font sizes
  '--mz-text-xs': typography.fontSize.xs,
  '--mz-text-sm': typography.fontSize.sm,
  '--mz-text-base': typography.fontSize.base,
  '--mz-text-lg': typography.fontSize.lg,
  '--mz-text-xl': typography.fontSize.xl,
  '--mz-text-2xl': typography.fontSize['2xl'],
  '--mz-text-3xl': typography.fontSize['3xl'],
  '--mz-text-4xl': typography.fontSize['4xl'],
  '--mz-text-5xl': typography.fontSize['5xl'],
  '--mz-text-6xl': typography.fontSize['6xl'],

  // Font weights
  '--mz-font-light': typography.fontWeight.light,
  '--mz-font-normal': typography.fontWeight.normal,
  '--mz-font-medium': typography.fontWeight.medium,
  '--mz-font-semibold': typography.fontWeight.semibold,
  '--mz-font-bold': typography.fontWeight.bold,
  '--mz-font-extrabold': typography.fontWeight.extrabold,

  // Line heights
  '--mz-leading-tight': typography.lineHeight.tight,
  '--mz-leading-snug': typography.lineHeight.snug,
  '--mz-leading-normal': typography.lineHeight.normal,
  '--mz-leading-relaxed': typography.lineHeight.relaxed,
  '--mz-leading-loose': typography.lineHeight.loose,

  // Letter spacing
  '--mz-tracking-tighter': typography.letterSpacing.tighter,
  '--mz-tracking-tight': typography.letterSpacing.tight,
  '--mz-tracking-normal': typography.letterSpacing.normal,
  '--mz-tracking-wide': typography.letterSpacing.wide,
  '--mz-tracking-wider': typography.letterSpacing.wider,
  '--mz-tracking-widest': typography.letterSpacing.widest,
};