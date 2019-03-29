const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  //define entry point
  entry: "./src/index.js",

  //defin output point
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.[chunkhash].js"
  },
  devtool: "cheap-module-source-map",

  module: {
    rules: [
      {
        test: /\.(js|jsx|mjs)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        use: ExtractTextPlugin.extract({
          use: "css-loader"
        }),
        test: /\.css$/
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html"
    }),
    new ExtractTextPlugin("style.css")
  ]
};
