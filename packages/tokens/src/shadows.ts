// Shadow system for depth and elevation
export const shadows = {
  // Box shadows - subtle to dramatic
  boxShadow: {
    none: 'none',
    xs: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    sm: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
    base: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    md: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
    lg: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
    xl: '0 25px 50px -12px rgb(0 0 0 / 0.25)',
    '2xl': '0 50px 100px -20px rgb(0 0 0 / 0.25)',
    
    // Colored shadows for interactive elements
    primaryGlow: '0 0 20px rgb(6 182 212 / 0.3)',
    primaryGlowHover: '0 0 30px rgb(6 182 212 / 0.4)',
    errorGlow: '0 0 20px rgb(239 68 68 / 0.3)',
    successGlow: '0 0 20px rgb(34 197 94 / 0.3)',
    
    // Inner shadows for inset effects
    inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
    innerLg: 'inset 0 4px 8px 0 rgb(0 0 0 / 0.1)',
  },

  // Drop shadows for filter property
  dropShadow: {
    none: 'none',
    sm: 'drop-shadow(0 1px 1px rgb(0 0 0 / 0.05))',
    base: 'drop-shadow(0 1px 2px rgb(0 0 0 / 0.1)) drop-shadow(0 1px 1px rgb(0 0 0 / 0.06))',
    md: 'drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06))',
    lg: 'drop-shadow(0 10px 8px rgb(0 0 0 / 0.04)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.1))',
    xl: 'drop-shadow(0 20px 13px rgb(0 0 0 / 0.03)) drop-shadow(0 8px 5px rgb(0 0 0 / 0.08))',
    '2xl': 'drop-shadow(0 25px 25px rgb(0 0 0 / 0.15))',
  },

  // Text shadows for typography effects
  textShadow: {
    none: 'none',
    sm: '1px 1px 2px rgb(0 0 0 / 0.5)',
    base: '2px 2px 4px rgb(0 0 0 / 0.5)',
    lg: '4px 4px 8px rgb(0 0 0 / 0.5)',
    glow: '0 0 10px currentColor',
    glowLg: '0 0 20px currentColor',
  },
};

// CSS Custom Properties
export const cssShadows = {
  // Box shadows
  '--mz-shadow-none': shadows.boxShadow.none,
  '--mz-shadow-xs': shadows.boxShadow.xs,
  '--mz-shadow-sm': shadows.boxShadow.sm,
  '--mz-shadow-base': shadows.boxShadow.base,
  '--mz-shadow-md': shadows.boxShadow.md,
  '--mz-shadow-lg': shadows.boxShadow.lg,
  '--mz-shadow-xl': shadows.boxShadow.xl,
  '--mz-shadow-2xl': shadows.boxShadow['2xl'],
  '--mz-shadow-inner': shadows.boxShadow.inner,
  '--mz-shadow-inner-lg': shadows.boxShadow.innerLg,

  // Colored glows
  '--mz-shadow-primary-glow': shadows.boxShadow.primaryGlow,
  '--mz-shadow-primary-glow-hover': shadows.boxShadow.primaryGlowHover,
  '--mz-shadow-error-glow': shadows.boxShadow.errorGlow,
  '--mz-shadow-success-glow': shadows.boxShadow.successGlow,

  // Drop shadows
  '--mz-drop-shadow-none': shadows.dropShadow.none,
  '--mz-drop-shadow-sm': shadows.dropShadow.sm,
  '--mz-drop-shadow-base': shadows.dropShadow.base,
  '--mz-drop-shadow-md': shadows.dropShadow.md,
  '--mz-drop-shadow-lg': shadows.dropShadow.lg,
  '--mz-drop-shadow-xl': shadows.dropShadow.xl,
  '--mz-drop-shadow-2xl': shadows.dropShadow['2xl'],

  // Text shadows
  '--mz-text-shadow-none': shadows.textShadow.none,
  '--mz-text-shadow-sm': shadows.textShadow.sm,
  '--mz-text-shadow-base': shadows.textShadow.base,
  '--mz-text-shadow-lg': shadows.textShadow.lg,
  '--mz-text-shadow-glow': shadows.textShadow.glow,
  '--mz-text-shadow-glow-lg': shadows.textShadow.glowLg,
};