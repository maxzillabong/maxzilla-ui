import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Maxzilla UI - Modern Web Components Library',
  description: 'A beautiful, modern web components library with Aceternity-inspired design. Built with Lit Element, TypeScript, and featuring smooth animations.',
  keywords: [
    'web components',
    'lit element',
    'ui library',
    'design system',
    'typescript',
    'react',
    'vue',
    'svelte',
    'angular',
    'aceternity'
  ],
  authors: [{ name: 'Max Vananen', url: 'https://maxzilla.nl' }],
  creator: 'Max Vananen',
  publisher: 'Maxzilla',
  robots: 'index, follow',
  openGraph: {
    title: 'Maxzilla UI - Modern Web Components Library',
    description: 'Beautiful, framework-agnostic UI components with smooth animations and modern design.',
    url: 'https://ui.maxzilla.nl',
    siteName: 'Maxzilla UI',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Maxzilla UI - Modern Web Components Library',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Maxzilla UI - Modern Web Components Library',
    description: 'Beautiful, framework-agnostic UI components with smooth animations.',
    images: ['/og-image.png'],
  },
  viewport: 'width=device-width, initial-scale=1',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#06B6D4' },
    { media: '(prefers-color-scheme: dark)', color: '#0891B2' }
  ],
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <title>Maxzilla UI - Modern Web Components Library</title>
        <meta name="description" content="A beautiful, modern web components library with Aceternity-inspired design. Built with Lit Element, TypeScript, and featuring smooth animations." />
        <meta name="keywords" content="web components, lit element, ui library, design system, typescript, react, vue, svelte, angular, aceternity" />
        <meta name="author" content="Max Vananen" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon-32x32.png" sizes="32x32" type="image/png" />
        <link rel="icon" href="/favicon-16x16.png" sizes="16x16" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" type="image/png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#06B6D4" />
        <meta name="msapplication-TileColor" content="#06B6D4" />
        <meta name="theme-color" content="#06B6D4" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#0891B2" media="(prefers-color-scheme: dark)" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Theme detection and Web Components polyfill
              (function() {
                // Set initial theme
                const theme = localStorage.getItem('theme') || 
                  (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
                document.documentElement.setAttribute('data-theme', theme);
                
                // Load Web Components polyfill if needed
                if (!('customElements' in window)) {
                  const script = document.createElement('script');
                  script.src = 'https://unpkg.com/@webcomponents/webcomponentsjs@2.8.0/webcomponents-loader.js';
                  document.head.appendChild(script);
                }
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 antialiased">
        {children}

        {/* Web Components loader */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Load Maxzilla UI components
              if (typeof window !== 'undefined' && 'customElements' in window) {
                import('maxzilla-ui-core').catch(console.error);
              }
            `,
          }}
        />
      </body>
    </html>
  )
}
