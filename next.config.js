/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
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
      {
        protocol: 'https',
        hostname: 'erudit.hb.ru-msk.vkcloud-storage.ru',
        port: '',
      },
    ]
  },
}

module.exports = nextConfig
