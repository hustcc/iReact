var webpack = require('webpack');

module.exports = {
  entry: {
    'bundle': './res/js/src/index.jsx'
  },
  output: {
    path: './res/js/dist/',
    filename: '[name].js'
  },
  module: {
    loaders:[{
      test: /\.js[x]?$/,
      exclude: /node_modules/,
      loader: 'babel-loader?presets[]=es2015&presets[]=react',
    }, { 
      test: /\.css$/, 
      loader: 'style-loader!css-loader' 
    }, { 
      test: /\.(png|jpg)$/, 
      loader: 'url-loader?limit=512'
    }]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({ compress: {warnings: false}})
  ]
};
