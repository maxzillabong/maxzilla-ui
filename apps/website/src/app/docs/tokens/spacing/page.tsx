'use client';

import { useState } from 'react';
import { Ruler, Box, Move, Copy, Check } from 'lucide-react';

const spacingScale = [
  { token: '--mz-space-0', value: '0', px: '0px' },
  { token: '--mz-space-px', value: '1px', px: '1px' },
  { token: '--mz-space-0-5', value: '0.125rem', px: '2px' },
  { token: '--mz-space-1', value: '0.25rem', px: '4px' },
  { token: '--mz-space-1-5', value: '0.375rem', px: '6px' },
  { token: '--mz-space-2', value: '0.5rem', px: '8px' },
  { token: '--mz-space-2-5', value: '0.625rem', px: '10px' },
  { token: '--mz-space-3', value: '0.75rem', px: '12px' },
  { token: '--mz-space-3-5', value: '0.875rem', px: '14px' },
  { token: '--mz-space-4', value: '1rem', px: '16px' },
  { token: '--mz-space-5', value: '1.25rem', px: '20px' },
  { token: '--mz-space-6', value: '1.5rem', px: '24px' },
  { token: '--mz-space-7', value: '1.75rem', px: '28px' },
  { token: '--mz-space-8', value: '2rem', px: '32px' },
  { token: '--mz-space-9', value: '2.25rem', px: '36px' },
  { token: '--mz-space-10', value: '2.5rem', px: '40px' },
  { token: '--mz-space-12', value: '3rem', px: '48px' },
  { token: '--mz-space-14', value: '3.5rem', px: '56px' },
  { token: '--mz-space-16', value: '4rem', px: '64px' },
  { token: '--mz-space-20', value: '5rem', px: '80px' },
  { token: '--mz-space-24', value: '6rem', px: '96px' },
];

const borderRadiusScale = [
  { token: '--mz-radius-none', value: '0', px: '0px' },
  { token: '--mz-radius-sm', value: '0.125rem', px: '2px' },
  { token: '--mz-radius-base', value: '0.25rem', px: '4px' },
  { token: '--mz-radius-md', value: '0.375rem', px: '6px' },
  { token: '--mz-radius-lg', value: '0.5rem', px: '8px' },
  { token: '--mz-radius-xl', value: '0.75rem', px: '12px' },
  { token: '--mz-radius-2xl', value: '1rem', px: '16px' },
  { token: '--mz-radius-3xl', value: '1.5rem', px: '24px' },
  { token: '--mz-radius-full', value: '9999px', px: 'full' },
];

function SpacingRow({ token, value, px }: any) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(token);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const widthPx = parseInt(px) || 0;
  const maxWidth = 96;
  const percentage = Math.min((widthPx / maxWidth) * 100, 100);

  return (
    <div
      className="group flex items-center gap-4 p-3 rounded-xl hover:bg-neutral-100 dark:bg-neutral-800/50 transition-all cursor-pointer"
      onClick={handleCopy}
    >
      <div className="flex-1 flex items-center gap-4">
        <div className="w-32 font-mono text-sm text-neutral-600 dark:text-neutral-400">{token}</div>
        <div className="w-20 text-sm text-neutral-500 dark:text-neutral-500">{value}</div>
        <div className="w-16 text-sm text-neutral-500 dark:text-neutral-600">{px}</div>
      </div>
      <div className="flex-1 flex items-center gap-3">
        <div className="flex-1 h-8 bg-neutral-100 dark:bg-neutral-800 rounded-lg overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-primary-500 to-green-500 rounded-lg transition-all duration-300"
            style={{ width: `${percentage}%` }}
          />
        </div>
        {copied ? (
          <Check className="w-4 h-4 text-green-500" />
        ) : (
          <Copy className="w-4 h-4 text-neutral-600 dark:text-neutral-400 opacity-0 group-hover:opacity-100 transition-opacity" />
        )}
      </div>
    </div>
  );
}

function RadiusDemo({ token, value, px }: any) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(token);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="group flex flex-col items-center gap-3 p-4 rounded-xl hover:bg-neutral-100 dark:bg-neutral-800/50 transition-all cursor-pointer"
      onClick={handleCopy}
    >
      <div
        className="w-24 h-24 bg-gradient-to-br from-primary-500 to-green-500 transition-all duration-300"
        style={{ borderRadius: value }}
      />
      <div className="text-center">
        <div className="font-mono text-xs text-neutral-600 dark:text-neutral-400">{token}</div>
        <div className="text-xs text-neutral-500 dark:text-neutral-500 mt-1">{px}</div>
      </div>
      {copied ? (
        <Check className="w-4 h-4 text-green-500" />
      ) : (
        <Copy className="w-4 h-4 text-neutral-600 dark:text-neutral-400 opacity-0 group-hover:opacity-100 transition-opacity" />
      )}
    </div>
  );
}

