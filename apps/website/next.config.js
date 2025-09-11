/** @type {import('next').NextConfig} */
const nextConfig = {
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
      '@webcomponents/webcomponentsjs': require.resolve('@webcomponents/webcomponentsjs'),
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