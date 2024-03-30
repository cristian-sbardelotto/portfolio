/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ['github.com', 'media.eadbox.com', 'media.licdn.com'],
  },
};

module.exports = nextConfig;
