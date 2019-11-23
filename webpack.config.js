var webpack = require('webpack')
var path = require('path')
module.exports = {
  entry: path.resolve(__dirname, 'src/app'),
  output: {
    path: __dirname + '/../public',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public')
  },
  module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
          },


        },{
          test: /\.css$/,
          use: [
            'style-loader',
            'css-loader'
          ]
        }
      ],
  }
}


