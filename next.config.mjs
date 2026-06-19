/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "seodashboard.respect-solutions.cloud",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
