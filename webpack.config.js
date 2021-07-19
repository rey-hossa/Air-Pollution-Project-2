
const path = require('path');

module.exports = (env, argv) => {
  const entryPath = argv.mode === 'development' ? './src/index_dev.js' : './src/index.js'
  return{
    entry: {
      main: path.resolve(__dirname, entryPath),
    },
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist')
    },

    devServer: {
      contentBase: './dist',
      open: true
    },

    module: {
      rules: [

        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        },

        {
          test: /\.(jpg|png)$/,
          use: {
            loader: 'url-loader',
          }
        },

        {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      }

      ]
    }
  }

};
