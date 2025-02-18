/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  images: {
    unoptimized: true
  },
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',
  basePath: isProd ? '/webdev-portfolio' : '',
  assetPrefix: isProd ? '/webdev-portfolio/' : '',
}

module.exports = nextConfig
