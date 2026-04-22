/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Required for GitHub Pages
  basePath: '/Nemora.github.io', // <--- Add this exactly here
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
