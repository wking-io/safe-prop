const path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './lib'),
    filename: 'index.bundle.js',
    library: 'safeProp'
  },
  externals: {
    'data.maybe': {
      commonjs: 'data.maybe',
      commonjs2: 'data.maybe',
      amd: 'data.maybe',
      root: 'folktale.data.Maybe'
    }
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /(node_modules)/,
        use: 'babel-loader'
      }
    ]
  }
}
