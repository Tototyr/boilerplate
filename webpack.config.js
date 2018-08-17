const path = require('path');

const PATHS = {
  source: path.join(__dirname, 'source'),
  build: path.join(__dirname, 'build')
};

module.exports = {
  entry: "./src/index.js",
  output: {
    path: PATHS.build,
    filename: "[name].js"
  },
  devServer: {
    open: true,
    contentBase: PATHS,
    compress: true,
    port: 9000
  }
};