// Type definitions for the theme system
export interface Theme {
  name: string;
  type: 'light' | 'dark';
  colors: {
    // Surface colors
    background: string;
    surface: string;
    surfaceElevated: string;
    surfaceHover: string;
    
    // Text colors
    text: string;
    textSecondary: string;
    textTertiary: string;
    textInverse: string;
    
    // Interactive colors
    primary: string;
    primaryHover: string;
    primaryActive: string;
    primaryText: string;
    
    // Border colors
    border: string;
    borderLight: string;
    borderStrong: string;
    borderFocus: string;
    
    // State colors
    error: string;
    errorHover: string;
    errorText: string;
    errorBackground: string;
    
    success: string;
    successHover: string;
    successText: string;
    successBackground: string;
    
    warning: string;
    warningHover: string;
    warningText: string;
    warningBackground: string;
    
    // Overlay colors
    overlay: string;
    backdrop: string;
  };
  shadows: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
    focus: string;
    glow: string;
  };
}

export interface ThemeConfig {
  default: 'light' | 'dark';
  themes: {
    light: Theme;
    dark: Theme;
  };
}