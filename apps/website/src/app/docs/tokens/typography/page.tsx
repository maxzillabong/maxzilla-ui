'use client';

import { useState } from 'react';
import { Type, AlignLeft, Copy, Check, Hash } from 'lucide-react';

const fontSizes = [
  { token: '--mz-text-xs', name: 'xs', value: 'clamp(0.75rem, 0.7rem + 0.25vw, 0.8rem)', preview: '12-13px' },
  { token: '--mz-text-sm', name: 'sm', value: 'clamp(0.875rem, 0.8rem + 0.375vw, 0.95rem)', preview: '14-15px' },
  { token: '--mz-text-base', name: 'base', value: 'clamp(1rem, 0.9rem + 0.5vw, 1.125rem)', preview: '16-18px' },
  { token: '--mz-text-lg', name: 'lg', value: 'clamp(1.125rem, 1rem + 0.625vw, 1.25rem)', preview: '18-20px' },
  { token: '--mz-text-xl', name: 'xl', value: 'clamp(1.25rem, 1.1rem + 0.75vw, 1.5rem)', preview: '20-24px' },
  { token: '--mz-text-2xl', name: '2xl', value: 'clamp(1.5rem, 1.3rem + 1vw, 2rem)', preview: '24-32px' },
  { token: '--mz-text-3xl', name: '3xl', value: 'clamp(1.875rem, 1.6rem + 1.375vw, 2.5rem)', preview: '30-40px' },
  { token: '--mz-text-4xl', name: '4xl', value: 'clamp(2.25rem, 1.9rem + 1.75vw, 3rem)', preview: '36-48px' },
  { token: '--mz-text-5xl', name: '5xl', value: 'clamp(3rem, 2.5rem + 2.5vw, 4rem)', preview: '48-64px' },
];

const fontWeights = [
  { token: '--mz-font-light', name: 'Light', value: '300' },
  { token: '--mz-font-normal', name: 'Normal', value: '400' },
  { token: '--mz-font-medium', name: 'Medium', value: '500' },
  { token: '--mz-font-semibold', name: 'Semibold', value: '600' },
  { token: '--mz-font-bold', name: 'Bold', value: '700' },
  { token: '--mz-font-extrabold', name: 'Extrabold', value: '800' },
];

const lineHeights = [
  { token: '--mz-leading-tight', name: 'Tight', value: '1.25' },
  { token: '--mz-leading-snug', name: 'Snug', value: '1.375' },
  { token: '--mz-leading-normal', name: 'Normal', value: '1.5' },
  { token: '--mz-leading-relaxed', name: 'Relaxed', value: '1.625' },
  { token: '--mz-leading-loose', name: 'Loose', value: '2' },
];

const letterSpacing = [
  { token: '--mz-tracking-tighter', name: 'Tighter', value: '-0.05em' },
  { token: '--mz-tracking-tight', name: 'Tight', value: '-0.025em' },
  { token: '--mz-tracking-normal', name: 'Normal', value: '0' },
  { token: '--mz-tracking-wide', name: 'Wide', value: '0.025em' },
  { token: '--mz-tracking-wider', name: 'Wider', value: '0.05em' },
  { token: '--mz-tracking-widest', name: 'Widest', value: '0.1em' },
];

function TypeRow({ token, name, value, preview, fontSize }: any) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(token);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="group flex items-center gap-4 p-4 rounded-xl hover:bg-neutral-100 dark:bg-neutral-800/50 transition-all cursor-pointer"
      onClick={handleCopy}
    >
      <div className="flex-1">
        <div
          className="text-neutral-900 dark:text-white mb-2"
          style={{ fontSize: fontSize || value }}
        >
          The quick brown fox jumps
        </div>
        <div className="flex items-center gap-4 text-sm">
          <span className="font-mono text-neutral-600 dark:text-neutral-400">{token}</span>
          {preview && <span className="text-neutral-500">{preview}</span>}
          <span className="text-neutral-500">{name}</span>
        </div>
      </div>
      {copied ? (
        <Check className="w-4 h-4 text-green-500" />
      ) : (
        <Copy className="w-4 h-4 text-neutral-600 dark:text-neutral-400 opacity-0 group-hover:opacity-100 transition-opacity" />
      )}
    </div>
  );
}

function WeightDemo({ token, name, value }: any) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(token);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="group p-4 rounded-xl hover:bg-neutral-100 dark:bg-neutral-800/50 transition-all cursor-pointer"
      onClick={handleCopy}
    >
      <div
        className="text-2xl text-neutral-900 dark:text-white mb-2"
        style={{ fontWeight: value }}
      >
        {name}
      </div>
      <div className="flex items-center justify-between text-sm">
        <span className="font-mono text-neutral-600 dark:text-neutral-400">{token}</span>
        {copied ? (
          <Check className="w-4 h-4 text-green-500" />
        ) : (
          <Copy className="w-4 h-4 text-neutral-600 dark:text-neutral-400 opacity-0 group-hover:opacity-100 transition-opacity" />
        )}
      </div>
    </div>
  );
}

