const path = require("path")

module.exports = {
  entry: {
    bundle: "./customer_reviews/src/index.js"
  },

  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "public")
  },

  mode: "production",
  devtool: "source-map",

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [
          /node_modules/
        ],
        use: [
          { loader: "babel-loader" }
        ]
      }
    ]
  }
}
