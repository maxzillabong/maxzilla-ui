// Base color palette inspired by Aceternity's modern aesthetic
export const colors = {
  // Primary colors - modern teal/cyan palette
  primary: {
    50: 'hsl(180, 100%, 97%)',
    100: 'hsl(180, 84%, 92%)',
    200: 'hsl(180, 83%, 84%)',
    300: 'hsl(180, 82%, 72%)',
    400: 'hsl(180, 76%, 58%)',
    500: 'hsl(180, 70%, 45%)',
    600: 'hsl(180, 75%, 37%)',
    700: 'hsl(180, 79%, 30%)',
    800: 'hsl(180, 82%, 25%)',
    900: 'hsl(180, 86%, 20%)',
    950: 'hsl(180, 92%, 12%)',
  },

  // Neutral colors - clean grays for modern UI
  neutral: {
    0: 'hsl(0, 0%, 100%)',
    50: 'hsl(210, 20%, 98%)',
    100: 'hsl(220, 14%, 96%)',
    200: 'hsl(220, 13%, 91%)',
    300: 'hsl(216, 12%, 84%)',
    400: 'hsl(218, 11%, 65%)',
    500: 'hsl(220, 9%, 46%)',
    600: 'hsl(215, 14%, 34%)',
    700: 'hsl(217, 19%, 27%)',
    800: 'hsl(215, 28%, 17%)',
    900: 'hsl(221, 39%, 11%)',
    950: 'hsl(224, 71%, 4%)',
  },

  // Semantic colors
  success: {
    50: 'hsl(138, 76%, 97%)',
    500: 'hsl(142, 71%, 45%)',
    600: 'hsl(142, 76%, 36%)',
    900: 'hsl(140, 84%, 10%)',
  },

  warning: {
    50: 'hsl(48, 100%, 96%)',
    500: 'hsl(38, 92%, 50%)',
    600: 'hsl(32, 95%, 44%)',
    900: 'hsl(20, 79%, 17%)',
  },

  error: {
    50: 'hsl(0, 86%, 97%)',
    500: 'hsl(0, 84%, 60%)',
    600: 'hsl(0, 72%, 51%)',
    900: 'hsl(0, 63%, 31%)',
  },

  // Accent colors for effects and highlights
  accent: {
    purple: 'hsl(270, 95%, 75%)',
    blue: 'hsl(210, 100%, 70%)',
    pink: 'hsl(320, 100%, 75%)',
    orange: 'hsl(25, 100%, 65%)',
  },
};

// CSS Custom Properties
export const cssColors = {
  // Primary
  '--mz-color-primary-50': colors.primary[50],
  '--mz-color-primary-100': colors.primary[100],
  '--mz-color-primary-200': colors.primary[200],
  '--mz-color-primary-300': colors.primary[300],
  '--mz-color-primary-400': colors.primary[400],
  '--mz-color-primary-500': colors.primary[500],
  '--mz-color-primary-600': colors.primary[600],
  '--mz-color-primary-700': colors.primary[700],
  '--mz-color-primary-800': colors.primary[800],
  '--mz-color-primary-900': colors.primary[900],
  '--mz-color-primary-950': colors.primary[950],

  // Neutral
  '--mz-color-neutral-0': colors.neutral[0],
  '--mz-color-neutral-50': colors.neutral[50],
  '--mz-color-neutral-100': colors.neutral[100],
  '--mz-color-neutral-200': colors.neutral[200],
  '--mz-color-neutral-300': colors.neutral[300],
  '--mz-color-neutral-400': colors.neutral[400],
  '--mz-color-neutral-500': colors.neutral[500],
  '--mz-color-neutral-600': colors.neutral[600],
  '--mz-color-neutral-700': colors.neutral[700],
  '--mz-color-neutral-800': colors.neutral[800],
  '--mz-color-neutral-900': colors.neutral[900],
  '--mz-color-neutral-950': colors.neutral[950],

  // Semantic
  '--mz-color-success-50': colors.success[50],
  '--mz-color-success-500': colors.success[500],
  '--mz-color-success-600': colors.success[600],
  '--mz-color-success-900': colors.success[900],

  '--mz-color-warning-50': colors.warning[50],
  '--mz-color-warning-500': colors.warning[500],
  '--mz-color-warning-600': colors.warning[600],
  '--mz-color-warning-900': colors.warning[900],

  '--mz-color-error-50': colors.error[50],
  '--mz-color-error-500': colors.error[500],
  '--mz-color-error-600': colors.error[600],
  '--mz-color-error-900': colors.error[900],

  // Accent
  '--mz-color-accent-purple': colors.accent.purple,
  '--mz-color-accent-blue': colors.accent.blue,
  '--mz-color-accent-pink': colors.accent.pink,
  '--mz-color-accent-orange': colors.accent.orange,
};