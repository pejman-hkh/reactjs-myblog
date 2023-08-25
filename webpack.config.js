
const path = require('path');

let babel = {
  test: /\.m?js(x?)$/,
  exclude: /node_modules/,
  use: {
    loader: "babel-loader",
    options: {
      presets: ['@babel/preset-env']
    }
  }
};


let sass =  {
  test: /\.(scss)$/,
  use: [{
    // inject CSS to page
    loader: 'style-loader'
  }, {
    // translates CSS into CommonJS modules
    loader: 'css-loader'
  }, {
    // Run postcss actions
    loader: 'postcss-loader',
    options: {
      // `postcssOptions` is needed for postcss 8.x;
      // if you use postcss 7.x skip the key
      postcssOptions: {
        // postcss plugins, can be exported to postcss.config.js
        plugins: function () {
          return [
            require('autoprefixer')
          ];
        }
      }
    }
  }, {
    // compiles Sass to CSS
    loader: 'sass-loader'
  }]
};

sass = {
  test: /\.scss$/,
  exclude: /node_modules/,
  use: [
      {
          loader: 'file-loader',
          options: { outputPath: 'css/', name: '[name].min.css'}
      },
      'sass-loader'
  ]
};

module.exports = {
  mode: process.argv[2] == 'serve'?'development':'production',
  entry: ["./src/app.jsx", "./src/style.scss"],
  output: {
      filename: 'bundle.js',
  },
  optimization: {
      usedExports: true, 
  },    
  module: {
    rules: [
      babel,
      sass
    ]
  },
  devServer: {
/*    devMiddleware: {
      index: true,
      mimeTypes: { phtml: 'text/html' },
      publicPath: '/dist',
      serverSideRender: true,
      writeToDisk: true,
    },*/          
    historyApiFallback: true,
    client: {
      overlay: {
        errors: true,
        warnings: false,
        runtimeErrors: true,
      },
    },
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 9000,
  },

}