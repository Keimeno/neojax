// eslint-disable-next-line
const path = require('path');

const duplicate = {
	output: {
		path: path.resolve(__dirname, 'dist'),
		libraryTarget: 'umd',
		library: 'neojax',
		umdNamedDefine: true
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js']
	},
	devtool: 'source-map',
	optimization: {
		minimize: true
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				loader: 'awesome-typescript-loader',
				exclude: /node_modules/,
				query: {
					declaration: false
				}
			},
			{
				test: /\.js$/,
				enforce: 'pre',
				exclude: /node_modules/,
				use: [
					{
						loader: 'babel-loader'
					}
				]
			}
		]
	}
};

const umdConfig = {
	entry: {
		'neojax.min': './src/index.ts'
	},
	output: {
		filename: '[name].umd.js'
	},
	...duplicate
};

const windowConfig = {
	entry: {
		'neojax.min': './src/index.ts'
	},
	output: {
		filename: '[name].js'
	},
	...duplicate
};

module.exports = [umdConfig, windowConfig];
