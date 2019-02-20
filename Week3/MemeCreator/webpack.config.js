const webpack =require('webpack');

module.exports = {
    context:__dirname,
    entry:{
        general:"./src/js/general.js",
        memes:"./src/js/memes.js",
    },
    output:{
    path:__dirname + "/dist",
    filename: '[name].js',
<<<<<<< HEAD
    publicPath: '/dist/',
    },
    devtool: 'source-map',
    devServer: {
        compress: true,
        port: 8080,
        hot: true,
        //devtool: 'source-map',
        },        
=======
    },
>>>>>>> 377bf1246e91ab2e4e73716c973bf8b14e2e23d2
    module: {
            rules: [
                    {
                        test: /\.js$/,
                        exclude: /(node_modules)/,
                        use: {
                        loader: 'babel-loader',
                        options: {
                        presets: ['env', 'es2015'],
                        }
                    }
                },
                {
<<<<<<< HEAD
                    test: /\.(less|css)$/,
                    use: [
                        {
                        loader: "style-loader"
                        },
                        {
                        loader: "css-loader",
                        options: {
                        sourceMap: true
                            }
                        },
                        {
                        loader: "less-loader",
                        options: {
                        sourceMap: true
                                }
                            }
                        ]
                    },
                    
                {
                    test: /\.(svg|eot|ttf|woff|woff2)$/,
                    loader: 'url-loader',
                    options: {
                    limit: 10000,
                    name: 'fonts/[name].[ext]'
                    }
                },
                {
                    test: /\.(png|jpg|gif)$/,
                    loaders: [
                    {
                        loader: 'url-loader',
                        options: {
                        limit: 10000,
                        name: 'images/[name].[ext]'
                        }
                    },
                    'img-loader'
                    ],
                },                    
            ],
        }, 
        plugins: [
                new webpack.ProvidePlugin({
                    jQuery: 'jquery',
                    $: 'jquery',
                    jquery: 'jquery'
                }),
                new webpack.HotModuleReplacementPlugin(),

            ],
            
=======
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
                },
            ],
        }, 
>>>>>>> 377bf1246e91ab2e4e73716c973bf8b14e2e23d2
    }
