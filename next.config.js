/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ['github.com', 'media.eadbox.com'],
  },
};

module.exports = nextConfig;
