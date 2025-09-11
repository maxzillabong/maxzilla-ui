/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  experimental: {
    esmExternals: true
  },
  webpack: (config) => {
    // Handle web components and lit imports
    config.resolve.alias = {
      ...config.resolve.alias,
      '@maxzilla/ui-core': require.resolve('../../packages/core/src/index.ts'),
    };
    
    return config;
  },
  async rewrites() {
    return [
      {
        source: '/storybook/:path*',
        destination: 'http://localhost:6007/:path*'
      }
    ];
  }
};

module.exports = nextConfig;