
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const path = require('path');

module.exports = {
  entry: {
        app: path.join(__dirname, 'main.js')
  },
	output: {
    filename: "[name].js",
    path: path.join(__dirname, "dist"),
  },
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader'
			}
		]
  },
  devServer: {},
  plugins: [
    new VueLoaderPlugin(),
  ]
};