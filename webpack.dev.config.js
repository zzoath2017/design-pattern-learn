const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: "./src/index.js",
  output: {
    path: __dirname,
    filename: "dist/bundle.js"
  },
  plugins: [
      new HtmlWebpackPlugin({
      template: 'index.html'
  })
],
devServer: {
    port: 8888,
    open: true
}
};
