import CaseSensitivePathsPlugin from "case-sensitive-paths-webpack-plugin";

/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: ".next",
  output: "standalone",
  webpack: (config) => {
    config.plugins.push(new CaseSensitivePathsPlugin());
    return config;
  },
};

export default nextConfig;
