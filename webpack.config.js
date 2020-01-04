const windowConfig = {
	entry: './src/index.js',
	output: {
		filename: './neocajax.min.js',
		libraryTarget: 'window'
	},
	module: {
		rules: [
			{
				test: /\.js$/, // include .js files
				enforce: 'pre', // preload the jshint loader
				exclude: /node_modules/, // exclude any and all files in the node_modules folder
				use: [
					{
						loader: 'babel-loader'
					}
				]
			}
		]
	},
	devtool: 'source-map'
};

const umdConfig = {
	entry: './src/index.js',
	output: {
		filename: './main.js',
		libraryTarget: 'umd'
	},
	module: {
		rules: [
			{
				test: /\.js$/, // include .js files
				enforce: 'pre', // preload the jshint loader
				exclude: /node_modules/, // exclude any and all files in the node_modules folder
				use: [
					{
						loader: 'babel-loader'
					}
				]
			}
		]
	},
	devtool: 'source-map'
};

module.exports = [umdConfig, windowConfig];
