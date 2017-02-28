module.exports = {
  entry: './frontend/hobbychat.jsx',
  output: {
    path: "app/assets/javascripts",
    filename: 'bundle.js'
  },
  resolve: {
    extensions: [' ', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  },
  // devtool: 'source-maps'
};
