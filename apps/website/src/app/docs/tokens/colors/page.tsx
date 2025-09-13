'use client';

import { useState } from 'react';
import { Copy, Check, Palette, Droplet } from 'lucide-react';

const colorCategories = {
  primary: {
    name: 'Primary',
    description: 'Modern teal/cyan palette for primary actions and focus states',
    colors: [
      { token: '--mz-color-primary-50', value: 'hsl(180, 100%, 97%)', label: '50' },
      { token: '--mz-color-primary-100', value: 'hsl(180, 84%, 92%)', label: '100' },
      { token: '--mz-color-primary-200', value: 'hsl(180, 83%, 84%)', label: '200' },
      { token: '--mz-color-primary-300', value: 'hsl(180, 82%, 72%)', label: '300' },
      { token: '--mz-color-primary-400', value: 'hsl(180, 76%, 58%)', label: '400' },
      { token: '--mz-color-primary-500', value: 'hsl(180, 70%, 45%)', label: '500' },
      { token: '--mz-color-primary-600', value: 'hsl(180, 75%, 37%)', label: '600' },
      { token: '--mz-color-primary-700', value: 'hsl(180, 79%, 30%)', label: '700' },
      { token: '--mz-color-primary-800', value: 'hsl(180, 82%, 25%)', label: '800' },
      { token: '--mz-color-primary-900', value: 'hsl(180, 86%, 20%)', label: '900' },
      { token: '--mz-color-primary-950', value: 'hsl(180, 92%, 12%)', label: '950' },
    ],
  },
  neutral: {
    name: 'Neutral',
    description: 'Clean grays for text, borders, and backgrounds',
    colors: [
      { token: '--mz-color-neutral-0', value: 'hsl(0, 0%, 100%)', label: '0' },
      { token: '--mz-color-neutral-50', value: 'hsl(210, 20%, 98%)', label: '50' },
      { token: '--mz-color-neutral-100', value: 'hsl(220, 14%, 96%)', label: '100' },
      { token: '--mz-color-neutral-200', value: 'hsl(220, 13%, 91%)', label: '200' },
      { token: '--mz-color-neutral-300', value: 'hsl(216, 12%, 84%)', label: '300' },
      { token: '--mz-color-neutral-400', value: 'hsl(218, 11%, 65%)', label: '400' },
      { token: '--mz-color-neutral-500', value: 'hsl(220, 9%, 46%)', label: '500' },
      { token: '--mz-color-neutral-600', value: 'hsl(215, 14%, 34%)', label: '600' },
      { token: '--mz-color-neutral-700', value: 'hsl(217, 19%, 27%)', label: '700' },
      { token: '--mz-color-neutral-800', value: 'hsl(215, 28%, 17%)', label: '800' },
      { token: '--mz-color-neutral-900', value: 'hsl(221, 39%, 11%)', label: '900' },
      { token: '--mz-color-neutral-950', value: 'hsl(224, 71%, 4%)', label: '950' },
    ],
  },
  semantic: {
    name: 'Semantic',
    description: 'Colors for communicating states and feedback',
    colors: [
      { token: '--mz-color-success-500', value: 'hsl(142, 71%, 45%)', label: 'Success', icon: '✓' },
      { token: '--mz-color-warning-500', value: 'hsl(38, 92%, 50%)', label: 'Warning', icon: '⚠' },
      { token: '--mz-color-error-500', value: 'hsl(0, 84%, 60%)', label: 'Error', icon: '✕' },
    ],
  },
  accent: {
    name: 'Accent',
    description: 'Vibrant colors for highlights and special effects',
    colors: [
      { token: '--mz-color-accent-purple', value: 'hsl(270, 95%, 75%)', label: 'Purple' },
      { token: '--mz-color-accent-blue', value: 'hsl(210, 100%, 70%)', label: 'Blue' },
      { token: '--mz-color-accent-pink', value: 'hsl(320, 100%, 75%)', label: 'Pink' },
      { token: '--mz-color-accent-orange', value: 'hsl(25, 100%, 65%)', label: 'Orange' },
    ],
  },
};

