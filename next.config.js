/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  module: "esnext",
  moduleResolution: "bundler",
  baseUrl: "./",
  compiler: {
    relay: {
      src: "./",
      language: "typescript",
      artifactDirectory: "__generated__",
    },
  },
  experimental: { appDir: true },
};

module.exports = nextConfig;