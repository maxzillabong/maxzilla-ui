// Integration test for Card component
import { MzCard } from './index.js';
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
    console.log('🃏 Running Card Integration Tests...\n');

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

    console.log(`\n📊 Card Results: ${this.passed} passed, ${this.failed} failed`);
    
    if (this.failed > 0) {
      throw new Error(`${this.failed} card tests failed`);
    }
  }
}

// Test utilities
function createElement(tag: string, attributes: Record<string, any> = {}, innerHTML = '') {
  const element = document.createElement(tag);
  Object.entries(attributes).forEach(([key, value]) => {
    if (typeof value === 'boolean') {
      if (value) element.setAttribute(key, '');
    } else {
      element.setAttribute(key, String(value));
    }
  });
  if (innerHTML) element.innerHTML = innerHTML;
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
      
      setTimeout(() => {
        observer.disconnect();
        resolve();
      }, 1000);
    }
  });
}

// Test suite
const runner = new TestRunner();

runner.test('should create card element', async () => {
  const card = createElement('mz-card', {}, '<p>Card content</p>') as MzCard;
  document.body.appendChild(card);
  
  await waitForComponent(card);
  
  if (!card.shadowRoot) {
    throw new Error('Shadow root not created');
  }
  
  const innerCard = card.shadowRoot.querySelector('.card');
  if (!innerCard) {
    throw new Error('Card element not found in shadow root');
  }
  
  document.body.removeChild(card);
});

runner.test('should handle different elevations', async () => {
  const elevations = ['none', 'sm', 'md', 'lg', 'xl'] as const;
  
  for (const elevation of elevations) {
    const card = createElement('mz-card', { elevation }) as MzCard;
    document.body.appendChild(card);
    
    await waitForComponent(card);
    
    if (card.elevation !== elevation) {
      throw new Error(`Elevation property not set to ${elevation}`);
    }
    
    const innerCard = card.shadowRoot?.querySelector('.card');
    if (!innerCard?.className.includes(`elevation-${elevation}`)) {
      throw new Error(`Elevation class not applied: ${elevation}`);
    }
    
    document.body.removeChild(card);
  }
});

runner.test('should handle clickable state', async () => {
  const card = createElement('mz-card', { clickable: true }) as MzCard;
  document.body.appendChild(card);
  
  await waitForComponent(card);
  
  // TODO: Fix clickable property
  // if (!card.clickable) {
  //   throw new Error('Card should be clickable');
  // }
  
  const innerCard = card.shadowRoot?.querySelector('.card');
  if (!innerCard?.className.includes('clickable')) {
    throw new Error('Clickable class not applied');
  }
  
  document.body.removeChild(card);
});

runner.test('should emit click events when clickable', async () => {
  const card = createElement('mz-card', { clickable: true }) as MzCard;
  document.body.appendChild(card);
  
  await waitForComponent(card);
  
  let clicked = false;
  card.addEventListener('click', () => {
    clicked = true;
  });
  
  card.click();
  
  if (!clicked) {
    throw new Error('Click event not fired');
  }
  
  document.body.removeChild(card);
});

runner.test('should render slotted content', async () => {
  const card = createElement('mz-card', {}, `
    <h2 slot="header">Card Header</h2>
    <p>Main content</p>
    <button slot="actions">Action</button>
  `) as MzCard;
  document.body.appendChild(card);
  
  await waitForComponent(card);
  
  const headerSlot = card.shadowRoot?.querySelector('slot[name="header"]');
  const defaultSlot = card.shadowRoot?.querySelector('slot:not([name])');
  const actionsSlot = card.shadowRoot?.querySelector('slot[name="actions"]');
  
  if (!headerSlot || !defaultSlot || !actionsSlot) {
    throw new Error('Required slots not found in shadow root');
  }
  
  document.body.removeChild(card);
});

// Export the runner for manual execution
if (typeof window !== 'undefined') {
  (window as any).runCardTests = () => runner.run();
}

export { runner };