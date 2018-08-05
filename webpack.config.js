var webpack = require('webpack')
var path = require('path')
var nodeExternals = require('webpack-node-externals')
const ExtractTextPlugin = require("extract-text-webpack-plugin");

var browserConfig = {
	entry: './public/src/js/app.js',
	output: {
		path: path.resolve(__dirname, 'public/dist'), 
		filename:'bundle.js',
		publicPath: '/'
	},

	module: {
		rules: [
			{
				test:/\.(js)$/,
				loader: 'babel-loader'				
			},
		    {
		    	test: /\.css$/,
		        use: ExtractTextPlugin.extract({
		          use: [
		            {
		              loader: "css-loader"
		            },
		            {
		              loader: "style-loader"
		            }
		          ]
		    	})
		    }
		]

	},
	plugins: [
		new webpack.DefinePlugin({
			__isBrowser__: 'true'
		})
	]
}


var serverConfig = {
	entry: './server.js',
	target: 'node',
	externals: [nodeExternals()],
	output: {
		path: __dirname, 
		filename:'index.js',
		publicPath: '/'
	},

	module: {
		rules: [
			{
				test:/\.(js)$/,
				loader: 'babel-loader' 
			}
		]

	},
	plugins: [
		new webpack.DefinePlugin({
			__isBrowser__: 'false'
		})
	]
}

module.exports = [browserConfig, serverConfig]