export default function SpacingPage() {
  const [activeTab, setActiveTab] = useState('scale');
  const [copiedUsage, setCopiedUsage] = useState('');

  const handleCopyUsage = (code: string, type: string) => {
    navigator.clipboard.writeText(code);
    setCopiedUsage(type);
    setTimeout(() => setCopiedUsage(''), 2000);
  };

  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-4 flex items-center gap-3">
          <Ruler className="w-8 h-8 text-primary-500" />
          Spacing System
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
          A consistent 4px grid system for spacing and layout. Our spacing tokens ensure visual rhythm and consistency across all components.
        </p>
      </div>

      <div className="flex gap-2 border-b border-neutral-200 dark:border-neutral-800">
        {['scale', 'radius', 'usage', 'examples'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 font-medium capitalize transition-all ${
              activeTab === tab
                ? 'text-neutral-900 dark:text-white border-b-2 border-primary-500'
                : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:text-white'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {activeTab === 'scale' && (
        <div className="space-y-6">
          <div className="flex items-center gap-3 text-sm text-neutral-500 dark:text-neutral-500">
            <Move className="w-4 h-4" />
            <span>Click any row to copy the token</span>
          </div>
          <div className="space-y-1">
            {spacingScale.map((item) => (
              <SpacingRow key={item.token} {...item} />
            ))}
          </div>
        </div>
      )}

      {activeTab === 'radius' && (
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-2">Border Radius</h3>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm">
              Consistent corner radius values for rounded elements and surfaces.
            </p>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-5 gap-4">
            {borderRadiusScale.map((item) => (
              <RadiusDemo key={item.token} {...item} />
            ))}
          </div>
        </div>
      )}

      {activeTab === 'usage' && (
        <div className="space-y-8">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-neutral-900 dark:text-white">Using Spacing Tokens</h3>
            <p className="text-neutral-600 dark:text-neutral-400">
              Spacing tokens can be used for margins, padding, gaps, and positioning. They ensure consistent spacing throughout your application.
            </p>
          </div>

          <div className="space-y-6">
            <div className="space-y-3">
              <h4 className="text-lg font-medium text-neutral-900 dark:text-white flex items-center gap-2">
                <Box className="w-5 h-5 text-blue-400" />
                In CSS
              </h4>
              <div className="relative group">
                <pre className="bg-neutral-50 dark:bg-neutral-950/50 border border-neutral-200 dark:border-neutral-800 rounded-xl p-4 overflow-x-auto">
                  <code className="text-sm text-neutral-700 dark:text-neutral-300">{`.container {
  padding: var(--mz-space-6);
  margin-bottom: var(--mz-space-8);
  gap: var(--mz-space-4);
}

.card {
  border-radius: var(--mz-radius-xl);
  padding: var(--mz-space-4) var(--mz-space-6);
}`}</code>
                </pre>
                <button
                  onClick={() => handleCopyUsage(`.container {
  padding: var(--mz-space-6);
  margin-bottom: var(--mz-space-8);
  gap: var(--mz-space-4);
}`, 'css')}
                  className="absolute top-4 right-4 p-2 bg-neutral-100 dark:bg-neutral-800 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  {copiedUsage === 'css' ? (
                    <Check className="w-4 h-4 text-green-500" />
                  ) : (
                    <Copy className="w-4 h-4 text-neutral-600 dark:text-neutral-400" />
                  )}
                </button>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="text-lg font-medium text-neutral-900 dark:text-white">In Web Components</h4>
              <div className="relative group">
                <pre className="bg-neutral-50 dark:bg-neutral-950/50 border border-neutral-200 dark:border-neutral-800 rounded-xl p-4 overflow-x-auto">
                  <code className="text-sm text-neutral-700 dark:text-neutral-300">{`<mz-stack gap="var(--mz-space-4)">
  <mz-card style="padding: var(--mz-space-6)">
    Card with custom padding
  </mz-card>
</mz-stack>

<mz-button style="--mz-button-padding: var(--mz-space-2) var(--mz-space-4)">
  Custom Padding
</mz-button>`}</code>
                </pre>
                <button
                  onClick={() => handleCopyUsage(`<mz-stack gap="var(--mz-space-4)">
  <mz-card style="padding: var(--mz-space-6)">
    Card with custom padding
  </mz-card>
</mz-stack>`, 'html')}
                  className="absolute top-4 right-4 p-2 bg-neutral-100 dark:bg-neutral-800 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  {copiedUsage === 'html' ? (
                    <Check className="w-4 h-4 text-green-500" />
                  ) : (
                    <Copy className="w-4 h-4 text-neutral-600 dark:text-neutral-400" />
                  )}
                </button>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="text-lg font-medium text-neutral-900 dark:text-white">JavaScript Access</h4>
              <div className="relative group">
                <pre className="bg-neutral-50 dark:bg-neutral-950/50 border border-neutral-200 dark:border-neutral-800 rounded-xl p-4 overflow-x-auto">
                  <code className="text-sm text-neutral-700 dark:text-neutral-300">{`// Get spacing value
const spacing = getComputedStyle(document.documentElement)
  .getPropertyValue('--mz-space-4');

// Apply dynamic spacing
element.style.marginTop = 'var(--mz-space-8)';
element.style.setProperty('--custom-gap', 'var(--mz-space-6)');`}</code>
                </pre>
                <button
                  onClick={() => handleCopyUsage(`const spacing = getComputedStyle(document.documentElement)
  .getPropertyValue('--mz-space-4');`, 'js')}
                  className="absolute top-4 right-4 p-2 bg-neutral-100 dark:bg-neutral-800 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  {copiedUsage === 'js' ? (
                    <Check className="w-4 h-4 text-green-500" />
                  ) : (
                    <Copy className="w-4 h-4 text-neutral-600 dark:text-neutral-400" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'examples' && (
        <div className="space-y-8">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-neutral-900 dark:text-white">Practical Examples</h3>
            <p className="text-neutral-600 dark:text-neutral-400">
              See how spacing tokens create visual hierarchy and rhythm in real components.
            </p>
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <h4 className="text-lg font-medium text-neutral-900 dark:text-white">Card Layout</h4>
              <div className="bg-neutral-50 dark:bg-neutral-950/50 border border-neutral-200 dark:border-neutral-800 rounded-xl p-6">
                <div className="border-2 border-dashed border-neutral-300 dark:border-neutral-700 rounded-lg p-6" style={{ padding: 'var(--mz-space-6)' }}>
                  <div className="space-y-4" style={{ gap: 'var(--mz-space-4)' }}>
                    <div className="h-4 bg-neutral-300 dark:bg-neutral-700 rounded w-3/4" />
                    <div className="h-3 bg-neutral-200 dark:bg-neutral-800 rounded w-full" />
                    <div className="h-3 bg-neutral-200 dark:bg-neutral-800 rounded w-5/6" />
                    <div className="flex gap-4 mt-6" style={{ marginTop: 'var(--mz-space-6)', gap: 'var(--mz-space-4)' }}>
                      <div className="h-10 bg-primary-500/20 border border-primary-500/30 rounded-lg flex-1" />
                      <div className="h-10 bg-neutral-300 dark:bg-neutral-700 rounded-lg flex-1" />
                    </div>
                  </div>
                </div>
                <div className="mt-4 text-sm text-neutral-500 dark:text-neutral-500">
                  <code>padding: var(--mz-space-6)</code>, <code>gap: var(--mz-space-4)</code>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-medium text-neutral-900 dark:text-white">Button Sizes</h4>
              <div className="bg-neutral-50 dark:bg-neutral-950/50 border border-neutral-200 dark:border-neutral-800 rounded-xl p-6 space-y-4">
                <button
                  className="px-3 py-1.5 bg-primary-500/20 border border-primary-500/30 rounded-lg text-sm text-neutral-900 dark:text-white"
                  style={{ padding: 'var(--mz-space-1-5) var(--mz-space-3)' }}
                >
                  Small Button
                </button>
                <button
                  className="px-4 py-2 bg-primary-500/20 border border-primary-500/30 rounded-lg text-neutral-900 dark:text-white"
                  style={{ padding: 'var(--mz-space-2) var(--mz-space-4)' }}
                >
                  Medium Button
                </button>
                <button
                  className="px-6 py-3 bg-primary-500/20 border border-primary-500/30 rounded-lg text-lg text-neutral-900 dark:text-white"
                  style={{ padding: 'var(--mz-space-3) var(--mz-space-6)' }}
                >
                  Large Button
                </button>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-medium text-neutral-900 dark:text-white">Responsive Grid</h4>
              <div className="bg-neutral-50 dark:bg-neutral-950/50 border border-neutral-200 dark:border-neutral-800 rounded-xl p-6">
                <div className="grid grid-cols-3 gap-4" style={{ gap: 'var(--mz-space-4)' }}>
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div
                      key={i}
                      className="h-20 bg-gradient-to-br from-primary-500/20 to-green-500/20 rounded-xl border border-primary-500/30"
                      style={{ borderRadius: 'var(--mz-radius-xl)' }}
                    />
                  ))}
                </div>
                <div className="mt-4 text-sm text-neutral-500 dark:text-neutral-500">
                  <code>gap: var(--mz-space-4)</code>, <code>border-radius: var(--mz-radius-xl)</code>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}