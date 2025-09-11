// DOM utilities for components

/**
 * Check if an element is focusable
 */
export function isFocusable(element: Element): boolean {
  const focusableElements = [
    'a[href]',
    'button',
    'input',
    'textarea',
    'select',
    'details',
    '[tabindex]:not([tabindex="-1"])',
    '[contenteditable="true"]'
  ];
  
  return focusableElements.some(selector => element.matches(selector)) &&
         !element.hasAttribute('disabled') &&
         !element.getAttribute('aria-hidden');
}

/**
 * Get all focusable elements within a container
 */
export function getFocusableElements(container: Element): Element[] {
  const focusableSelectors = [
    'a[href]',
    'button:not([disabled])',
    'input:not([disabled])',
    'textarea:not([disabled])',
    'select:not([disabled])',
    'details',
    '[tabindex]:not([tabindex="-1"])',
    '[contenteditable="true"]'
  ].join(', ');
  
  return Array.from(container.querySelectorAll(focusableSelectors)).filter(
    el => !el.getAttribute('aria-hidden')
  );
}

/**
 * Trap focus within a container
 */
export function trapFocus(container: Element): () => void {
  const focusableElements = getFocusableElements(container);
  const firstFocusable = focusableElements[0] as HTMLElement;
  const lastFocusable = focusableElements[focusableElements.length - 1] as HTMLElement;
  
  const handleKeyDown = (event: Event) => {
    const keyboardEvent = event as KeyboardEvent;
    if (keyboardEvent.key !== 'Tab') return;
    
    if (keyboardEvent.shiftKey) {
      if (document.activeElement === firstFocusable) {
        keyboardEvent.preventDefault();
        lastFocusable?.focus();
      }
    } else {
      if (document.activeElement === lastFocusable) {
        keyboardEvent.preventDefault();
        firstFocusable?.focus();
      }
    }
  };
  
  container.addEventListener('keydown', handleKeyDown);
  firstFocusable?.focus();
  
  // Return cleanup function
  return () => {
    container.removeEventListener('keydown', handleKeyDown);
  };
}

/**
 * Check if an element is visible in the viewport
 */
export function isInViewport(element: Element): boolean {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

/**
 * Scroll an element into view with smooth behavior
 */
export function scrollIntoView(element: Element, options?: ScrollIntoViewOptions): void {
  element.scrollIntoView({
    behavior: 'smooth',
    block: 'nearest',
    inline: 'nearest',
    ...options,
  });
}

/**
 * Generate a unique ID for elements
 */
export function generateId(prefix = 'mz'): string {
  return `${prefix}-${Math.random().toString(36).substr(2, 9)}`;
}

/**
 * Dispatch a custom event from an element
 */
export function dispatchEvent(
  element: Element,
  eventName: string,
  detail?: any,
  options?: CustomEventInit
): boolean {
  const event = new CustomEvent(eventName, {
    bubbles: true,
    composed: true,
    detail,
    ...options,
  });
  
  return element.dispatchEvent(event);
}

/**
 * Wait for an element to be available in the DOM
 */
export function waitForElement(
  selector: string,
  container: Element = document.body,
  timeout = 5000
): Promise<Element> {
  return new Promise((resolve, reject) => {
    const element = container.querySelector(selector);
    if (element) {
      resolve(element);
      return;
    }
    
    const observer = new MutationObserver(() => {
      const element = container.querySelector(selector);
      if (element) {
        observer.disconnect();
        resolve(element);
      }
    });
    
    observer.observe(container, {
      childList: true,
      subtree: true,
    });
    
    setTimeout(() => {
      observer.disconnect();
      reject(new Error(`Element ${selector} not found within ${timeout}ms`));
    }, timeout);
  });
}

/**
 * Debounce a function call
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: number | undefined;
  
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = window.setTimeout(() => func(...args), wait);
  };
}

/**
 * Throttle a function call
 */
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;
  
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

/**
 * Check if the current browser supports Web Components
 */
export function supportsWebComponents(): boolean {
  return (
    'customElements' in window &&
    'attachShadow' in Element.prototype &&
    'getRootNode' in Element.prototype &&
    'replaceChildren' in Element.prototype
  );
}

/**
 * Polyfill loader for older browsers
 */
export async function loadWebComponentsPolyfill(): Promise<void> {
  if (supportsWebComponents()) return;
  
  // Load polyfills if needed - this is a dynamic import so it's optional
  try {
    // Use dynamic import with type assertion to avoid TypeScript errors
    const module = await import('@webcomponents/webcomponentsjs' as any);
    if (module?.loadPolyfills) {
      return module.loadPolyfills();
    }
  } catch {
    // Polyfill not available, continue without it
    console.warn('Web Components polyfill not available');
  }
}