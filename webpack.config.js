const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'development', // Set the mode to development
  watch: true, // Enable watch mode
  devtool: 'inline-source-map', // Enable source maps for better debugging
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader',  // Injects styles into DOM
          'css-loader',    // Translates CSS into CommonJS
          'sass-loader'    // Compiles Sass to CSS
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
      
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.scss']
  }
};
