const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// Development Configuration
module.exports = (env, { mode }) => {
  return {
    mode,
    entry: './src/index.js',
    devtool: mode === 'development' ? 'inline-source-map' : false,
    performance: {
      hints: mode === 'development' ? false : 'error',
      maxEntrypointSize: 512000,
      maxAssetSize: 512000
    },
    optimization: {
      splitChunks: {
        chunks: 'all'
      }
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html'
      })
    ],
    stats: 'minimal',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js'
    },
    devServer: {
        open: true,
        overlay: {
          warnings: false,
          errors: true
        }
    },
    module: {
      rules: [
        {
          test: /\.(png|jp(e*)g|svg|gif)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: 'images/[name].[ext]'
              }
            },
          ],
        },
        {
          test: /\.m?js$/,
          exclude: /(node_modules)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
                '@babel/preset-react',
                {
                  plugins: ['@babel/plugin-proposal-class-properties']
                }
              ]
            },
          }
        },
        {
          test: /\.s[ac]ss$/i,
          use: [
            // Creates `style` nodes from JS strings
            'style-loader',
            // Translates CSS into CommonJS
            'css-loader',
            // Compiles Sass to CSS
            'sass-loader',
          ],
        },
      ]
    }
  }
}