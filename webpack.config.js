const path = require("path")

var config = {
  devServer: {
      inline: true,
      contentBase: './dist',
      port: 8080
  },
  entry : __dirname + "/src/index.js",
  module : {
    loaders : [
      {
        test : /\.js$/,
        exclude : /node_modules/,
        loader : 'babel-loader'
      }
    ]
  },
  output : {
    filename : 'transpiled.js',
    path : __dirname + "/dist"
  }
}
module.exports = config
