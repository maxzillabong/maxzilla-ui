/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: isProd ? '/maxzilla-ui' : '',
  assetPrefix: isProd ? '/maxzilla-ui' : '',
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