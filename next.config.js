/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'profiles.stanford.edu',
      },
      {
        protocol: 'https',
        hostname: 'symsys.stanford.edu',
      },
    ],
  },
}

module.exports = nextConfig
