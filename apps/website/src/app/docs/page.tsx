import { DocsLayout } from '@/components/DocsLayout'
import { DocsAlert } from '@/components/docs/DocsAlert'
import { CodeBlock } from '@/components/docs/CodeBlock'

export default function DocsPage() {
  return (
    <DocsLayout pathname="/docs">
      <h1>Documentation</h1>
      <p className="docs-lead">
        Build beautiful, accessible user interfaces with Maxzilla UI — a modern web components library with framework-agnostic design.
      </p>

      <DocsAlert type="info" title="Quick Start">
        Get up and running in under 5 minutes with our installation guide and comprehensive component library.
      </DocsAlert>

      <section className="docs-section">
        <h2 id="overview">Overview</h2>
        <p>
          Maxzilla UI is a collection of professionally designed, framework-agnostic web components built on the Web Components standard.
          Each component is crafted with attention to detail, accessibility, and performance.
        </p>
        <p>
          Our components work seamlessly with React, Vue, Angular, or vanilla JavaScript — no framework lock-in.
          Built with Lit Element for optimal performance and small bundle sizes.
        </p>
      </section>

      <section className="docs-section">
        <h2 id="installation">Installation</h2>
        <p>
          Install Maxzilla UI using your preferred package manager. We provide both core web components and framework-specific wrappers.
        </p>

        <h3>Package Manager</h3>
        <CodeBlock
          code="npm install maxzilla-ui-core maxzilla-ui-react"
          language="bash"
          title="npm"
        />

        <CodeBlock
          code="yarn add maxzilla-ui-core maxzilla-ui-react"
          language="bash"
          title="yarn"
        />

        <CodeBlock
          code="pnpm add maxzilla-ui-core maxzilla-ui-react"
          language="bash"
          title="pnpm"
        />

        <h3>CDN</h3>
        <p>
          You can also use Maxzilla UI directly from a CDN for rapid prototyping:
        </p>
        <CodeBlock
          code={`<script type="module">
  import 'https://unpkg.com/maxzilla-ui-core@latest/dist/index.js';
</script>`}
          language="html"
          title="index.html"
        />
      </section>

      <section className="docs-section">
        <h2 id="usage">Usage</h2>
        <p>
          Import the components you need and use them directly in your HTML or JSX. Components are registered automatically when imported.
        </p>

        <h3>Web Components (Vanilla)</h3>
        <CodeBlock
          code={`import 'maxzilla-ui-core/button';
import 'maxzilla-ui-core/card';

// Now use in your HTML
<mz-button variant="primary">Click me</mz-button>
<mz-card>
  <h2 slot="header">Card Title</h2>
  <p>Card content goes here.</p>
</mz-card>`}
          language="javascript"
          showLineNumbers
        />

        <h3>React</h3>
        <CodeBlock
          code={`import { Button, Card } from 'maxzilla-ui-react';

export function MyComponent() {
  return (
    <>
      <Button variant="primary" onClick={() => alert('Clicked!')}>
        Click me
      </Button>
      <Card>
        <h2 slot="header">Card Title</h2>
        <p>Card content goes here.</p>
      </Card>
    </>
  );
}`}
          language="tsx"
          showLineNumbers
        />

        <DocsAlert type="success" title="TypeScript Support">
          All components include comprehensive TypeScript definitions for excellent IDE support and type safety.
        </DocsAlert>
      </section>

      <section className="docs-section">
        <h2 id="features">Key Features</h2>
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div className="p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-semibold mb-2">🎨 Beautiful Design</h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              Aceternity-inspired components with smooth animations and modern aesthetics.
            </p>
          </div>
          <div className="p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-semibold mb-2">🚀 Lightning Fast</h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              Built with Lit Element for optimal performance and minimal bundle size.
            </p>
          </div>
          <div className="p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-semibold mb-2">♿ Accessible</h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              WCAG 2.1 AA compliant with full keyboard navigation and screen reader support.
            </p>
          </div>
          <div className="p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-semibold mb-2">📦 Framework Agnostic</h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              Works with React, Vue, Angular, or vanilla JavaScript — your choice.
            </p>
          </div>
        </div>
      </section>

      <section className="docs-section">
        <h2 id="next-steps">Next Steps</h2>
        <p>
          Ready to start building? Check out these resources to get the most out of Maxzilla UI:
        </p>
        <ul>
          <li><a href="/docs/getting-started">Getting Started Guide</a> — Step-by-step tutorial</li>
          <li><a href="/components">Component Library</a> — Browse all available components</li>
          <li><a href="/docs/theming">Theming Guide</a> — Customize the look and feel</li>
          <li><a href="/examples">Examples</a> — See components in action</li>
          <li><a href="http://localhost:6006" target="_blank" rel="noopener">Storybook</a> — Interactive component playground</li>
        </ul>
      </section>
    </DocsLayout>
  )
}
