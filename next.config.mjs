import bundleAnalyzer from '@next/bundle-analyzer';

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizeCss: true,
  },

  compiler: {
    removeConsole: isProd ? { exclude: ['error'] } : false,
  },

  images: {
    formats: ['image/avif', 'image/webp'],
    qualities: [75, 78, 82, 85, 90, 95],
  },

  poweredByHeader: false,
  compress: true,

  devIndicators: false,
};

export default withBundleAnalyzer(nextConfig);
