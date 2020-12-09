const withImages = require("next-images");

const isProd = process.env.NODE_ENV === "production";

module.exports = withImages({
  webpack(config, options) {
    return config;
  },
  basePath: isProd ? "/talks" : "",
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      "/": { page: "/" },
    };
  },
});
