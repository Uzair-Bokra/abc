const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io", // Allow Sanity's CDN
        pathname: "/images/**",   // Allow any images under this path
      },
      {
        protocol: "https",
        hostname: "i.pravatar.cc", // Allow Sanity's CDN
        pathname: "/**",   // Allow any images under this path
      },
    ],
  },
};

export default nextConfig;