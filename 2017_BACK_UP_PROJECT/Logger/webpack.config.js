const path = require('path')
const webpack = require('webpack')
const HTMLWebpackPlugin  = require('html-webpack-plugin')

const ouputPath = './dist'
const devPath = './src'
module.exports = {
    entry: {
        logger: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname,ouputPath),
        filename: '[name].min.js'
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
    plugins:[
        new HTMLWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: true
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                drop_console: false,
            }
        })
    ]
}
