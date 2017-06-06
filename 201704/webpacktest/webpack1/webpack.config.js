var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    entry: {
        index:'./app/js/index.js',
        list: './app/js/list.js'
    },
    output: {
        filename: 'js/[name].bundle.js',
        path: path.resolve(__dirname,'dist'),
        chunkFilename: 'js/[id].chunk.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    use: 'css-loader'
                })
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            },
            {
                test:/\.(jpg|png)$/,
                use: ['file-loader']
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('css/[name].[hash:6].css')
    ]
}
