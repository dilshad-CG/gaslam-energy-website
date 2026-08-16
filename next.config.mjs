/** @type {import('next').NextConfig} */

// GitHub Pages serves this project site under a repo subpath.
// Set to "" for a custom domain or a <user>.github.io root deployment.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "/gaslam-energy-website";

const nextConfig = {
  output: "export", // static export for GitHub Pages (no Node server)
  reactStrictMode: true,
  poweredByHeader: false,
  trailingSlash: true, // emit /about/index.html so Pages routing works
  basePath,
  assetPrefix: basePath || undefined,
  images: {
    // GitHub Pages has no image optimiser — serve the files as-is.
    unoptimized: true,
  },
};

export default nextConfig;
