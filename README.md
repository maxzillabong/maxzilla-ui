# Maxzilla UI

A modern web components library with Aceternity‑inspired design, built on Lit (Web Components) with generated framework wrappers and a Next.js showcase site.

## 🚀 Features

- **Web Components**: Framework-agnostic components built with Lit Element
- **Aceternity-Inspired Design**: Modern, animated UI components with smooth micro-interactions
- **Framework Wrappers**: React, Vue, Svelte, and Angular support
- **Dark/Light Mode**: Built-in theme support
- **TypeScript**: Full TypeScript support with comprehensive types
- **Storybook**: Interactive component documentation
- **Tree-Shakeable**: Import only what you need

## 📦 Packages

- `maxzilla-ui-core` – Core web components (Lit)
- `maxzilla-ui-react` – React wrappers
- `@maxzilla/ui-tokens` – Design tokens and theme system

Planned (not yet published here): Vue, Svelte, Angular wrappers.

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
│   └── website/        # Next.js showcase website
└── tools/              # Build tools and utilities
```

## 🚀 Quick Start

Install from npm (Web Components + React):

```bash
npm install maxzilla-ui-core
npm install maxzilla-ui-react
```

### Vanilla JavaScript / Web Components

```html
<script type="module">
  import 'maxzilla-ui-core/button';
  import 'maxzilla-ui-core/card';
</script>

<mz-button variant="primary">Click me</mz-button>
<mz-card elevation="medium">
  <h3 slot="header">Card Title</h3>
  <p>Card content goes here</p>
</mz-card>
```

### React

```tsx
import { Button as MzButton, Card as MzCard } from 'maxzilla-ui-react';

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

- Local site during development: http://localhost:3001
- Storybook (core Web Components): http://localhost:6006

## 🛠️ Development

Monorepo uses npm workspaces.

```bash
# Install all dependencies
npm install

# Run everything (core + react + website) with live reload
npm run dev:all
# Or run only the website (Next.js on :3001)
npm run dev:website

# Run Storybook for core components (on :6006)
npm run storybook

# Build all packages and the website
npm run build:all

# E2E tests for the website (Playwright)
npm run -w @maxzilla/ui-website test:e2e
```

Notes
- The website features a unified, site‑wide left sidebar navigation (Documentation + Components). On mobile, tap the hamburger next to the logo to open a left drawer that pushes the page right; the drawer contains the same content and a search box for components.
- Component detail pages include a right‑hand “On this page” table of contents (desktop) and a “Sections” drawer on mobile with scrollspy highlighting.

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

## 📄 License

MIT © Max Vananen
