/* webpack.config.js */
const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

/**
 * Plugins instant
 * */
const cleanDistFolder = new CleanWebpackPlugin(['dist'], {
    root: path.resolve(__dirname),
    verbose: true,
    dry: false
});

const extractLess = new ExtractTextPlugin({
    filename: "../css/app.css",
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
        path: path.resolve(__dirname, 'dist/assets/js'),
        filename: 'app.js',
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
            // {
            //     test: /\.css$/,
            //     use: [
            //         'style-loader',
            //         'css-loader'
            //     ]
            // },
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
            }
        ]
    },
    plugins: [
        cleanDistFolder,
        extractLess
    ]
};