function ColorSwatch({ token, value, label, icon }: any) {
  const [copied, setCopied] = useState(false);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const isLight = label && (label === '0' || label === '50' || label === '100' || label === '200');

  return (
    <div className="group relative">
      <div
        className="relative rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
        onClick={() => handleCopy(token)}
      >
        <div
          className="h-24 w-full relative"
          style={{ backgroundColor: value }}
        >
          {icon && (
            <div className={`absolute inset-0 flex items-center justify-center text-2xl ${isLight ? 'text-gray-900' : 'text-white'}`}>
              {icon}
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
        <div className="bg-neutral-100 dark:bg-neutral-800 backdrop-blur-sm p-3 space-y-1">
          <div className="flex items-center justify-between">
            <span className="text-neutral-900 dark:text-white font-semibold text-sm">{label}</span>
            {copied ? (
              <Check className="w-4 h-4 text-green-500" />
            ) : (
              <Copy className="w-4 h-4 text-neutral-600 dark:text-neutral-400 opacity-0 group-hover:opacity-100 transition-opacity" />
            )}
          </div>
          <div className="text-xs text-neutral-600 dark:text-neutral-400 font-mono truncate">{token}</div>
          <div className="text-xs text-neutral-500 dark:text-neutral-500 font-mono">{value}</div>
        </div>
      </div>
    </div>
  );
}

export default function ColorsPage() {
  const [activeTab, setActiveTab] = useState('overview');
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
          <Palette className="w-8 h-8 text-primary-500" />
          Color System
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
          Our color system uses HSL values for better control over variations and themes.
          All colors are available as CSS custom properties on the root element.
        </p>
      </div>

      <div className="flex gap-2 border-b border-neutral-200 dark:border-neutral-800">
        {['overview', 'usage', 'theming'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 font-medium capitalize transition-all ${
              activeTab === tab
                ? 'text-primary-600 dark:text-primary-400 border-b-2 border-primary-500'
                : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {activeTab === 'overview' && (
        <div className="space-y-12">
          {Object.entries(colorCategories).map(([key, category]) => (
            <div key={key} className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-2">{category.name}</h3>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm">{category.description}</p>
              </div>
              <div className={`grid gap-4 ${
                key === 'semantic' || key === 'accent'
                  ? 'grid-cols-2 sm:grid-cols-4'
                  : 'grid-cols-3 sm:grid-cols-4 md:grid-cols-6'
              }`}>
                {category.colors.map((color) => (
                  <ColorSwatch key={color.token} {...color} />
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'usage' && (
        <div className="space-y-8">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-neutral-900 dark:text-white">Using Color Tokens</h3>
            <p className="text-neutral-600 dark:text-neutral-400">
              Color tokens are exposed as CSS custom properties and can be used in your styles or directly in component attributes.
            </p>
          </div>

          <div className="space-y-6">
            <div className="space-y-3">
              <h4 className="text-lg font-medium text-neutral-900 dark:text-white flex items-center gap-2">
                <Droplet className="w-5 h-5 text-blue-500" />
                In CSS
              </h4>
              <div className="relative group">
                <pre className="bg-neutral-50 dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800 rounded-xl p-4 overflow-x-auto">
                  <code className="text-sm text-neutral-700 dark:text-neutral-300">{`.my-element {
  background: var(--mz-color-primary-500);
  color: var(--mz-color-neutral-100);
  border: 1px solid var(--mz-color-neutral-700);
}

.error-state {
  background: var(--mz-color-error-50);
  color: var(--mz-color-error-600);
}`}</code>
                </pre>
                <button
                  onClick={() => handleCopyUsage(`.my-element {
  background: var(--mz-color-primary-500);
  color: var(--mz-color-neutral-100);
  border: 1px solid var(--mz-color-neutral-700);
}`, 'css')}
                  className="absolute top-4 right-4 p-2 bg-neutral-200 dark:bg-neutral-800 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
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
                <pre className="bg-neutral-50 dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800 rounded-xl p-4 overflow-x-auto">
                  <code className="text-sm text-neutral-700 dark:text-neutral-300">{`<mz-button style="--mz-button-bg: var(--mz-color-accent-purple)">
  Custom Color Button
</mz-button>

<mz-card style="background: var(--mz-color-neutral-900)">
  Dark card content
</mz-card>`}</code>
                </pre>
                <button
                  onClick={() => handleCopyUsage(`<mz-button style="--mz-button-bg: var(--mz-color-accent-purple)">
  Custom Color Button
</mz-button>`, 'html')}
                  className="absolute top-4 right-4 p-2 bg-neutral-200 dark:bg-neutral-800 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
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
                <pre className="bg-neutral-50 dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800 rounded-xl p-4 overflow-x-auto">
                  <code className="text-sm text-neutral-700 dark:text-neutral-300">{`// Get computed color value
const primaryColor = getComputedStyle(document.documentElement)
  .getPropertyValue('--mz-color-primary-500');

// Set custom color
element.style.setProperty('--mz-color-primary-500', 'hsl(200, 70%, 45%)');`}</code>
                </pre>
                <button
                  onClick={() => handleCopyUsage(`const primaryColor = getComputedStyle(document.documentElement)
  .getPropertyValue('--mz-color-primary-500');`, 'js')}
                  className="absolute top-4 right-4 p-2 bg-neutral-200 dark:bg-neutral-800 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
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

      {activeTab === 'theming' && (
        <div className="space-y-8">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-neutral-900 dark:text-white">Theme Support</h3>
            <p className="text-neutral-600 dark:text-neutral-400">
              Maxzilla UI supports light and dark themes out of the box. Themes are applied using data attributes and CSS custom properties.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="text-lg font-medium text-neutral-900 dark:text-white">Dark Theme (Default)</h4>
              <div className="bg-neutral-50 dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800 rounded-xl p-6 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-neutral-600 dark:text-neutral-400">Background</span>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-gray-950 border border-neutral-300 dark:border-gray-700" />
                    <code className="text-xs text-neutral-500 dark:text-neutral-500">--mz-color-neutral-950</code>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-neutral-600 dark:text-neutral-400">Surface</span>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-gray-900 border border-neutral-300 dark:border-gray-700" />
                    <code className="text-xs text-neutral-500 dark:text-neutral-500">--mz-color-neutral-900</code>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-neutral-600 dark:text-neutral-400">Text</span>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-gray-100 border border-neutral-300 dark:border-gray-700" />
                    <code className="text-xs text-neutral-500 dark:text-neutral-500">--mz-color-neutral-100</code>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-medium text-neutral-900 dark:text-white">Light Theme</h4>
              <div className="bg-neutral-50 dark:bg-white/5 border border-neutral-200 dark:border-neutral-800 rounded-xl p-6 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-neutral-600 dark:text-neutral-400">Background</span>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-white border border-neutral-300 dark:border-gray-700" />
                    <code className="text-xs text-neutral-500 dark:text-neutral-500">--mz-color-neutral-0</code>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-neutral-600 dark:text-neutral-400">Surface</span>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-gray-50 border border-neutral-300 dark:border-gray-700" />
                    <code className="text-xs text-neutral-500 dark:text-neutral-500">--mz-color-neutral-50</code>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-neutral-600 dark:text-neutral-400">Text</span>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-gray-900 border border-neutral-300 dark:border-gray-700" />
                    <code className="text-xs text-neutral-500 dark:text-neutral-500">--mz-color-neutral-900</code>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-lg font-medium text-neutral-900 dark:text-white">Applying Themes</h4>
            <div className="relative group">
              <pre className="bg-neutral-50 dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800 rounded-xl p-4 overflow-x-auto">
                <code className="text-sm text-neutral-700 dark:text-neutral-300">{`<!-- Apply theme to entire document -->
<html data-theme="dark">

<!-- Or to specific components -->
<mz-card data-theme="light">
  This card will use light theme
</mz-card>

<!-- Toggle theme with JavaScript -->
<script>
  document.documentElement.setAttribute('data-theme', 'light');
</script>`}</code>
              </pre>
              <button
                onClick={() => handleCopyUsage(`document.documentElement.setAttribute('data-theme', 'light');`, 'theme')}
                className="absolute top-4 right-4 p-2 bg-neutral-200 dark:bg-neutral-800 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
              >
                {copiedUsage === 'theme' ? (
                  <Check className="w-4 h-4 text-green-500" />
                ) : (
                  <Copy className="w-4 h-4 text-neutral-600 dark:text-neutral-400" />
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}