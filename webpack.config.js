const path = require("path");
const webpack = require("webpack");

module.exports = {
  target: "node",
  entry: "./src/server.ts",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".ts", ".js"],
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: "ts-loader",
      },
    ],
  },
  stats: {
    errorDetails: true,
  },
  plugins: [
    // ...
    new webpack.ContextReplacementPlugin(/express[\\/]lib/, false),
  ],
};
