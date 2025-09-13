import { DocsLayout } from '@/components/DocsLayout'
import { CodeBlock } from '@/components/docs/CodeBlock'
import { DocsAlert } from '@/components/docs/DocsAlert'

export default function InstallationDoc() {
  return (
    <DocsLayout pathname="/docs/installation">
      <h1>Installation</h1>
      <p className="docs-lead">
        Get started with Maxzilla UI by installing the core package and framework-specific wrappers.
      </p>

      <section className="docs-section">
        <h2 id="prerequisites">Prerequisites</h2>
        <p>
          Before installing Maxzilla UI, ensure your development environment meets these requirements:
        </p>
        <ul>
          <li>Node.js 16.0 or later</li>
          <li>npm, yarn, or pnpm package manager</li>
          <li>Modern browser with Web Components support</li>
        </ul>
      </section>

      <section className="docs-section">
        <h2 id="package-manager">Package Manager Installation</h2>
        <p>
          Choose your preferred package manager to install Maxzilla UI. We recommend installing both the core library and your framework-specific wrapper.
        </p>

        <h3 id="npm">npm</h3>
        <CodeBlock
          code="npm install maxzilla-ui-core maxzilla-ui-react"
          language="bash"
          title="Terminal"
        />

        <h3 id="yarn">Yarn</h3>
        <CodeBlock
          code="yarn add maxzilla-ui-core maxzilla-ui-react"
          language="bash"
          title="Terminal"
        />

        <h3 id="pnpm">pnpm</h3>
        <CodeBlock
          code="pnpm add maxzilla-ui-core maxzilla-ui-react"
          language="bash"
          title="Terminal"
        />
      </section>

      <section className="docs-section">
        <h2 id="cdn-installation">CDN Installation</h2>
        <p>
          For quick prototyping or simple projects, you can use Maxzilla UI directly from a CDN without any build tools.
        </p>

        <CodeBlock
          code={`<!DOCTYPE html>
<html lang="en">
<head>
  <script type="module">
    import 'https://unpkg.com/maxzilla-ui-core@latest/dist/index.js';
  </script>
</head>
<body>
  <mz-button variant="primary">Hello World</mz-button>
</body>
</html>`}
          language="html"
          title="index.html"
          showLineNumbers
        />

        <DocsAlert type="warning" title="Production Use">
          For production applications, we recommend using a package manager and build tools for better performance and tree-shaking capabilities.
        </DocsAlert>
      </section>

      <section className="docs-section">
        <h2 id="framework-setup">Framework-Specific Setup</h2>

        <h3 id="react-setup">React</h3>
        <p>
          After installation, import and use components in your React application:
        </p>
        <CodeBlock
          code={`import { Button, Card, Input } from 'maxzilla-ui-react';

function App() {
  return (
    <div>
      <Button variant="primary">Click me</Button>
      <Card>Welcome to Maxzilla UI</Card>
      <Input label="Name" placeholder="Enter your name" />
    </div>
  );
}`}
          language="tsx"
          showLineNumbers
        />

        <h3 id="vanilla-setup">Vanilla JavaScript</h3>
        <p>
          Import only the components you need for optimal bundle size:
        </p>
        <CodeBlock
          code={`// Import specific components
import 'maxzilla-ui-core/button';
import 'maxzilla-ui-core/card';

// Or import everything
import 'maxzilla-ui-core';`}
          language="javascript"
        />
      </section>

      <section className="docs-section">
        <h2 id="typescript">TypeScript Configuration</h2>
        <p>
          Maxzilla UI includes TypeScript declarations out of the box. For the best development experience, add these types to your <code>tsconfig.json</code>:
        </p>
        <CodeBlock
          code={`{
  "compilerOptions": {
    "types": ["maxzilla-ui-core", "maxzilla-ui-react"]
  }
}`}
          language="json"
          title="tsconfig.json"
        />
      </section>

      <section className="docs-section">
        <h2 id="polyfills">Browser Support & Polyfills</h2>
        <p>
          Maxzilla UI uses modern Web Components standards. For older browsers, include the Web Components polyfill:
        </p>
        <CodeBlock
          code={`<script src="https://unpkg.com/@webcomponents/webcomponentsjs@2.8.0/webcomponents-loader.js"></script>`}
          language="html"
        />

        <DocsAlert type="info" title="Browser Compatibility">
          Maxzilla UI supports all modern browsers including Chrome 90+, Firefox 88+, Safari 14+, and Edge 90+.
        </DocsAlert>
      </section>

      <section className="docs-section">
        <h2 id="next-steps">Next Steps</h2>
        <p>
          Now that you have Maxzilla UI installed, explore these resources:
        </p>
        <ul>
          <li><a href="/docs/getting-started">Getting Started Guide</a> — Build your first component</li>
          <li><a href="/components">Component Library</a> — Browse all available components</li>
          <li><a href="/docs/theming">Theming Guide</a> — Customize colors and styles</li>
        </ul>
      </section>
    </DocsLayout>
  )
}
