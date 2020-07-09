const path = require('path');
const base = require('./webpack.config');
module.exports = {
  ...base,
  entry: './src/',
  output: {
    pathinfo: true,
    publicPath: '/',
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
    library: '',
    libraryTarget: 'commonjs2',
  },
  optimization: {
    minimize: true,
  },
  externals: [
    {
      react: {
        root: 'React',
        commonjs2: 'react',
        commonjs: 'react',
        amd: 'react',
      },
    },
    {
      'react-dom': {
        commonjs2: 'react-dom',
        commonjs: 'react-dom',
        amd: 'react-dom',
      },
    },
    {
      '@material-ui/core': {
        root: '@material-ui/core',
        commonjs2: '@material-ui/core',
        commonjs: '@material-ui/core',
        amd: '@material-ui/core',
      },
    },
    {
      '@material-ui/icons': {
        root: '@material-ui/icons',
        commonjs2: '@material-ui/icons',
        commonjs: '@material-ui/icons',
        amd: '@material-ui/icons',
      },
    },
    {
      '@material-ui/styles': {
        root: '@material-ui/styles',
        commonjs2: '@material-ui/styles',
        commonjs: '@material-ui/styles',
        amd: '@material-ui/styles',
      },
    },
  ],
};
