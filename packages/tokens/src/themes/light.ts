import type { Theme } from './types';

export const lightTheme: Theme = {
  name: 'light',
  type: 'light',
  colors: {
    // Surface colors - clean, bright backgrounds
    background: 'hsl(0, 0%, 100%)',
    surface: 'hsl(210, 20%, 98%)',
    surfaceElevated: 'hsl(0, 0%, 100%)',
    surfaceHover: 'hsl(220, 14%, 96%)',

    // Text colors - high contrast for readability
    text: 'hsl(215, 28%, 17%)',
    textSecondary: 'hsl(220, 9%, 46%)',
    textTertiary: 'hsl(218, 11%, 65%)',
    textInverse: 'hsl(0, 0%, 100%)',

    // Interactive colors - teal primary palette
    primary: 'hsl(180, 70%, 45%)',
    primaryHover: 'hsl(180, 75%, 37%)',
    primaryActive: 'hsl(180, 79%, 30%)',
    primaryText: 'hsl(0, 0%, 100%)',

    // Border colors - subtle to visible
    border: 'hsl(220, 13%, 91%)',
    borderLight: 'hsl(210, 20%, 98%)',
    borderStrong: 'hsl(216, 12%, 84%)',
    borderFocus: 'hsl(180, 70%, 45%)',

    // Error state
    error: 'hsl(0, 84%, 60%)',
    errorHover: 'hsl(0, 72%, 51%)',
    errorText: 'hsl(0, 63%, 31%)',
    errorBackground: 'hsl(0, 86%, 97%)',

    // Success state
    success: 'hsl(142, 71%, 45%)',
    successHover: 'hsl(142, 76%, 36%)',
    successText: 'hsl(140, 84%, 10%)',
    successBackground: 'hsl(138, 76%, 97%)',

    // Warning state
    warning: 'hsl(38, 92%, 50%)',
    warningHover: 'hsl(32, 95%, 44%)',
    warningText: 'hsl(20, 79%, 17%)',
    warningBackground: 'hsl(48, 100%, 96%)',

    // Overlay colors
    overlay: 'hsl(0, 0%, 0%, 0.5)',
    backdrop: 'hsl(0, 0%, 0%, 0.25)',
  },
  shadows: {
    sm: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
    md: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
    lg: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
    xl: '0 25px 50px -12px rgb(0 0 0 / 0.25)',
    focus: '0 0 0 2px hsl(180, 70%, 45%)',
    glow: '0 0 20px rgb(6 182 212 / 0.3)',
  },
};