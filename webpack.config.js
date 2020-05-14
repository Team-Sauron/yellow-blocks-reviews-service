const path = require('path');

module.exports = {
  mode: 'development',

  entry: `${path.join(__dirname, '/client/index.js')}`,

  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'public'),
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
        },
      },
    },
    {
      test: /\.css$/,
      loader: ['style-loader', 'css-loader'],
      include: `${__dirname}/public/styles.css`,
    },
    {
      test: /\.svg$/,
      loader: 'file-loader',
    }],
  },
  resolve: { extensions: ['.js', '.jsx'] },
};
