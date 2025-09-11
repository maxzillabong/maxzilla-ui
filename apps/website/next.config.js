/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/maxzilla-ui',
  assetPrefix: '/maxzilla-ui',
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
  }
};

module.exports = nextConfig;