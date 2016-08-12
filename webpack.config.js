var path = require('path');

var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	entry:{
		main: path.resolve(__dirname,'src/index.js'),
		vendor: [],
	},
	output:{
		path: path.resolve(__dirname,'build'),	
		filename: 'js/[name].[hash]-bundle.js'
	},
	resolve: {
		extensions: ['', '.js', '.jsx']   
	},
	module: {
		loaders: [
		{
			test: /\.jsx?$/,
			loader: 'babel',
			cacheDirectory: true,
			query: {
				presets: ['react', 'es2015', 'stage-0'],
				plugins: ['transform-runtime']
			},
			exclude: /node_modules/
		},		
		{
			test: /\.css$/,
			loader: ExtractTextPlugin.extract("style-loader", "css-loader")
		}, 
		{
			test: /\.(woff2?|eot|ttf)(\?.*)?$/,
			loader: 'url',
			query: {
				limit: 10000,
				name: 'fonts/[name].[ext]'
			}
		},
		{
			test: /\.(png|jpg|gif|svg)(\?.*)?$/,
			loader: 'url',
			query: {
				limit: 10000,
				name: 'images/[name].[ext]'
			}
		}]
	},
	plugins: [
	new ExtractTextPlugin('css/[name].css'),
	new webpack.optimize.CommonsChunkPlugin('vendor', 'js/vendor-[hash].js'),
	new HtmlWebpackPlugin({
		template: path.join(__dirname, 'src/template/index.html')
	}),	
	],
	devServer: {
		hot: true,
		noInfo: false,
	}
};