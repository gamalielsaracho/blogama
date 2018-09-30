var webpack = require('webpack')
var path = require('path')
var nodeExternals = require('webpack-node-externals')
const ExtractTextPlugin = require("extract-text-webpack-plugin");
var autoprefixer = require('autoprefixer');

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
				test: /\.(png|jpg|gif)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: 'public/src/images/[name].[ext]',
							publicPath: url => url.replace(/public/, "")
						}
					}
				]
			},
		    {
		    	test: /\.css$/,
		    	use: ['style-loader', 'css-loader?url=false']
		    },
		    {
		    	test: /\.sass$/,
		    	use: ['style-loader', 'css-loader', 'sass-loader'],
		    	exclude: /node_modules/
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
			},
			{
		        test: /\.css$/,
		        use: [
		          {
		            loader: "css-loader/locals"
		          }
		        ]
	      	},
	      	{
		    	test: /\.sass$/,
		    	use: ['style-loader', 'css-loader', 'sass-loader'],
		    	exclude: /node_modules/
		    },
	      	{
				test: /\.(png|jpg|gif)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: 'public/src/images/[name].[ext]',
							publicPath: url => url.replace(/public/, ""),
							emit: false
						}
					}
				]
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