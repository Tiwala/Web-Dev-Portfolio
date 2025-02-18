/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true
  },
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',
  basePath: '/webdev-portfolio', // Replace with your repository name
  assetPrefix: '/webdev-portfolio/', // Replace with your repository name
}

module.exports = nextConfig
