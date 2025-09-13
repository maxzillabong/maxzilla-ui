import { DocsLayout } from '@/components/DocsLayout'

export default function TypographyDoc() {
  return (
    <DocsLayout pathname="/docs/typography">
      <article className="max-w-3xl prose prose-neutral dark:prose-invert">
            <h1>Typography Tokens</h1>
            <p>
              Maxzilla UI exposes a set of CSS custom properties for typography. Use these tokens to keep
              font families, sizes, weights, line heights, and letter spacing consistent across your app.
            </p>

            <h2>Font Families</h2>
            <pre><code>{`:root {
  --mz-font-sans: Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,sans-serif;
  --mz-font-mono: "JetBrains Mono","Fira Code",Consolas,Monaco,"Courier New",monospace;
}`}</code></pre>
            <p>Apply them globally or per element:</p>
            <pre><code>{`body { font-family: var(--mz-font-sans); }
.code { font-family: var(--mz-font-mono); }`}</code></pre>

            <h2>Font Sizes</h2>
            <p>
              Sizes follow a fluid scale using clamp() to adapt between small and large viewports.
            </p>
            <pre><code>{`:root {
  --mz-text-xs: clamp(0.75rem, 0.7rem + 0.25vw, 0.8rem);
  --mz-text-sm: clamp(0.875rem, 0.8rem + 0.375vw, 0.95rem);
  --mz-text-base: clamp(1rem, 0.9rem + 0.5vw, 1.125rem);
  --mz-text-lg: clamp(1.125rem, 1rem + 0.625vw, 1.25rem);
  --mz-text-xl: clamp(1.25rem, 1.1rem + 0.75vw, 1.5rem);
  --mz-text-2xl: clamp(1.5rem, 1.3rem + 1vw, 2rem);
  --mz-text-3xl: clamp(1.875rem, 1.6rem + 1.375vw, 2.5rem);
  --mz-text-4xl: clamp(2.25rem, 1.9rem + 1.75vw, 3rem);
  --mz-text-5xl: clamp(3rem, 2.5rem + 2.5vw, 4rem);
  --mz-text-6xl: clamp(3.75rem, 3rem + 3.75vw, 5.5rem);
}`}</code></pre>
            <pre><code>{`.text-base { font-size: var(--mz-text-base); }
.text-xl { font-size: var(--mz-text-xl); }`}</code></pre>

            <h2>Font Weights</h2>
            <pre><code>{`:root {
  --mz-font-light: 300;
  --mz-font-normal: 400;
  --mz-font-medium: 500;
  --mz-font-semibold: 600;
  --mz-font-bold: 700;
  --mz-font-extrabold: 800;
}`}</code></pre>
            <pre><code>{`.font-semibold { font-weight: var(--mz-font-semibold); }`}</code></pre>

            <h2>Line Height</h2>
            <pre><code>{`:root {
  --mz-leading-tight: 1.25;
  --mz-leading-snug: 1.375;
  --mz-leading-normal: 1.5;
  --mz-leading-relaxed: 1.625;
  --mz-leading-loose: 2;
}`}</code></pre>
            <pre><code>{`.leading-relaxed { line-height: var(--mz-leading-relaxed); }`}</code></pre>

            <h2>Letter Spacing</h2>
            <pre><code>{`:root {
  --mz-tracking-tighter: -0.05em;
  --mz-tracking-tight: -0.025em;
  --mz-tracking-normal: 0;
  --mz-tracking-wide: 0.025em;
  --mz-tracking-wider: 0.05em;
  --mz-tracking-widest: 0.1em;
}`}</code></pre>
            <pre><code>{`.tracking-tight { letter-spacing: var(--mz-tracking-tight); }`}</code></pre>

            <h2>Example Heading Scale</h2>
            <pre><code>{`h1 { font-size: var(--mz-text-5xl); line-height: var(--mz-leading-tight); font-weight: var(--mz-font-extrabold); }
h2 { font-size: var(--mz-text-4xl); line-height: var(--mz-leading-tight); font-weight: var(--mz-font-bold); }
h3 { font-size: var(--mz-text-3xl); line-height: var(--mz-leading-snug); font-weight: var(--mz-font-semibold); }
h4 { font-size: var(--mz-text-2xl); line-height: var(--mz-leading-snug); font-weight: var(--mz-font-semibold); }
h5 { font-size: var(--mz-text-xl); line-height: var(--mz-leading-normal); font-weight: var(--mz-font-medium); }
h6 { font-size: var(--mz-text-lg); line-height: var(--mz-leading-normal); font-weight: var(--mz-font-medium); }`}</code></pre>

            <h2>Usage Tips</h2>
            <ul>
              <li>Set <code>body {'{'} font-family: var(--mz-font-sans) {'}'}</code> once; override per‑component if needed.</li>
              <li>Use the fluid size tokens for headings and large text for better readability on all screens.</li>
              <li>Typography tokens are static and safe across themes; colors adjust separately.</li>
            </ul>
          </article>
    </DocsLayout>
  )
}

