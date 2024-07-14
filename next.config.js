/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.userapi.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: '**.vkuserphoto.ru',
        port: '',
      },
    ]
  },
}

module.exports = nextConfig
