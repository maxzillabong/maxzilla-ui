# Testing Strategy for Maxzilla UI Core Components

## Overview

The Maxzilla UI Core components use a comprehensive testing strategy that includes:

1. **Integration Tests** - Real browser testing of web components
2. **Manual Testing** - Interactive test runner in browser
3. **Automated Testing** - Command-line test execution

## Test Structure

### Integration Tests
- Located in `src/components/[component]/[component].integration.test.ts`
- Test actual web component behavior in browser environment
- No external dependencies - uses native browser APIs
- Includes component lifecycle, DOM interaction, and event handling

### Test Files
- `button.integration.test.ts` - Button component tests
- `card.integration.test.ts` - Card component tests
- `test-runner.ts` - Main test orchestrator

## Running Tests

### Command Line
```bash
# Run all tests
npm test

# Build and watch for changes
npm run test:watch

# Open interactive test runner
npm run test:integration
```

### Browser Testing
1. Run `npm run test:integration`
2. Opens browser with interactive test runner
3. Click buttons to run specific test suites
4. View real-time test output and results

## Test Features

### Component Testing
- ✅ Element creation and shadow DOM
- ✅ Property and attribute handling
- ✅ Event emission and handling
- ✅ State management and reactivity
- ✅ Accessibility attributes
- ✅ Slot content rendering

### Browser Compatibility
Tests run in real browser environment ensuring:
- Web Components API support
- Shadow DOM functionality
- Custom Elements lifecycle
- Event propagation
- CSS custom properties

### Output Format
```
🧪 Running Button Integration Tests...

✅ should create button element
✅ should handle click events
✅ should respect disabled state
✅ should update variant property
✅ should support different sizes

📊 Results: 5 passed, 0 failed
```

## Adding New Tests

### Component Test Template
```typescript
// Integration test for [Component] component
import { Mz[Component] } from './index.js';
import '../../index.js';

class TestRunner {
  private tests: { name: string; fn: () => Promise<void> | void }[] = [];
  private passed = 0;
  private failed = 0;

  test(name: string, fn: () => Promise<void> | void) {
    this.tests.push({ name, fn });
  }

  async run() {
    console.log('🧪 Running [Component] Integration Tests...\\n');

    for (const { name, fn } of this.tests) {
      try {
        await fn();
        console.log(\`✅ \${name}\`);
        this.passed++;
      } catch (error) {
        console.error(\`❌ \${name}\`);
        console.error('   Error:', error);
        this.failed++;
      }
    }

    console.log(\`\\n📊 Results: \${this.passed} passed, \${this.failed} failed\`);
    
    if (this.failed > 0) {
      throw new Error(\`\${this.failed} tests failed\`);
    }
  }
}

const runner = new TestRunner();

runner.test('should create [component] element', async () => {
  // Test implementation
});

export { runner };
```

### Test Utilities
```typescript
// Create test element
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

// Wait for component initialization
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
```

## Integration with CI/CD

The test suite is designed to integrate with continuous integration:

```bash
# In CI environment
npm install
npm run build
npm test
```

Exit codes:
- `0` - All tests passed
- `1` - One or more tests failed

## Future Enhancements

### Planned Additions
- [ ] Visual regression testing
- [ ] Cross-browser automated testing
- [ ] Performance benchmarking
- [ ] A11y compliance testing
- [ ] React wrapper integration tests

### Test Coverage Goals
- [ ] 90%+ component coverage
- [ ] All public APIs tested
- [ ] Edge case handling
- [ ] Error condition testing
- [ ] Accessibility compliance

## Debugging Tests

### Common Issues
1. **Shadow DOM not created** - Component not fully initialized
2. **Events not firing** - Check event listener setup
3. **Properties not updating** - Ensure reactive properties are defined

### Debug Tools
- Browser DevTools for Shadow DOM inspection
- Console output for test progression
- Interactive test runner for manual verification

## Best Practices

### Test Guidelines
- Test behavior, not implementation
- Use realistic user interactions
- Test accessibility features
- Verify error handling
- Include edge cases

### Performance Considerations
- Clean up DOM elements after tests
- Avoid memory leaks in event listeners
- Use minimal test fixtures
- Batch similar tests together