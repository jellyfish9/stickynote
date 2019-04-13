var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var path = require('path')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  entry: {
    app: './src/index.js'
  },
  mode: 'development',
  performance: { hints: false },
  output: {
	    path: resolve('static'),
	    publicPath: 'static/',
	    filename: 'js/[name].[chunkhash:5].js',
	    chunkFilename: "js/[id].[chunkhash:5].js"
  },
  module: {
        rules: [
			{
                test: /\.css$/,
                use: [
					MiniCssExtractPlugin.loader,
					"css-loader"
				]
            },
            {
                test: /\.less$/,
                use: [
                    "vue-style-loader",
                    "css-loader",
                    "less-loader",
                ],
            },
            {
                test: /.vue$/,
                use: 'vue-loader',
                include: resolve('src/pages'),
                                   
            }, {
                test: /\.js$/,
                exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [
							["@babel/preset-env", {"loose": true}]
						],
						plugins: [
							"@babel/plugin-transform-runtime",
							"@babel/plugin-syntax-dynamic-import"
						]
					}
				}
			}, {
                test: /\.ejs$/,
                use: 'ejs-loader',

            }, {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                use: { 
                	loader: 'url-loader',
                    options: {
                        limit: 8000,
                        name: 'images/[name].[hash:6].[ext]'
                    }
                }
            }, {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                use: { 
                	loader: 'url-loader',
                    options: {
                        limit: 6000,
                        name: '[name].[hash:6].[ext]'
                    }
                }
            }
        ]
	},
	resolve: {
	    extensions: ['.js', '.vue', '.css'],
	    alias: {
	      'vue$': 'vue/dist/vue.esm.js',
	      //'@': resolve('src/pages'),
	      'mdbvue$': resolve('src/components/mdbvue.umd.min.js')
	    }
	},
	plugins: [
    	new VueLoaderPlugin(),
    	new MiniCssExtractPlugin({
    		filename: "[name].css",
	      	chunkFilename: "[id].css"
	    }),
        new webpack.ProvidePlugin({
            _: "lodash",
            Vue: "vue",
           
        }),
        new HtmlWebpackPlugin({
            template: 'src/ejs/index.ejs',
            filename: '../index.html',
            inject: true,
            chunks: ['vendor', 'app'],
            hash: false
        }),
    ],
    optimization: {
		splitChunks: {
			name: true,
			chunks: "all",
			minChunks: 2,
			cacheGroups: {
				 vendor: {
				 	name: "vendor",
				 	test: /node_modules/,
					reuseExistingChunk: true,
					minChunks: 1,					
				},
				styles: {            
		          name: 'styles',
		          test: /\.scss|css$/,
		          chunks: 'all',    // merge all the css chunk to one file
		          enforce: true
		        }
			}
		}
	}
	
}


