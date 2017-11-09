var dirVars = require('../base/dir-vars.config.js')
module.exports = {
    rules: [
        {
            test: /\.js$/,
            include: dirVars.srcRootDir,
            loader: 'babel-loader',
            options: {
              presets: [['es2015', { loose: true }]],
              cacheDirectory: true,
              plugins: ['transform-runtime'],
            },
        },
        {
            test: /\.html$/,
            include: dirVars.srcRootDir,
            loader: 'html-loader'
        },
        {
          test: /\.ejs$/,
          include: dirVars.srcRootDir,
          loader: 'ejs-loader',
        },
        {
          // 专供iconfont方案使用的，后面会带一串时间戳，需要特别匹配到
          test: /\.(woff|woff2|svg|eot|ttf)\??.*$/,
          include: dirVars.srcRootDir,
          // exclude: /glyphicons/,
          // loader: 'file-loader?name=static/fonts/[name].[ext]',
          loader: 'file-loader',
          options: {
            name: 'static/fonts/[name].[hash].[ext]',
          },
        }
    ]
}
