const path = require('path')

module.exports = {
  mode: 'development',
  entry: './src/index',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: [path.resolve(__dirname, 'src')],
        exclude: [path.resolve(__dirname, 'node_modules')],
        loader: 'babel-loader',
        options: { presets: ['@babel/preset-env'] }
      }
    ]
  }
}
