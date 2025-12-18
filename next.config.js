const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'your-image-host.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig;