/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cms.elikemdaniels.dev",
      },
    ],
  },
};

export default nextConfig;
