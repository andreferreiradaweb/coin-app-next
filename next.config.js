/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['s3.eu-central-1.amazonaws.com'],
  },
  experimental: {
    appDir: true
  },
}

module.exports = nextConfig
