const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("node:path");

module.exports = {
  context: path.resolve(__dirname, "src"),
  entry: path.resolve(__dirname, "src", "js", "index.js"),
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "style.css",
    }),
  ],
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "swc-loader",
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader",
          "postcss-loader",
        ],
        exclude: /node_modules/,
      },
    ],
  },
};
