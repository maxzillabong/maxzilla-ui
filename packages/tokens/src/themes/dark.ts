import type { Theme } from './types';

export const darkTheme: Theme = {
  name: 'dark',
  type: 'dark',
  colors: {
    // Surface colors - modern dark backgrounds
    background: 'hsl(224, 71%, 4%)',
    surface: 'hsl(221, 39%, 11%)',
    surfaceElevated: 'hsl(215, 28%, 17%)',
    surfaceHover: 'hsl(217, 19%, 27%)',

    // Text colors - high contrast on dark
    text: 'hsl(210, 20%, 98%)',
    textSecondary: 'hsl(218, 11%, 65%)',
    textTertiary: 'hsl(220, 9%, 46%)',
    textInverse: 'hsl(215, 28%, 17%)',

    // Interactive colors - brighter teal for dark mode
    primary: 'hsl(180, 76%, 58%)',
    primaryHover: 'hsl(180, 82%, 72%)',
    primaryActive: 'hsl(180, 83%, 84%)',
    primaryText: 'hsl(224, 71%, 4%)',

    // Border colors - subtle on dark
    border: 'hsl(217, 19%, 27%)',
    borderLight: 'hsl(221, 39%, 11%)',
    borderStrong: 'hsl(215, 14%, 34%)',
    borderFocus: 'hsl(180, 76%, 58%)',

    // Error state - adjusted for dark mode
    error: 'hsl(0, 84%, 70%)',
    errorHover: 'hsl(0, 84%, 80%)',
    errorText: 'hsl(0, 84%, 70%)',
    errorBackground: 'hsl(0, 63%, 15%)',

    // Success state - adjusted for dark mode
    success: 'hsl(142, 71%, 55%)',
    successHover: 'hsl(142, 71%, 65%)',
    successText: 'hsl(142, 71%, 55%)',
    successBackground: 'hsl(140, 84%, 15%)',

    // Warning state - adjusted for dark mode
    warning: 'hsl(38, 92%, 60%)',
    warningHover: 'hsl(38, 92%, 70%)',
    warningText: 'hsl(38, 92%, 60%)',
    warningBackground: 'hsl(20, 79%, 15%)',

    // Overlay colors
    overlay: 'hsl(0, 0%, 0%, 0.7)',
    backdrop: 'hsl(0, 0%, 0%, 0.4)',
  },
  shadows: {
    sm: '0 1px 3px 0 rgb(0 0 0 / 0.3), 0 1px 2px -1px rgb(0 0 0 / 0.3)',
    md: '0 10px 15px -3px rgb(0 0 0 / 0.3), 0 4px 6px -4px rgb(0 0 0 / 0.3)',
    lg: '0 20px 25px -5px rgb(0 0 0 / 0.4), 0 8px 10px -6px rgb(0 0 0 / 0.4)',
    xl: '0 25px 50px -12px rgb(0 0 0 / 0.5)',
    focus: '0 0 0 2px hsl(180, 76%, 58%)',
    glow: '0 0 20px rgb(34 211 238 / 0.4)',
  },
};