module.exports = {
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    if (isServer) {
      require("./utils/dynamic-sitemap.js");
    }
    return config;
  },
}
