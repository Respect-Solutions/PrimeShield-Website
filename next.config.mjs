/** @type {import('next').NextConfig} */
const isLocal = process.env.NEXT_PUBLIC_WAGTAIL_API_URL?.includes("localhost");

const nextConfig = {
  images: {
    // When the API is localhost, bypass Next.js image optimization so the
    // browser fetches images directly (Next.js server blocks private IPs).
    // In production the optimizer is re-enabled for the real Wagtail domain.
    unoptimized: isLocal,
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "8000",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "seodashboard.respect-solutions.cloud",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
