const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        'loadingmore-utils': './src/index.js'
    },
    output:{
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    module:{
        rules:[
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader'
            }
        ]
    },
    devServer: require('./webpack/devServe.config.js'),
    plugins:[
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: true
        })
    ]
}
