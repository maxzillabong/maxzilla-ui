// Border system for consistent component styling
export const borders = {
  // Border widths
  width: {
    0: '0',
    DEFAULT: '1px',
    2: '2px',
    4: '4px',
    8: '8px',
  },

  // Border styles
  style: {
    solid: 'solid',
    dashed: 'dashed',
    dotted: 'dotted',
    double: 'double',
    none: 'none',
  },

  // Border colors (references to color tokens)
  color: {
    transparent: 'transparent',
    current: 'currentColor',
    neutral: {
      100: 'var(--mz-color-neutral-100)',
      200: 'var(--mz-color-neutral-200)',
      300: 'var(--mz-color-neutral-300)',
      400: 'var(--mz-color-neutral-400)',
      500: 'var(--mz-color-neutral-500)',
      600: 'var(--mz-color-neutral-600)',
      700: 'var(--mz-color-neutral-700)',
      800: 'var(--mz-color-neutral-800)',
    },
    primary: {
      200: 'var(--mz-color-primary-200)',
      300: 'var(--mz-color-primary-300)',
      400: 'var(--mz-color-primary-400)',
      500: 'var(--mz-color-primary-500)',
      600: 'var(--mz-color-primary-600)',
    },
    error: {
      300: 'var(--mz-color-error-500)',
      500: 'var(--mz-color-error-500)',
    },
    success: {
      300: 'var(--mz-color-success-500)',
      500: 'var(--mz-color-success-500)',
    },
    warning: {
      300: 'var(--mz-color-warning-500)',
      500: 'var(--mz-color-warning-500)',
    },
  },

  // Common border combinations
  preset: {
    none: 'none',
    light: '1px solid var(--mz-color-neutral-200)',
    medium: '1px solid var(--mz-color-neutral-300)',
    dark: '1px solid var(--mz-color-neutral-400)',
    primary: '1px solid var(--mz-color-primary-400)',
    primaryStrong: '2px solid var(--mz-color-primary-500)',
    error: '1px solid var(--mz-color-error-500)',
    success: '1px solid var(--mz-color-success-500)',
    warning: '1px solid var(--mz-color-warning-500)',
    focus: '2px solid var(--mz-color-primary-500)',
    focusVisible: '2px solid var(--mz-color-primary-500)',
  },
};

// CSS Custom Properties
export const cssBorders = {
  // Border widths
  '--mz-border-0': borders.width[0],
  '--mz-border-DEFAULT': borders.width.DEFAULT,
  '--mz-border-2': borders.width[2],
  '--mz-border-4': borders.width[4],
  '--mz-border-8': borders.width[8],

  // Common border presets
  '--mz-border-none': borders.preset.none,
  '--mz-border-light': borders.preset.light,
  '--mz-border-medium': borders.preset.medium,
  '--mz-border-dark': borders.preset.dark,
  '--mz-border-primary': borders.preset.primary,
  '--mz-border-primary-strong': borders.preset.primaryStrong,
  '--mz-border-error': borders.preset.error,
  '--mz-border-success': borders.preset.success,
  '--mz-border-warning': borders.preset.warning,
  '--mz-border-focus': borders.preset.focus,
  '--mz-border-focus-visible': borders.preset.focusVisible,
};