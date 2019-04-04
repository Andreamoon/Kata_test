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
    rules: [{
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
      }, {
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png/, /\.ico$/],
        exclude: /node_modules/,
        loader: require.resolve("url-loader"),
        options: {
          limit: 10000,
          name: "static/media/[name].[ext]"
        }
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