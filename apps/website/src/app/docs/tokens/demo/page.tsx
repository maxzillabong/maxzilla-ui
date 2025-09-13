'use client';

import { useEffect } from 'react';

// Declare web component types for TypeScript
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'mz-card': any;
      'mz-button': any;
      'mz-modal': any;
      'mz-tooltip': any;
    }
  }
}

export default function TokenDemoPage() {
  useEffect(() => {
    // Dynamically load the web components
    import('maxzilla-ui-core').catch(console.error);
  }, []);

  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-4">
          Shadow System Demo with Web Components
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
          These are actual Maxzilla UI web components using the shadow system tokens.
        </p>
      </div>

      <div className="space-y-8">
        <section>
          <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-4">Card Elevation Levels</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <mz-card elevation="1">
              <h4 slot="header">Elevation 1</h4>
              <p>Subtle shadow using --mz-shadow-sm</p>
            </mz-card>

            <mz-card elevation="3">
              <h4 slot="header">Elevation 3</h4>
              <p>Medium shadow using --mz-shadow-md</p>
            </mz-card>

            <mz-card elevation="5">
              <h4 slot="header">Elevation 5</h4>
              <p>High shadow using --mz-shadow-xl</p>
            </mz-card>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-4">Interactive Shadow States</h3>
          <div className="flex flex-wrap gap-4">
            <mz-button variant="primary">
              Primary Button (with shadow)
            </mz-button>

            <mz-button variant="secondary">
              Secondary Button
            </mz-button>

            <mz-button variant="outline">
              Outline Button
            </mz-button>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-4">Modal with Shadow</h3>
          <mz-button
            onClick={() => {
              const modal = document.getElementById('demo-modal');
              if (modal) modal.setAttribute('open', 'true');
            }}
            variant="primary"
          >
            Open Modal
          </mz-button>

          <mz-modal id="demo-modal">
            <h3 slot="header">Modal with Shadow</h3>
            <p>This modal uses --mz-shadow-xl for depth</p>
            <div slot="footer">
              <mz-button
                variant="outline"
                onClick={() => {
                  const modal = document.getElementById('demo-modal');
                  if (modal) modal.removeAttribute('open');
                }}
              >
                Close
              </mz-button>
            </div>
          </mz-modal>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-4">Tooltip with Shadow</h3>
          <div className="flex gap-4">
            <mz-tooltip content="This tooltip has a shadow">
              <mz-button variant="outline">Hover for Tooltip</mz-button>
            </mz-tooltip>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-4">Custom Shadow Application</h3>
          <div className="space-y-4">
            <mz-card style={{ boxShadow: 'var(--mz-shadow-primary-glow)' }}>
              <h4 slot="header">Glowing Card</h4>
              <p>Using --mz-shadow-primary-glow for a cyan glow effect</p>
            </mz-card>

            <mz-card style={{ boxShadow: 'var(--mz-shadow-inner-lg)' }}>
              <h4 slot="header">Inset Shadow</h4>
              <p>Using --mz-shadow-inner-lg for a pressed effect</p>
            </mz-card>
          </div>
        </section>
      </div>

      <div className="mt-8 p-6 bg-neutral-50 dark:bg-neutral-900 rounded-xl border border-neutral-200 dark:border-neutral-800">
        <h4 className="text-lg font-semibold text-neutral-900 dark:text-white mb-3">Available Shadow Tokens</h4>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 font-mono text-sm">
          <code className="text-neutral-600 dark:text-neutral-400">--mz-shadow-none</code>
          <code className="text-neutral-600 dark:text-neutral-400">--mz-shadow-xs</code>
          <code className="text-neutral-600 dark:text-neutral-400">--mz-shadow-sm</code>
          <code className="text-neutral-600 dark:text-neutral-400">--mz-shadow-base</code>
          <code className="text-neutral-600 dark:text-neutral-400">--mz-shadow-md</code>
          <code className="text-neutral-600 dark:text-neutral-400">--mz-shadow-lg</code>
          <code className="text-neutral-600 dark:text-neutral-400">--mz-shadow-xl</code>
          <code className="text-neutral-600 dark:text-neutral-400">--mz-shadow-2xl</code>
          <code className="text-neutral-600 dark:text-neutral-400">--mz-shadow-inner</code>
          <code className="text-neutral-600 dark:text-neutral-400">--mz-shadow-inner-lg</code>
          <code className="text-neutral-600 dark:text-neutral-400">--mz-shadow-primary-glow</code>
          <code className="text-neutral-600 dark:text-neutral-400">--mz-shadow-error-glow</code>
        </div>
      </div>
    </div>
  );
}