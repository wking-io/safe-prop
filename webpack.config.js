const path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './lib'),
    filename: 'index.bundle.js',
    library: 'safeProp'
  },
  externals: {
    'data.either': {
      commonjs: 'data.either',
      commonjs2: 'data.either',
      amd: 'data.either',
      root: 'folktale.data.Either'
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
