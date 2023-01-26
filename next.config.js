/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images:{
    domains:['firebasestorage.googleapis.com', 'source.unsplash.com']
  },
  pageExtensions:['page.tsx','api.ts']
}

module.exports = nextConfig
