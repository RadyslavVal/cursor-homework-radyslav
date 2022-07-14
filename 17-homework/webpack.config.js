const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

pages = [
  "index",
  "hw2",
  "hw11",
  "hw12",
  "hw13",
  "hw14",
  "hw15",
]

module.exports = {
  mode: "development",
  entry: pages.reduce((acc, page) => ({ ...acc, [page]: `./src/js/${page}.js` }), {}),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js',
    clean: true,
    assetModuleFilename: "assets/[name].[hash][ext]"
  },
  devServer: {
    historyApiFallback: true,
    open: true,
    static: {
      directory: "./dist/pages",
    },
    compress: true,
    devMiddleware: {
      writeToDisk: true
    }
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.html$/i,
        use: ["html-loader"],
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.(ogg|mp3|wav|mpe?g)$/i,
        type: "asset/resource"
      }
    ],
  },
  plugins: [].concat(
    pages.map(
      page =>
        new HtmlWebpackPlugin({
          inject: true,
          template: path.resolve(__dirname, `./src/pages/${page}.html`),
          filename: `./pages/${page}.html`,
          chunks: [page]
        })
    )),
};