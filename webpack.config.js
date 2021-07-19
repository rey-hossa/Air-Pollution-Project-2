
const path = require('path');

module.exports = (env, argv) => {
  const entryPath = argv.mode === 'development' ? './src/index_dev.js' : './src/index.js'
  return{
    entry: {
      main: path.resolve(__dirname, entryPath),
    },
    output: {
      filename: 'bundle.js',
      publicPath: 'http://localhost:8080/dist/',
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
          include : path.join(__dirname, 'images'),
          loader  : 'url-loader?limit=30000&name=images/wallpaper.jpg'
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
