import CaseSensitivePathsPlugin from "case-sensitive-paths-webpack-plugin";

/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: ".next",
  webpack: (config) => {
    // اضافه کردن پلاگین به تنظیمات Webpack
    config.plugins.push(new CaseSensitivePathsPlugin());
    return config;
  },
};

export default nextConfig;