export default function TypographyPage() {
  const [activeTab, setActiveTab] = useState('scale');
  const [copiedUsage, setCopiedUsage] = useState('');
  const [sampleText, setSampleText] = useState('The quick brown fox jumps over the lazy dog');

  const handleCopyUsage = (code: string, type: string) => {
    navigator.clipboard.writeText(code);
    setCopiedUsage(type);
    setTimeout(() => setCopiedUsage(''), 2000);
  };

  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-4 flex items-center gap-3">
          <Type className="w-8 h-8 text-primary-500" />
          Typography System
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
          Fluid typography with responsive sizing and comprehensive font controls. Our type system ensures readability across all devices.
        </p>
      </div>

      <div className="flex gap-2 border-b border-neutral-200 dark:border-neutral-800">
        {['scale', 'weights', 'spacing', 'usage'].map((tab) => (
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
          <div className="flex items-center gap-3 text-sm text-neutral-500">
            <Hash className="w-4 h-4" />
            <span>Fluid typography scales with viewport width</span>
          </div>
          <div className="space-y-2">
            {fontSizes.map((item) => (
              <TypeRow key={item.token} {...item} />
            ))}
          </div>
        </div>
      )}

      {activeTab === 'weights' && (
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-2">Font Weights</h3>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm">
              Six carefully selected weights for hierarchy and emphasis.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {fontWeights.map((item) => (
              <WeightDemo key={item.token} {...item} />
            ))}
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-4">Line Height</h3>
              <div className="space-y-3">
                {lineHeights.map((item) => (
                  <div key={item.token} className="group flex items-start gap-4 p-4 rounded-xl hover:bg-neutral-100 dark:bg-neutral-800/50 transition-all cursor-pointer">
                    <div className="flex-1">
                      <div
                        className="text-neutral-700 dark:text-neutral-300 mb-2"
                        style={{ lineHeight: item.value }}
                      >
                        {sampleText}. {sampleText}. This demonstrates the line height spacing between multiple lines of text.
                      </div>
                      <div className="flex items-center gap-4 text-sm">
                        <span className="font-mono text-neutral-600 dark:text-neutral-400">{item.token}</span>
                        <span className="text-neutral-500">{item.name} ({item.value})</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'spacing' && (
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-2">Letter Spacing</h3>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-6">
              Control the space between characters for improved readability.
            </p>
            <div className="space-y-3">
              {letterSpacing.map((item) => (
                <div key={item.token} className="group flex items-center gap-4 p-4 rounded-xl hover:bg-neutral-100 dark:bg-neutral-800/50 transition-all cursor-pointer">
                  <div className="flex-1">
                    <div
                      className="text-xl text-neutral-900 dark:text-white mb-2"
                      style={{ letterSpacing: item.value }}
                    >
                      {sampleText}
                    </div>
                    <div className="flex items-center gap-4 text-sm">
                      <span className="font-mono text-neutral-600 dark:text-neutral-400">{item.token}</span>
                      <span className="text-neutral-500">{item.name} ({item.value})</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-4">Font Families</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h4 className="text-lg font-medium text-neutral-900 dark:text-white">Sans Serif</h4>
                <div className="bg-neutral-50 dark:bg-neutral-950/50 border border-neutral-200 dark:border-neutral-800 rounded-xl p-4">
                  <div className="text-lg text-neutral-900 dark:text-white mb-3" style={{ fontFamily: 'var(--mz-font-sans)' }}>
                    {sampleText}
                  </div>
                  <code className="text-xs text-neutral-600 dark:text-neutral-400">--mz-font-sans</code>
                  <div className="text-xs text-neutral-500 mt-2">
                    Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto...
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <h4 className="text-lg font-medium text-neutral-900 dark:text-white">Monospace</h4>
                <div className="bg-neutral-50 dark:bg-neutral-950/50 border border-neutral-200 dark:border-neutral-800 rounded-xl p-4">
                  <div className="text-lg text-neutral-900 dark:text-white mb-3" style={{ fontFamily: 'var(--mz-font-mono)' }}>
                    {sampleText}
                  </div>
                  <code className="text-xs text-neutral-600 dark:text-neutral-400">--mz-font-mono</code>
                  <div className="text-xs text-neutral-500 mt-2">
                    JetBrains Mono, Fira Code, Consolas, Monaco...
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'usage' && (
        <div className="space-y-8">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-neutral-900 dark:text-white">Using Typography Tokens</h3>
            <p className="text-neutral-600 dark:text-neutral-400">
              Typography tokens provide consistent text styling across your application with fluid, responsive sizing.
            </p>
          </div>

          <div className="space-y-6">
            <div className="space-y-3">
              <h4 className="text-lg font-medium text-neutral-900 dark:text-white flex items-center gap-2">
                <AlignLeft className="w-5 h-5 text-blue-500" />
                In CSS
              </h4>
              <div className="relative group">
                <pre className="bg-neutral-50 dark:bg-neutral-950/50 border border-neutral-200 dark:border-neutral-800 rounded-xl p-4 overflow-x-auto">
                  <code className="text-sm text-neutral-700 dark:text-neutral-300">{`.heading {
  font-family: var(--mz-font-sans);
  font-size: var(--mz-text-4xl);
  font-weight: var(--mz-font-bold);
  line-height: var(--mz-leading-tight);
  letter-spacing: var(--mz-tracking-tight);
}

.body-text {
  font-size: var(--mz-text-base);
  line-height: var(--mz-leading-relaxed);
}`}</code>
                </pre>
                <button
                  onClick={() => handleCopyUsage(`.heading {
  font-family: var(--mz-font-sans);
  font-size: var(--mz-text-4xl);
  font-weight: var(--mz-font-bold);
  line-height: var(--mz-leading-tight);
  letter-spacing: var(--mz-tracking-tight);
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
                  <code className="text-sm text-neutral-700 dark:text-neutral-300">{`<style>
  mz-card::part(title) {
    font-size: var(--mz-text-xl);
    font-weight: var(--mz-font-semibold);
  }
</style>

<mz-card>
  <h2 slot="title" style="font-size: var(--mz-text-2xl)">
    Custom Title Size
  </h2>
</mz-card>`}</code>
                </pre>
                <button
                  onClick={() => handleCopyUsage(`mz-card::part(title) {
  font-size: var(--mz-text-xl);
  font-weight: var(--mz-font-semibold);
}`, 'html')}
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
              <h4 className="text-lg font-medium text-neutral-900 dark:text-white">Responsive Typography</h4>
              <div className="relative group">
                <pre className="bg-neutral-50 dark:bg-neutral-950/50 border border-neutral-200 dark:border-neutral-800 rounded-xl p-4 overflow-x-auto">
                  <code className="text-sm text-neutral-700 dark:text-neutral-300">{`/* Fluid typography automatically scales */
.title {
  /* Scales from 36px to 48px based on viewport */
  font-size: var(--mz-text-4xl);
}

/* Override with fixed sizes if needed */
@media (max-width: 640px) {
  .title {
    font-size: 2rem; /* Fixed 32px on mobile */
  }
}`}</code>
                </pre>
                <button
                  onClick={() => handleCopyUsage(`/* Fluid typography automatically scales */
.title {
  font-size: var(--mz-text-4xl);
}`, 'responsive')}
                  className="absolute top-4 right-4 p-2 bg-neutral-100 dark:bg-neutral-800 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  {copiedUsage === 'responsive' ? (
                    <Check className="w-4 h-4 text-green-500" />
                  ) : (
                    <Copy className="w-4 h-4 text-neutral-600 dark:text-neutral-400" />
                  )}
                </button>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-medium text-neutral-900 dark:text-white">Typography Combinations</h4>
            <div className="bg-neutral-50 dark:bg-neutral-950/50 border border-neutral-200 dark:border-neutral-800 rounded-xl p-6 space-y-6">
              <div>
                <h1 className="text-4xl font-bold text-neutral-900 dark:text-white mb-2" style={{ fontSize: 'var(--mz-text-4xl)', fontWeight: 'var(--mz-font-bold)' }}>
                  Display Heading
                </h1>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                  <code>--mz-text-4xl</code> + <code>--mz-font-bold</code>
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-2" style={{ fontSize: 'var(--mz-text-2xl)', fontWeight: 'var(--mz-font-semibold)' }}>
                  Section Title
                </h2>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                  <code>--mz-text-2xl</code> + <code>--mz-font-semibold</code>
                </p>
              </div>
              <div>
                <p className="text-base text-neutral-700 dark:text-neutral-300 leading-relaxed" style={{ fontSize: 'var(--mz-text-base)', lineHeight: 'var(--mz-leading-relaxed)' }}>
                  Body text with relaxed line height for better readability in longer passages. This combination works well for articles and documentation.
                </p>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm mt-2">
                  <code>--mz-text-base</code> + <code>--mz-leading-relaxed</code>
                </p>
              </div>
              <div>
                <code className="text-sm font-mono text-primary-500" style={{ fontSize: 'var(--mz-text-sm)', fontFamily: 'var(--mz-font-mono)' }}>
                  const example = "Monospace code";
                </code>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm mt-2">
                  <code>--mz-text-sm</code> + <code>--mz-font-mono</code>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
