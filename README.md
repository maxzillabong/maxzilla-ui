# Maxzilla UI

A modern web components library with Aceternity-inspired design, built on Lit Element.

## 🚀 Features

- **Web Components**: Framework-agnostic components built with Lit Element
- **Aceternity-Inspired Design**: Modern, animated UI components with smooth micro-interactions
- **Framework Wrappers**: React, Vue, Svelte, and Angular support
- **Dark/Light Mode**: Built-in theme support
- **TypeScript**: Full TypeScript support with comprehensive types
- **Storybook**: Interactive component documentation
- **Tree-Shakeable**: Import only what you need

## 📦 Packages

- `@maxzilla/ui-core` - Core web components library
- `@maxzilla/ui-react` - React wrapper components
- `@maxzilla/ui-vue` - Vue wrapper components  
- `@maxzilla/ui-svelte` - Svelte wrapper components
- `@maxzilla/ui-angular` - Angular wrapper components
- `@maxzilla/ui-tokens` - Design tokens and theme system

## 🏗️ Project Structure

```
maxzilla-ui/
├── packages/
│   ├── core/           # Core web components (Lit Element)
│   ├── react/          # React wrapper components
│   ├── vue/            # Vue wrapper components
│   ├── svelte/         # Svelte wrapper components
│   ├── angular/        # Angular wrapper components
│   └── tokens/         # Design tokens and themes
├── apps/
│   ├── website/        # Showcase website
│   └── storybook/      # Storybook documentation
└── tools/              # Build tools and utilities
```

## 🚀 Quick Start

```bash
# Install the core library
npm install @maxzilla/ui-core

# Or install framework-specific wrapper
npm install @maxzilla/ui-react
npm install @maxzilla/ui-vue
npm install @maxzilla/ui-svelte
npm install @maxzilla/ui-angular
```

### Vanilla JavaScript / Web Components

```html
<script type="module">
  import '@maxzilla/ui-core/button';
  import '@maxzilla/ui-core/card';
</script>

<mz-button variant="primary">Click me</mz-button>
<mz-card elevation="medium">
  <h3 slot="header">Card Title</h3>
  <p>Card content goes here</p>
</mz-card>
```

### React

```tsx
import { MzButton, MzCard } from '@maxzilla/ui-react';

function App() {
  return (
    <>
      <MzButton variant="primary">Click me</MzButton>
      <MzCard elevation="medium">
        <h3 slot="header">Card Title</h3>
        <p>Card content goes here</p>
      </MzCard>
    </>
  );
}
```

## 🎨 Design System

Maxzilla UI draws inspiration from Aceternity's modern design philosophy:

- **Smooth Animations**: Physics-based micro-interactions
- **Interactive Elements**: Hover effects with depth and dimensionality
- **Modern Aesthetic**: Clean, minimalist design with subtle gradients
- **Accessibility First**: WCAG compliant components
- **Performance Optimized**: Lightweight and fast

## 📖 Documentation

- [Component Documentation](https://ui.maxzilla.nl)
- [Storybook](https://storybook.maxzilla.nl)
- [Design System Guide](https://ui.maxzilla.nl/design-system)

## 🛠️ Development

```bash
# Install dependencies
npm install

# Start development mode
npm run dev

# Build all packages
npm run build

# Run Storybook
npm run storybook

# Run tests
npm run test
```

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

## 📄 License

MIT © Max Vananen# Trigger new deployment
