var webpack = require('webpack')
var path = require('path')


module.exports = {
	entry: './public/src/app.js',
	output: {
		path: './public/src/', 
		filename:'bundle.js'
	},

	module: {
		loaders: [
			{
				test:/.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: [
						'es2015',
						'react'
					]
				}
				
			}
		]
	}
}