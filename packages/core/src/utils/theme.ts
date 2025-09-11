// Theme utilities for components

export type ThemeMode = 'light' | 'dark' | 'auto';

/**
 * Gets the current theme mode
 */
export function getCurrentTheme(): ThemeMode {
  if (typeof window === 'undefined') return 'light';
  
  const stored = localStorage.getItem('mz-theme') as ThemeMode;
  if (stored && ['light', 'dark', 'auto'].includes(stored)) {
    return stored;
  }
  
  return 'auto';
}

/**
 * Sets the theme mode
 */
export function setTheme(mode: ThemeMode): void {
  if (typeof window === 'undefined') return;
  
  localStorage.setItem('mz-theme', mode);
  applyTheme(mode);
  
  // Dispatch theme change event
  window.dispatchEvent(
    new CustomEvent('mz-theme-change', {
      detail: { theme: mode },
    })
  );
}

/**
 * Applies the theme to the document
 */
export function applyTheme(mode: ThemeMode): void {
  if (typeof window === 'undefined') return;
  
  const root = document.documentElement;
  
  // Remove existing theme classes
  root.classList.remove('mz-theme-light', 'mz-theme-dark');
  root.removeAttribute('data-theme');
  
  if (mode === 'auto') {
    // Use system preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const resolvedTheme = prefersDark ? 'dark' : 'light';
    root.classList.add(`mz-theme-${resolvedTheme}`);
    root.setAttribute('data-theme', resolvedTheme);
  } else {
    root.classList.add(`mz-theme-${mode}`);
    root.setAttribute('data-theme', mode);
  }
}

/**
 * Gets the resolved theme (light/dark) accounting for auto mode
 */
export function getResolvedTheme(): 'light' | 'dark' {
  if (typeof window === 'undefined') return 'light';
  
  const current = getCurrentTheme();
  if (current === 'auto') {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  
  return current === 'dark' ? 'dark' : 'light';
}

/**
 * Toggles between light and dark theme
 */
export function toggleTheme(): void {
  const current = getCurrentTheme();
  const resolved = getResolvedTheme();
  
  if (current === 'auto') {
    // If auto, switch to opposite of current resolved theme
    setTheme(resolved === 'dark' ? 'light' : 'dark');
  } else {
    // Toggle between light and dark
    setTheme(current === 'dark' ? 'light' : 'dark');
  }
}

/**
 * Initialize theme system
 */
export function initializeTheme(): void {
  if (typeof window === 'undefined') return;
  
  const currentTheme = getCurrentTheme();
  applyTheme(currentTheme);
  
  // Listen for system theme changes
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  const handleSystemThemeChange = () => {
    if (getCurrentTheme() === 'auto') {
      applyTheme('auto');
    }
  };
  
  mediaQuery.addEventListener('change', handleSystemThemeChange);
  
  // Return cleanup function
  return () => {
    mediaQuery.removeEventListener('change', handleSystemThemeChange);
  };
}

/**
 * Theme change event listener
 */
export function onThemeChange(callback: (theme: ThemeMode, resolvedTheme: 'light' | 'dark') => void): () => void {
  if (typeof window === 'undefined') return () => {};
  
  const handleThemeChange = (event: Event) => {
    const customEvent = event as CustomEvent<{ theme: ThemeMode }>;
    callback(customEvent.detail.theme, getResolvedTheme());
  };
  
  window.addEventListener('mz-theme-change', handleThemeChange);
  
  // Return cleanup function
  return () => {
    window.removeEventListener('mz-theme-change', handleThemeChange);
  };
}