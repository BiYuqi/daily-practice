var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var path = require('path')
var dirVars = require('../base/dir-vars.config.js')
var pageArr = require('../base/page-entries.config.js')

var HashOutput = require('webpack-plugin-hash-output')

var configPlugins = [
     /* 全局shimming */
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      'window.$': 'jquery'
    }),

    /*抽取出所有通用部分*/
    new webpack.optimize.CommonsChunkPlugin({
        name: 'commons/commons',
        filename: '[name]/bundle.[chunkhash].js',
        minChunks: 4
    }),

    /*抽取出webpack的runtime代码*/
    new webpack.optimize.CommonsChunkPlugin({
        name: 'webpack-runtime',
        filename: 'commons/commons/webpack-runtime.[hash].js'
    }),

    new HashOutput({
      manifestFiles: 'webpack-runtime', // 指定包含 manifest 在内的 chunk
    })
]

pageArr.forEach( (page) => {
    const htmlPlugin = new HtmlWebpackPlugin({
        filename: `${page}/page.html`,
        template: path.resolve(dirVars.pagesDir,`./${page}/html.js`),
        chunks: ['webpack-runtime', page, 'commons/commons'],
        hash: true, // 为静态资源生成hash值
        xhtml: true
    })
    configPlugins.push(htmlPlugin)
})

module.exports = configPlugins
