/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["imgholder.ru", 'sun9-1.userapi.com'],
  },
}

module.exports = nextConfig
