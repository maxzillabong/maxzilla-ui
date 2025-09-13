'use client';

import { useState } from 'react';
import { Sun, Sparkles, Copy, Check, Layers } from 'lucide-react';

const boxShadows = [
  { token: '--mz-shadow-none', name: 'None', value: 'none' },
  { token: '--mz-shadow-xs', name: 'XS', value: '0 1px 2px 0 rgb(0 0 0 / 0.05)' },
  { token: '--mz-shadow-sm', name: 'Small', value: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)' },
  { token: '--mz-shadow-base', name: 'Base', value: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)' },
  { token: '--mz-shadow-md', name: 'Medium', value: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)' },
  { token: '--mz-shadow-lg', name: 'Large', value: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)' },
  { token: '--mz-shadow-xl', name: 'XL', value: '0 25px 50px -12px rgb(0 0 0 / 0.25)' },
  { token: '--mz-shadow-2xl', name: '2XL', value: '0 50px 100px -20px rgb(0 0 0 / 0.25)' },
];

const glowShadows = [
  { token: '--mz-shadow-primary-glow', name: 'Primary', value: '0 0 20px rgb(6 182 212 / 0.3)', color: 'cyan' },
  { token: '--mz-shadow-primary-glow-hover', name: 'Primary Hover', value: '0 0 30px rgb(6 182 212 / 0.4)', color: 'cyan' },
  { token: '--mz-shadow-error-glow', name: 'Error', value: '0 0 20px rgb(239 68 68 / 0.3)', color: 'red' },
  { token: '--mz-shadow-success-glow', name: 'Success', value: '0 0 20px rgb(34 197 94 / 0.3)', color: 'green' },
];

const innerShadows = [
  { token: '--mz-shadow-inner', name: 'Inner', value: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)' },
  { token: '--mz-shadow-inner-lg', name: 'Inner Large', value: 'inset 0 4px 8px 0 rgb(0 0 0 / 0.1)' },
];

function ShadowCard({ token, name, value, color }: any) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(token).catch(console.error);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const isInner = value.startsWith('inset');

  return (
    <div
      className="group cursor-pointer"
      onClick={handleCopy}
    >
      <div className="relative">
        <div
          className={`
            h-32 rounded-2xl transition-all duration-300
            ${isInner
              ? 'bg-neutral-100 dark:bg-neutral-800/50 hover:bg-neutral-200 dark:hover:bg-neutral-700'
              : 'bg-gradient-to-br from-neutral-200 dark:from-neutral-800 to-neutral-100 dark:to-neutral-900 hover:scale-105'
            }
            ${color === 'cyan' ? 'border border-cyan-500/20' : ''}
            ${color === 'red' ? 'border border-red-500/20' : ''}
            ${color === 'green' ? 'border border-green-500/20' : ''}
          `}
          style={{ boxShadow: value }}
        >
          {!isInner && (
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-green-500/10 opacity-50" />
          )}
        </div>
        <div className="mt-4 space-y-1">
          <div className="flex items-center justify-between">
            <span className="text-neutral-900 dark:text-white font-medium">{name}</span>
            {copied ? (
              <Check className="w-4 h-4 text-green-500" />
            ) : (
              <Copy className="w-4 h-4 text-neutral-600 dark:text-neutral-400 opacity-0 group-hover:opacity-100 transition-opacity" />
            )}
          </div>
          <div className="font-mono text-xs text-neutral-600 dark:text-neutral-400">{token}</div>
        </div>
      </div>
    </div>
  );
}

