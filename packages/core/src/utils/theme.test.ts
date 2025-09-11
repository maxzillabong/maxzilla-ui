import { expect } from '@open-wc/testing';
import {
  getCurrentTheme,
  setTheme,
  applyTheme,
  getResolvedTheme,
  toggleTheme,
  initializeTheme,
  onThemeChange
} from './theme.js';

describe('Theme Utils', () => {
  let originalLocalStorage: Storage;
  let mockLocalStorage: { [key: string]: string };

  beforeEach(() => {
    // Mock localStorage
    originalLocalStorage = window.localStorage;
    mockLocalStorage = {};
    
    Object.defineProperty(window, 'localStorage', {
      value: {
        getItem: (key: string) => mockLocalStorage[key] || null,
        setItem: (key: string, value: string) => {
          mockLocalStorage[key] = value;
        },
        removeItem: (key: string) => {
          delete mockLocalStorage[key];
        },
        clear: () => {
          mockLocalStorage = {};
        }
      },
      writable: true
    });

    // Reset DOM classes
    document.documentElement.classList.remove('mz-theme-light', 'mz-theme-dark');
    document.documentElement.removeAttribute('data-theme');
  });

  afterEach(() => {
    // Restore original localStorage
    Object.defineProperty(window, 'localStorage', {
      value: originalLocalStorage,
      writable: true
    });
  });

  describe('getCurrentTheme', () => {
    it('should return "auto" by default', () => {
      expect(getCurrentTheme()).to.equal('auto');
    });

    it('should return stored theme from localStorage', () => {
      mockLocalStorage['mz-theme'] = 'dark';
      expect(getCurrentTheme()).to.equal('dark');
    });

    it('should return "auto" for invalid stored values', () => {
      mockLocalStorage['mz-theme'] = 'invalid';
      expect(getCurrentTheme()).to.equal('auto');
    });

    it('should handle valid theme values', () => {
      const validThemes = ['light', 'dark', 'auto'];
      
      validThemes.forEach(theme => {
        mockLocalStorage['mz-theme'] = theme;
        expect(getCurrentTheme()).to.equal(theme);
      });
    });
  });

  describe('setTheme', () => {
    it('should set theme in localStorage', () => {
      setTheme('dark');
      expect(mockLocalStorage['mz-theme']).to.equal('dark');
    });

    it('should apply theme to DOM', () => {
      setTheme('dark');
      expect(document.documentElement.classList.contains('mz-theme-dark')).to.be.true;
      expect(document.documentElement.getAttribute('data-theme')).to.equal('dark');
    });

    it('should dispatch theme change event', (done) => {
      window.addEventListener('mz-theme-change', (event: Event) => {
        const customEvent = event as CustomEvent;
        expect(customEvent.detail.theme).to.equal('light');
        done();
      });
      
      setTheme('light');
    });
  });

  describe('applyTheme', () => {
    it('should apply light theme', () => {
      applyTheme('light');
      expect(document.documentElement.classList.contains('mz-theme-light')).to.be.true;
      expect(document.documentElement.getAttribute('data-theme')).to.equal('light');
    });

    it('should apply dark theme', () => {
      applyTheme('dark');
      expect(document.documentElement.classList.contains('mz-theme-dark')).to.be.true;
      expect(document.documentElement.getAttribute('data-theme')).to.equal('dark');
    });

    it('should handle auto theme based on system preference', () => {
      // Mock matchMedia for dark mode
      Object.defineProperty(window, 'matchMedia', {
        writable: true,
        value: () => ({
          matches: true, // Dark mode
          addEventListener: () => {},
          removeEventListener: () => {}
        })
      });

      applyTheme('auto');
      expect(document.documentElement.classList.contains('mz-theme-dark')).to.be.true;
      expect(document.documentElement.getAttribute('data-theme')).to.equal('dark');
    });

    it('should remove previous theme classes', () => {
      document.documentElement.classList.add('mz-theme-light');
      
      applyTheme('dark');
      expect(document.documentElement.classList.contains('mz-theme-light')).to.be.false;
      expect(document.documentElement.classList.contains('mz-theme-dark')).to.be.true;
    });
  });

  describe('getResolvedTheme', () => {
    it('should return actual theme for explicit themes', () => {
      mockLocalStorage['mz-theme'] = 'light';
      expect(getResolvedTheme()).to.equal('light');
      
      mockLocalStorage['mz-theme'] = 'dark';
      expect(getResolvedTheme()).to.equal('dark');
    });

    it('should resolve auto theme based on system preference', () => {
      mockLocalStorage['mz-theme'] = 'auto';
      
      // Mock matchMedia for light mode
      Object.defineProperty(window, 'matchMedia', {
        writable: true,
        value: () => ({
          matches: false, // Light mode
          addEventListener: () => {},
          removeEventListener: () => {}
        })
      });

      expect(getResolvedTheme()).to.equal('light');
    });
  });

  describe('toggleTheme', () => {
    it('should toggle from light to dark', () => {
      mockLocalStorage['mz-theme'] = 'light';
      toggleTheme();
      expect(mockLocalStorage['mz-theme']).to.equal('dark');
    });

    it('should toggle from dark to light', () => {
      mockLocalStorage['mz-theme'] = 'dark';
      toggleTheme();
      expect(mockLocalStorage['mz-theme']).to.equal('light');
    });

    it('should handle auto theme toggle based on system preference', () => {
      mockLocalStorage['mz-theme'] = 'auto';
      
      // Mock matchMedia for dark mode
      Object.defineProperty(window, 'matchMedia', {
        writable: true,
        value: () => ({
          matches: true, // Dark mode
          addEventListener: () => {},
          removeEventListener: () => {}
        })
      });

      toggleTheme();
      expect(mockLocalStorage['mz-theme']).to.equal('light');
    });
  });

  describe('onThemeChange', () => {
    it('should call callback on theme change', (done) => {
      const callback = (theme: string, resolved: string) => {
        expect(theme).to.equal('dark');
        expect(resolved).to.equal('dark');
        done();
      };

      onThemeChange(callback);
      setTheme('dark');
    });

    it('should return cleanup function', () => {
      let callbackCalled = false;
      const callback = () => {
        callbackCalled = true;
      };

      const cleanup = onThemeChange(callback);
      cleanup();
      
      setTheme('light');
      expect(callbackCalled).to.be.false;
    });
  });

  describe('initializeTheme', () => {
    it('should apply current theme on initialization', () => {
      mockLocalStorage['mz-theme'] = 'dark';
      initializeTheme();
      
      expect(document.documentElement.classList.contains('mz-theme-dark')).to.be.true;
    });

    it('should listen to system preference changes for auto theme', (done) => {
      mockLocalStorage['mz-theme'] = 'auto';
      
      let mediaQueryCallback: ((e: MediaQueryListEvent) => void) | null = null;
      
      // Mock matchMedia with addEventListener
      Object.defineProperty(window, 'matchMedia', {
        writable: true,
        value: () => ({
          matches: false,
          addEventListener: (event: string, callback: (e: MediaQueryListEvent) => void) => {
            if (event === 'change') {
              mediaQueryCallback = callback;
            }
          },
          removeEventListener: () => {}
        })
      });

      const cleanup = initializeTheme();
      
      // Simulate system preference change
      setTimeout(() => {
        if (mediaQueryCallback) {
          mediaQueryCallback({ matches: true } as MediaQueryListEvent);
          
          // Should update theme when system preference changes
          expect(document.documentElement.classList.contains('mz-theme-dark')).to.be.true;
          
          cleanup?.();
          done();
        }
      }, 10);
    });
  });
});