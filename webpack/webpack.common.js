const webpack = require('webpack');


module.exports = {
  entry: {
    main : './src/index.js'
  },

  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query :{
          presets: ['es2015', 'react']
        }
      }
    ]
  },

  devtool: 'source-map'
}