var dirVars = require('../base/dir-vars.config.js')
module.exports = {
    rules: [
        {
            test: /\.js$/,
            include: dirVars.srcRootDir,
            loader: 'babel-loader',
            options: {
                presets: [
                    [
                        'es2015',
                        {
                            loose: true
                        }
                    ]
                ],
                cacheDirectory: true,
                plugins: ['transform-runtime']
            }
        },
        {
            test: /\.html$/,
            include: dirVars.srcRootDir,
            loader: 'html-loader'
        }
    ]
}
