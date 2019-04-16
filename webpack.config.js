var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');



function resolve(dir) {
  return path.join(__dirname, dir)
}

let prd = true
const fileName = prd ? 'js/[name].[chunkhash:5].js' : 'js/[name].js'
let mode = prd ? 'production' : 'development'

module.exports = {
  entry: {
    app: './src/index.js',
    //vue: ['vue','vue-router']
  },
  mode: mode,
  performance: { hints: false },
  output: {
	    path: resolve('static'),
	    publicPath: '',
	    filename: fileName,
	    chunkFilename: "js/[id].[chunkhash:5].js"
  },
  module: {
  		noParse: /zepto/,
        rules: [
			{
                test: /\.css$/,
                use: [
					MiniCssExtractPlugin.loader,
					"css-loader",
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
                exclude: /node_modules/,
                use: 'vue-loader',
                //include: [resolve('src/pages'), resolve('src/components')]
                                   
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
                        name: 'font/[name].[hash:6].[ext]'
                    }
                }
            }
            /*, {
			   	type: 'javascript/auto',
			    test: /\.json/,
			    exclude: /node_modules/,
			    use: {
			      loader: 'file-loader',
			      options: {
			      	name: '[name].[ext]'
			      }
			    }
			}*/
		]
	},
	resolve: {
	    extensions: ['.js', '.vue', '.css', '.json'],
	    alias: {
	      'vue$': 'vue/dist/vue.esm.js',
	      //'@': resolve('src/pages'),components
	      //'mdbvue$': resolve('src/asset/mdbvue.umd.min.js')
	      'mdbvue$': resolve('src/components/mdbvue/index.js'),
	      'config$': resolve('src/asset/config.json')
	    }
	},
	plugins: [
    	new VueLoaderPlugin(),
    	new MiniCssExtractPlugin({
    		filename: "[name].css",
	      	chunkFilename: "[id].[chunkhash:5].css"
	    }),
	    
        new webpack.ProvidePlugin({
            _: "lodash",
            Vue: "vue",
           
        }),
        new HtmlWebpackPlugin({
            template: 'src/ejs/index.ejs',
            filename: './index.html',
            inject: true,
            chunks: ['vendor', 'mdb', 'app'],
            hash: false,
            customJs: ['zepto.min.js']
        }),
    ],
    optimization: {
    	minimizer: [
    		new TerserPlugin(),
    		new OptimizeCSSAssetsPlugin()
    	],
		splitChunks: {
			name: true,
			chunks: "all",
			minChunks: 1,
			automaticNameDelimiter: '-',
			cacheGroups: {
				vendor: {
				 	name: "vendor",
				 	test: /node_modules/,
					reuseExistingChunk: true,
					chunks: 'all',
					minChunks: 1,
				},
				mdb: {
					name: 'mdb',
					test: /mdbvue.*\.vue$/,
					reuseExistingChunk: true,
					priority: -10
				}
			}
		}
	},
	externals: { '$': '$' },
	devServer: {
        host: '127.0.0.1',
        port: 8000
    }
            
}


