import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
  // configures debugging OOTB
  mode: 'development',
  // TODO comment
  devtool: 'eval-source-map',
  // Commenting out for now; updated version below
  // entry: './src/index.js', // This is the default, so can omit if desired.
  entry: [
    path.resolve(__dirname, 'src/index')
  ],
  output: {
    path: path.resolve(__dirname, 'src'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [],
  // configures how to handle different files via pluggable loaders
  module: {
    rules: [
      {test: /\.js$/, exclude: /node_modules/, use: ['babel-loader']},
      {test: /\.css$/, use: ['style-loader','css-loader']}
    ]
  }
}
