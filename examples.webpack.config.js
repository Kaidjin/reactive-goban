const join = require('path').join;

module.exports = {
  entry: {
    'react-goban-example': './examples/react-goban-example.js',
    'cycle-goban-example': './examples/cycle-goban-example.js',
  },
  output: {
    path: join(__dirname, 'examples'),
    filename: '[name].dist.js',
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react'],
        },
      },
    ],
  },
};
