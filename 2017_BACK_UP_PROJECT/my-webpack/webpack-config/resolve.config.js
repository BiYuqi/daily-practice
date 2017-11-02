var path = require('path');
var dirVars = require('./base/dir-vars.config.js');

module.exports = {
    alias: {
        /* 各种目录*/
        iconfontDir: path.resolve(dirVars.publicDir, 'iconfont/'),
        configDir: dirVars.configDir,
        vendorDir: dirVars.vendorDir,
        withoutJqueryModule: path.resolve(dirVars.libsDir, 'without-jquery.module'),
        /* layout */
        layout: path.resolve(dirVars.layoutDir, 'layout/html'),

        /* config */
        configModule: path.resolve(dirVars.configDir, 'common.config')
    },
    // 当require的模块找不到时，尝试添加这些后缀后进行寻找
    extensions: ['.js', '.css', '.less']
}
