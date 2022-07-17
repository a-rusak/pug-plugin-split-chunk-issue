const path = require('path');
const PugPlugin = require('pug-plugin');

module.exports = {
  entry: {
    index: './src/index.pug',
  },

  output: {
    path: path.join(__dirname, 'dist/'),
    publicPath: '/',
    // output filename of JS files
    filename: 'assets/js/[name].[contenthash:8].js'
  },

  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },

  plugins: [
    new PugPlugin({
      pretty: true,
      extractCss: {
        filename: 'assets/css/[name].[contenthash:8].css'
      },
    })
  ],

  module: {
    rules: [
      {
        test: /\.pug$/,
        loader: PugPlugin.loader,
        options: {
          method: 'render',
        }
      },
      {
        test: /\.(css|sass|scss)$/,
        use: ['css-loader', 'sass-loader']
      },
    ],
  },
};