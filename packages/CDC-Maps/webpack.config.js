const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, { mode }) => {

  const prodExternals = {
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react'
  },
    'react-dom': {
      root: 'ReactDOM',
      commonjs2: 'react-dom',
      commonjs: 'react-dom',
      amd: 'react-dom'
  },
  'react-router': 'ReactRouter',
  'react-addons-transition-group': 'var window.React.addons.TransitionGroup',
  'react-addons-css-transition-group': 'var window.React.addons.CSSTransitionGroup',
  'react/lib/ReactTransitionGroup': 'var window.React.addons.TransitionGroup',
  'react/lib/ReactCSSTransitionGroup': 'var window.React.addons.CSSTransitionGroup',
  'history': 'History'
  };

  const configObj = {
    mode,
    entry: mode === 'development' ? './src/index.js' : './src/App.js',
    devtool: mode === 'development' ? 'inline-source-map' : false,
    performance: {
      hints: mode === 'development' ? false : 'error',
      maxEntrypointSize: 512000,
      maxAssetSize: 512000
    },
    // optimization: {
    //   splitChunks: {
    //     chunks: 'all'
    //   }
    // },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html'
      })
    ],
    stats: 'verbose',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        libraryTarget: 'umd'
    },
    devServer: {
        open: true,
        compress: true,
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
                ["@babel/preset-env",{
                  "modules": false
                }],
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

  if(mode !== 'development') {
    configObj.externals = prodExternals;
    configObj.output = {
      ...configObj.output,
      libraryTarget: 'umd',
      library: 'CdcMap',
      globalObject: 'this'
    }
  }

  return configObj
}