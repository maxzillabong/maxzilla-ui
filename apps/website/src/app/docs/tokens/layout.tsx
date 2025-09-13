'use client';

import { ReactNode } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Header } from '@/components/Header';
import { SiteSidebar } from '@/components/SiteSidebar';
import { Palette, Type, Ruler, Layers, Zap, Square } from 'lucide-react';

interface TokenLayoutProps {
  children: ReactNode;
}

const tokenCategories = [
  { href: '/docs/tokens/colors', label: 'Colors', icon: Palette },
  { href: '/docs/tokens/typography', label: 'Typography', icon: Type },
  { href: '/docs/tokens/spacing', label: 'Spacing', icon: Ruler },
  { href: '/docs/tokens/shadows', label: 'Shadows', icon: Layers },
  { href: '/docs/tokens/animations', label: 'Animations', icon: Zap },
  { href: '/docs/tokens/borders', label: 'Borders', icon: Square },
];

export default function TokenLayout({ children }: TokenLayoutProps) {
  const pathname = usePathname();

  return (
    <>
      <Header />
      <div className="flex min-h-screen bg-white dark:bg-neutral-950">
        {/* Sidebar */}
        <aside className="hidden md:block w-64 border-r border-neutral-200 dark:border-neutral-800 pt-16">
          <div className="sticky top-16 p-6">
            <SiteSidebar current={undefined} pathname={pathname} sticky={true} filter="" />
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 pt-16">
          <div className="max-w-5xl mx-auto px-6 py-12">
            <div className="mb-12">
              <h1 className="text-4xl font-bold text-gradient mb-4">
                Design Tokens
              </h1>
              <p className="text-neutral-600 dark:text-neutral-400 text-lg">
                CSS custom properties that power the Maxzilla UI design system
              </p>
            </div>

            <nav className="flex gap-2 mb-12 flex-wrap">
              {tokenCategories.map((category) => {
                const Icon = category.icon;
                return (
                  <Link
                    key={category.href}
                    href={category.href}
                    className={`
                      px-4 py-2 rounded-lg font-medium transition-all duration-200
                      flex items-center gap-2 group
                      ${pathname === category.href
                        ? 'bg-primary-500/10 text-primary-600 dark:text-primary-400 border border-primary-500/20'
                        : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white border border-neutral-200 dark:border-neutral-700 hover:border-primary-500/30'
                      }
                    `}
                  >
                    <Icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    {category.label}
                  </Link>
                );
              })}
            </nav>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 to-green-500/5 rounded-2xl blur-2xl" />
              <div className="relative bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 p-8 shadow-sm">
                {children}
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}