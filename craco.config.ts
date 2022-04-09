const { VanillaExtractPlugin } = require("@vanilla-extract/webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  webpack: {
    plugins: {
      add: [new VanillaExtractPlugin(), new MiniCssExtractPlugin()],
    },
    module: {
      rules: [
        {
          test: /css$/i,
          use: ["css-loader"],
        },
      ],
    },
  },
};

export {};
