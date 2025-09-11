// Consistent spacing system based on 4px grid
export const spacing = {
  0: '0',
  px: '1px',
  0.5: '0.125rem',    // 2px
  1: '0.25rem',       // 4px
  1.5: '0.375rem',    // 6px
  2: '0.5rem',        // 8px
  2.5: '0.625rem',    // 10px
  3: '0.75rem',       // 12px
  3.5: '0.875rem',    // 14px
  4: '1rem',          // 16px
  5: '1.25rem',       // 20px
  6: '1.5rem',        // 24px
  7: '1.75rem',       // 28px
  8: '2rem',          // 32px
  9: '2.25rem',       // 36px
  10: '2.5rem',       // 40px
  11: '2.75rem',      // 44px
  12: '3rem',         // 48px
  14: '3.5rem',       // 56px
  16: '4rem',         // 64px
  20: '5rem',         // 80px
  24: '6rem',         // 96px
  28: '7rem',         // 112px
  32: '8rem',         // 128px
  36: '9rem',         // 144px
  40: '10rem',        // 160px
  44: '11rem',        // 176px
  48: '12rem',        // 192px
  52: '13rem',        // 208px
  56: '14rem',        // 224px
  60: '15rem',        // 240px
  64: '16rem',        // 256px
  72: '18rem',        // 288px
  80: '20rem',        // 320px
  96: '24rem',        // 384px
};

// Border radius values
export const borderRadius = {
  none: '0',
  sm: '0.125rem',     // 2px
  base: '0.25rem',    // 4px
  md: '0.375rem',     // 6px
  lg: '0.5rem',       // 8px
  xl: '0.75rem',      // 12px
  '2xl': '1rem',      // 16px
  '3xl': '1.5rem',    // 24px
  full: '9999px',
};

// CSS Custom Properties
export const cssSpacing = {
  // Spacing scale
  '--mz-space-0': spacing[0],
  '--mz-space-px': spacing.px,
  '--mz-space-0-5': spacing[0.5],
  '--mz-space-1': spacing[1],
  '--mz-space-1-5': spacing[1.5],
  '--mz-space-2': spacing[2],
  '--mz-space-2-5': spacing[2.5],
  '--mz-space-3': spacing[3],
  '--mz-space-3-5': spacing[3.5],
  '--mz-space-4': spacing[4],
  '--mz-space-5': spacing[5],
  '--mz-space-6': spacing[6],
  '--mz-space-7': spacing[7],
  '--mz-space-8': spacing[8],
  '--mz-space-9': spacing[9],
  '--mz-space-10': spacing[10],
  '--mz-space-11': spacing[11],
  '--mz-space-12': spacing[12],
  '--mz-space-14': spacing[14],
  '--mz-space-16': spacing[16],
  '--mz-space-20': spacing[20],
  '--mz-space-24': spacing[24],
  '--mz-space-28': spacing[28],
  '--mz-space-32': spacing[32],
  '--mz-space-36': spacing[36],
  '--mz-space-40': spacing[40],
  '--mz-space-44': spacing[44],
  '--mz-space-48': spacing[48],
  '--mz-space-52': spacing[52],
  '--mz-space-56': spacing[56],
  '--mz-space-60': spacing[60],
  '--mz-space-64': spacing[64],
  '--mz-space-72': spacing[72],
  '--mz-space-80': spacing[80],
  '--mz-space-96': spacing[96],

  // Border radius
  '--mz-radius-none': borderRadius.none,
  '--mz-radius-sm': borderRadius.sm,
  '--mz-radius-base': borderRadius.base,
  '--mz-radius-md': borderRadius.md,
  '--mz-radius-lg': borderRadius.lg,
  '--mz-radius-xl': borderRadius.xl,
  '--mz-radius-2xl': borderRadius['2xl'],
  '--mz-radius-3xl': borderRadius['3xl'],
  '--mz-radius-full': borderRadius.full,
};