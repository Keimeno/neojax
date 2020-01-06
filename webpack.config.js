const path = require('path');

const umdConfig = {
	entry: {
		'neojax.min': './src/index.ts'
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].umd.js',
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
	}
};

const windowConfig = {
	entry: {
		'neojax.min': './src/index.ts'
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].js',
		libraryTarget: 'window',
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
	}
};

module.exports = [umdConfig, windowConfig];
