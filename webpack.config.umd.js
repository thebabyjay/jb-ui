const path = require('path');
const base = require('./webpack.config');

const obj = Object.assign(base, {
  entry: path.join(__dirname, 'index.js'),
  output: {
    filename: 'dist/bundle.js',
    library: 'ReactComponentLibrary',
    libraryTarget: 'umd',
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
  ],
});
module.exports = obj;
