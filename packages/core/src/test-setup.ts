// Basic test setup for web components
// Import necessary polyfills and testing utilities

// Mock window.matchMedia for theme tests
if (!window.matchMedia) {
  window.matchMedia = (query) => ({
    matches: query.includes('dark'),
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => false,
  });
}

// Ensure custom elements are available
if (!window.customElements) {
  throw new Error('Custom Elements not supported');
}

export {};