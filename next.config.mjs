/** @type {import('next').NextConfig} */
const nextConfig = {
    distDir: 'build', 
      // Configure image domains
  images: {
    domains: ['images.unsplash.com'], // Allow images from Unsplash
  },
};

export default nextConfig;
