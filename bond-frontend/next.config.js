/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: 'res.cloudinary.com', protocol: 'https', port: '' },
      { hostname: 'picsum.photos', protocol: 'https', port: '' },
    ],
  },
};

module.exports = nextConfig;
