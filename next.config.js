/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Optimize for Vercel deployment
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Ensure proper module resolution
  transpilePackages: [
    '@mui/material',
    '@emotion/react',
    '@emotion/styled',
    '@mui/icons-material',
    'framer-motion',
    'typewriter-effect'
  ],
  // Optimize images
  images: {
    unoptimized: true,
  },
  // Reduce build time
  typescript: {
    // ⚠️ This allows production builds to successfully complete even if your project has type errors.
    ignoreBuildErrors: false, // Keep false to catch errors, but set to true if needed
  },
  eslint: {
    // This allows production builds to successfully complete even if your project has ESLint errors.
    ignoreDuringBuilds: false,
  },
  // Enable static exports for better performance
  output: 'standalone',
};

module.exports = nextConfig;