function TextShadowDemo({ token, name, value }: any) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(token).catch(console.error);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const isGlow = name.includes('Glow');

  return (
    <div
      className="group p-6 rounded-xl bg-neutral-50 dark:bg-neutral-900/50 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all cursor-pointer"
      onClick={handleCopy}
    >
      <div
        className={`text-3xl font-bold mb-3 ${isGlow ? 'text-primary-500' : 'text-neutral-900 dark:text-white'}`}
        style={{ textShadow: value }}
      >
        Shadow Text
      </div>
      <div className="flex items-center justify-between text-sm">
        <span className="text-neutral-600 dark:text-neutral-400">{name}</span>
        {copied ? (
          <Check className="w-4 h-4 text-green-500" />
        ) : (
          <Copy className="w-4 h-4 text-neutral-600 dark:text-neutral-400 opacity-0 group-hover:opacity-100 transition-opacity" />
        )}
      </div>
      <div className="font-mono text-xs text-neutral-500 mt-1">{token}</div>
    </div>
  );
}

export default function ShadowsPage() {
  const [activeTab, setActiveTab] = useState('elevation');
  const [copiedUsage, setCopiedUsage] = useState('');

  const handleCopyUsage = (code: string, type: string) => {
    navigator.clipboard.writeText(code).catch(console.error);
    setCopiedUsage(type);
    setTimeout(() => setCopiedUsage(''), 2000);
  };

  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-4 flex items-center gap-3">
          <Layers className="w-8 h-8 text-primary-500" />
          Shadow System
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
          Depth and elevation through carefully crafted shadows. From subtle depth to dramatic glows, our shadow system adds dimensionality to your UI.
        </p>
      </div>

      <div className="flex gap-2 border-b border-neutral-200 dark:border-neutral-800">
        {['elevation', 'effects', 'usage', 'examples'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 font-medium capitalize transition-all ${
              activeTab === tab
                ? 'text-neutral-900 dark:text-white border-b-2 border-primary-500'
                : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {activeTab === 'elevation' && (
        <div className="space-y-12">
          <div>
            <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-2">Box Shadows</h3>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-6">
              Elevation levels from flat to floating. Click to copy the token.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {boxShadows.map((shadow) => (
                <ShadowCard key={shadow.token} {...shadow} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-2">Inner Shadows</h3>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-6">
              Inset shadows for pressed or recessed effects.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {innerShadows.map((shadow) => (
                <ShadowCard key={shadow.token} {...shadow} />
              ))}
            </div>
          </div>
        </div>
      )}

      {activeTab === 'effects' && (
        <div className="space-y-12">
          <div>
            <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-2">Glow Effects</h3>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-6">
              Colored glows for interactive states and emphasis.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {glowShadows.map((shadow) => (
                <ShadowCard key={shadow.token} {...shadow} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-2">Text Shadows</h3>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-6">
              Text shadow effects for depth and emphasis.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { token: '--mz-text-shadow-sm', name: 'Small', value: '1px 1px 2px rgb(0 0 0 / 0.5)' },
                { token: '--mz-text-shadow-base', name: 'Base', value: '2px 2px 4px rgb(0 0 0 / 0.5)' },
                { token: '--mz-text-shadow-lg', name: 'Large', value: '4px 4px 8px rgb(0 0 0 / 0.5)' },
                { token: '--mz-text-shadow-glow', name: 'Glow', value: '0 0 10px currentColor' },
                { token: '--mz-text-shadow-glow-lg', name: 'Glow Large', value: '0 0 20px currentColor' },
              ].map((shadow) => (
                <TextShadowDemo key={shadow.token} {...shadow} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-2">Drop Shadows</h3>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-6">
              Filter-based shadows for images and irregular shapes.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { token: '--mz-drop-shadow-sm', name: 'Small' },
                { token: '--mz-drop-shadow-base', name: 'Base' },
                { token: '--mz-drop-shadow-md', name: 'Medium' },
                { token: '--mz-drop-shadow-lg', name: 'Large' },
              ].map((shadow) => (
                <div key={shadow.token} className="text-center">
                  <div
                    className="inline-block p-4 rounded-full bg-gradient-to-br from-primary-500 to-green-500 mb-3"
                    style={{ filter: `var(${shadow.token})` }}
                  >
                    <Sparkles className="w-8 h-8 text-neutral-900 dark:text-white" />
                  </div>
                  <div className="text-sm text-neutral-600 dark:text-neutral-400">{shadow.name}</div>
                  <div className="font-mono text-xs text-neutral-500">{shadow.token}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {activeTab === 'usage' && (
        <div className="space-y-8">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-neutral-900 dark:text-white">Using Shadow Tokens</h3>
            <p className="text-neutral-600 dark:text-neutral-400">
              Shadow tokens provide consistent depth and elevation throughout your application.
            </p>
          </div>

          <div className="space-y-6">
            <div className="space-y-3">
              <h4 className="text-lg font-medium text-neutral-900 dark:text-white flex items-center gap-2">
                <Sun className="w-5 h-5 text-blue-400" />
                Box Shadows
              </h4>
              <div className="relative group">
                <pre className="bg-neutral-50 dark:bg-neutral-950/50 border border-neutral-200 dark:border-neutral-800 rounded-xl p-4 overflow-x-auto">
                  <code className="text-sm text-neutral-700 dark:text-neutral-300">{`.card {
  box-shadow: var(--mz-shadow-base);
  transition: box-shadow 0.3s ease;
}

.card:hover {
  box-shadow: var(--mz-shadow-lg);
}

.button-primary {
  box-shadow: var(--mz-shadow-primary-glow);
}

.input:focus {
  box-shadow: var(--mz-shadow-primary-glow-hover);
}`}</code>
                </pre>
                <button
                  onClick={() => handleCopyUsage(`.card {
  box-shadow: var(--mz-shadow-base);
  transition: box-shadow 0.3s ease;
}

.card:hover {
  box-shadow: var(--mz-shadow-lg);
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
                  <code className="text-sm text-neutral-700 dark:text-neutral-300">{`<mz-card style="box-shadow: var(--mz-shadow-lg)">
  Elevated card content
</mz-card>

<mz-button style="--mz-button-shadow: var(--mz-shadow-primary-glow)">
  Glowing Button
</mz-button>

<style>
  /* Shadow tokens are defined in web component base styles */
  mz-modal::part(overlay) {
    box-shadow: var(--mz-shadow-2xl);
  }
</style>`}</code>
                </pre>
                <button
                  onClick={() => handleCopyUsage(`<mz-card style="box-shadow: var(--mz-shadow-lg)">
  Elevated card content
</mz-card>`, 'html')}
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
              <h4 className="text-lg font-medium text-neutral-900 dark:text-white">Dynamic Shadows</h4>
              <div className="relative group">
                <pre className="bg-neutral-50 dark:bg-neutral-950/50 border border-neutral-200 dark:border-neutral-800 rounded-xl p-4 overflow-x-auto">
                  <code className="text-sm text-neutral-700 dark:text-neutral-300">{`// Apply shadows dynamically
element.style.boxShadow = 'var(--mz-shadow-lg)';

// Combine shadows
element.style.boxShadow = \`
  var(--mz-shadow-base),
  var(--mz-shadow-primary-glow)
\`;

// Animate shadow transitions
element.animate([
  { boxShadow: 'var(--mz-shadow-sm)' },
  { boxShadow: 'var(--mz-shadow-xl)' }
], {
  duration: 300,
  easing: 'ease-out'
});`}</code>
                </pre>
                <button
                  onClick={() => handleCopyUsage(`element.style.boxShadow = 'var(--mz-shadow-lg)';`, 'js')}
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
            <h3 className="text-xl font-semibold text-neutral-900 dark:text-white">Interactive Examples</h3>
            <p className="text-neutral-600 dark:text-neutral-400">
              See shadows in action with hover states and animations.
            </p>
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <h4 className="text-lg font-medium text-neutral-900 dark:text-white">Elevation Hierarchy</h4>
              <div className="bg-neutral-50 dark:bg-neutral-950/50 border border-neutral-200 dark:border-neutral-800 rounded-xl p-8">
                <div className="space-y-6">
                  <div
                    className="p-6 bg-neutral-100 dark:bg-neutral-800 rounded-xl transition-all duration-300 hover:translate-y-[-2px]"
                    style={{ boxShadow: 'var(--mz-shadow-sm)' }}
                  >
                    <div className="text-neutral-900 dark:text-white font-medium mb-2">Surface Level 1</div>
                    <div className="text-neutral-600 dark:text-neutral-400 text-sm">Subtle elevation - Cards, list items</div>
                  </div>
                  <div
                    className="p-6 bg-neutral-100 dark:bg-neutral-800 rounded-xl transition-all duration-300 hover:translate-y-[-2px]"
                    style={{ boxShadow: 'var(--mz-shadow-md)' }}
                  >
                    <div className="text-neutral-900 dark:text-white font-medium mb-2">Surface Level 2</div>
                    <div className="text-neutral-600 dark:text-neutral-400 text-sm">Medium elevation - Dropdowns, tooltips</div>
                  </div>
                  <div
                    className="p-6 bg-neutral-100 dark:bg-neutral-800 rounded-xl transition-all duration-300 hover:translate-y-[-2px]"
                    style={{ boxShadow: 'var(--mz-shadow-xl)' }}
                  >
                    <div className="text-neutral-900 dark:text-white font-medium mb-2">Surface Level 3</div>
                    <div className="text-neutral-600 dark:text-neutral-400 text-sm">High elevation - Modals, dialogs</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-medium text-neutral-900 dark:text-white">Interactive States</h4>
              <div className="bg-neutral-50 dark:bg-neutral-950/50 border border-neutral-200 dark:border-neutral-800 rounded-xl p-8">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <button
                    className="p-4 bg-gradient-to-r from-blue-500 to-green-500 text-neutral-900 dark:text-white rounded-xl transition-all duration-300 hover:scale-105"
                    style={{
                      boxShadow: 'var(--mz-shadow-base)',
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.boxShadow = 'var(--mz-shadow-primary-glow-hover)'}
                    onMouseLeave={(e) => e.currentTarget.style.boxShadow = 'var(--mz-shadow-base)'}
                  >
                    Hover Glow
                  </button>
                  <button
                    className="p-4 bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white rounded-xl transition-all duration-300"
                    style={{
                      boxShadow: 'var(--mz-shadow-base)',
                    }}
                    onMouseDown={(e) => e.currentTarget.style.boxShadow = 'var(--mz-shadow-inner)'}
                    onMouseUp={(e) => e.currentTarget.style.boxShadow = 'var(--mz-shadow-base)'}
                    onMouseLeave={(e) => e.currentTarget.style.boxShadow = 'var(--mz-shadow-base)'}
                  >
                    Press Effect
                  </button>
                  <button
                    className="p-4 bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white rounded-xl transition-all duration-300 hover:translate-y-[-4px]"
                    style={{
                      boxShadow: 'var(--mz-shadow-md)',
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.boxShadow = 'var(--mz-shadow-xl)'}
                    onMouseLeave={(e) => e.currentTarget.style.boxShadow = 'var(--mz-shadow-md)'}
                  >
                    Lift on Hover
                  </button>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-medium text-neutral-900 dark:text-white">Layered Shadows</h4>
              <div className="bg-neutral-50 dark:bg-neutral-950/50 border border-neutral-200 dark:border-neutral-800 rounded-xl p-8">
                <div className="relative">
                  <div
                    className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-green-500/20 rounded-2xl"
                    style={{ boxShadow: 'var(--mz-shadow-primary-glow)' }}
                  />
                  <div
                    className="relative p-8 bg-neutral-50 dark:bg-neutral-900 rounded-2xl"
                    style={{ boxShadow: 'var(--mz-shadow-xl)' }}
                  >
                    <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-2">Layered Effect</h3>
                    <p className="text-neutral-600 dark:text-neutral-400">
                      Combining multiple shadow tokens creates sophisticated depth effects.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}