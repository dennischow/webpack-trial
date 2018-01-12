/* webpack.config.js */
const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

/**
 * Plugins instant
 * */
const cleanDistFolder = new CleanWebpackPlugin(['dist'], {
    root: path.resolve(__dirname),
    verbose: true,
    dry: false
});

const extractLess = new ExtractTextPlugin({
    filename: "assets/css/app.css",
    // disable: process.env.NODE_ENV === "dev"
});

/**
 * Webpack tasks
 */
module.exports = {
    entry: {
        app: './src/assets/js/app.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist/'),
        filename: 'assets/js/app.js',
    },
    devServer: {
        contentBase: path.resolve(__dirname, "dist/"),
        compress: true,
        port: 9000,
        stats: "errors-only",
        open: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.less$/,
                use: extractLess.extract({
                    use: [
                        {
                            loader: "css-loader",
                            options: {
                                sourceMap: true
                            }
                        },
                        {
                            loader: "postcss-loader",
                            options: {
                                sourceMap: true
                            }
                        },
                        {
                            loader: "less-loader",
                            options: {
                                strictMath: true,
                                noIeCompat: true,
                                sourceMap: true
                            }
                        }
                    ],
                    // use style-loader in development
                    fallback: "style-loader"
                })
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                        options: {
                            minimize: true
                        }
                    }
                ]
            },
            {
                test: /\.(gif|png|jpe?g|svg|webp)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            // outputPath: 'assets/img/',
                            useRelativePath: process.env.NODE_ENV === "prod",
                            name: '[name].[ext]'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        cleanDistFolder,
        extractLess,
        new HtmlWebpackPlugin({
            inject: false,
            template: './src/index.html',
            filename: 'index.html'
        })
    ]
};