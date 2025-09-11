// Integration test for Button component
// This test can be run in a browser environment

import { MzButton } from './index.js';
import '../../index.js';

// Simple test runner
class TestRunner {
  private tests: { name: string; fn: () => Promise<void> | void }[] = [];
  private passed = 0;
  private failed = 0;

  test(name: string, fn: () => Promise<void> | void) {
    this.tests.push({ name, fn });
  }

  async run() {
    console.log('🧪 Running Button Integration Tests...\n');

    for (const { name, fn } of this.tests) {
      try {
        await fn();
        console.log(`✅ ${name}`);
        this.passed++;
      } catch (error) {
        console.error(`❌ ${name}`);
        console.error('   Error:', error);
        this.failed++;
      }
    }

    console.log(`\n📊 Results: ${this.passed} passed, ${this.failed} failed`);
    
    if (this.failed > 0) {
      throw new Error(`${this.failed} tests failed`);
    }
  }
}

// Test utilities
function createElement(tag: string, attributes: Record<string, any> = {}) {
  const element = document.createElement(tag);
  Object.entries(attributes).forEach(([key, value]) => {
    if (typeof value === 'boolean') {
      if (value) element.setAttribute(key, '');
    } else {
      element.setAttribute(key, String(value));
    }
  });
  return element;
}

function waitForComponent(element: HTMLElement) {
  return new Promise<void>((resolve) => {
    if (element.shadowRoot) {
      resolve();
    } else {
      const observer = new MutationObserver(() => {
        if (element.shadowRoot) {
          observer.disconnect();
          resolve();
        }
      });
      observer.observe(element, { childList: true, subtree: true });
      
      // Timeout after 1 second
      setTimeout(() => {
        observer.disconnect();
        resolve();
      }, 1000);
    }
  });
}

// Test suite
const runner = new TestRunner();

runner.test('should create button element', async () => {
  const button = createElement('mz-button') as MzButton;
  document.body.appendChild(button);
  
  await waitForComponent(button);
  
  if (!button.shadowRoot) {
    throw new Error('Shadow root not created');
  }
  
  const innerButton = button.shadowRoot.querySelector('button');
  if (!innerButton) {
    throw new Error('Button element not found in shadow root');
  }
  
  document.body.removeChild(button);
});

runner.test('should handle click events', async () => {
  const button = createElement('mz-button') as MzButton;
  document.body.appendChild(button);
  
  await waitForComponent(button);
  
  let clicked = false;
  button.addEventListener('click', () => {
    clicked = true;
  });
  
  button.click();
  
  if (!clicked) {
    throw new Error('Click event not fired');
  }
  
  document.body.removeChild(button);
});

runner.test('should respect disabled state', async () => {
  const button = createElement('mz-button', { disabled: true }) as MzButton;
  document.body.appendChild(button);
  
  await waitForComponent(button);
  
  if (!button.disabled) {
    throw new Error('Button should be disabled');
  }
  
  const innerButton = button.shadowRoot?.querySelector('button');
  if (!innerButton?.disabled) {
    throw new Error('Inner button should be disabled');
  }
  
  document.body.removeChild(button);
});

runner.test('should update variant property', async () => {
  const button = createElement('mz-button') as MzButton;
  document.body.appendChild(button);
  
  await waitForComponent(button);
  
  button.variant = 'secondary';
  
  // Wait for update
  await new Promise(resolve => setTimeout(resolve, 10));
  
  if (button.variant !== 'secondary') {
    throw new Error('Variant property not updated');
  }
  
  document.body.removeChild(button);
});

runner.test('should support different sizes', async () => {
  const sizes = ['sm', 'md', 'lg'] as const;
  
  for (const size of sizes) {
    const button = createElement('mz-button', { size }) as MzButton;
    document.body.appendChild(button);
    
    await waitForComponent(button);
    
    if (button.size !== size) {
      throw new Error(`Size property not set to ${size}`);
    }
    
    document.body.removeChild(button);
  }
});

// Export the runner for manual execution
if (typeof window !== 'undefined') {
  (window as any).runButtonTests = () => runner.run();
}

export { runner };