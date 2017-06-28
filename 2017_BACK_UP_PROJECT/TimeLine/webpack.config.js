const path = require('path');
const buildPath = path.resolve(__dirname,"dist");
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractLess = new ExtractTextPlugin({
    filename: "index.css"
});

module.exports = {
    entry: {
        index:'./src/js/index.js'
    },
    output: {
        path:buildPath,
        filename:"bundle.js"
    },
    module: {
        rules: [
            {
                test:/\.less$/,
                use: extractLess.extract({
                    use: [{
                        loader: "css-loader"
                    }, {
                        loader: "less-loader"
                    }],
                    // use style-loader in development
                    fallback: "style-loader"
                })
            },
            {
                test:/\.(png|jpg)$/,
                loader:'url-loader?limit=8192'
            },
            {
                test: /\.js$/,
                exclude:/(node_modules|bower_components)/,
                loader:'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    },
    resolve: {
        alias: {
            'vue$':'vue/dist/vue.common.js'
        }
    },
    plugins:[extractLess ]
}
