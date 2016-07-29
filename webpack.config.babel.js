export default function(options = {}) {
  let conf = {
    entry: './src/index.js',

    output: {
      path: './dist',
      publicPath: '/dist/',
      filename: options.module ? 'SpaHistory.js' : 'SpaHistory.bundle.js',
      library: 'SpaHistory',
      libraryTarget: 'umd'
    },

    module: {
      loaders: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          query: {
            presets: ['es2015-webpack-loose']
          }
        }
      ]
    },

    devServer: {
      contentBase: './examples'
    }
  };

  if (options.module) {
    conf.externals = [/^[a-z\-0-9]+$/];
  }

  if (options.debug) {
    conf.debug = true;
    conf.devtool = 'cheap-module-eval-source-map';
  }

  return conf;
}
