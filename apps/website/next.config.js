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
      '@webcomponents/webcomponentsjs': require.resolve('@webcomponents/webcomponentsjs'),
    };
    
    return config;
  }
};

module.exports = nextConfig;