/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', 
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // This matches your repo name so CSS/JS loads correctly
  basePath: '/Nemora.github.io', 
}

export default nextConfig