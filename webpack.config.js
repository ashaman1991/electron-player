module.exports = {
  entry: "./app/js/app.js",
  output: {
    path: `${__dirname}/build/js`,
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components|main.js)/,
        loader: 'babel', // 'babel-loader' is also a legal name to reference
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
};