/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      { hostname: 'github.com' },
      { hostname: 'media.eadbox.com' },
      { hostname: 'i.ibb.co' },
    ],
  },
};

module.exports = nextConfig;
