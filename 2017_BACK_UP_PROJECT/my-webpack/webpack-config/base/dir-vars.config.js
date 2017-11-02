var path = require('path')
var moduleExports = {}

// source
moduleExports.staticRootDir = path.resolve(__dirname,'../../');
moduleExports.srcRootDir = path.resolve(moduleExports.staticRootDir,'./src');
moduleExports.pagesDir = path.resolve(moduleExports.srcRootDir,'./pages');
moduleExports.vendorDir = path.resolve(moduleExports.staticRootDir, './vendor');
moduleExports.publicDir = path.resolve(moduleExports.srcRootDir, './public-resource'); // 存放各个页面使用到的公共资源
moduleExports.libsDir = path.resolve(moduleExports.publicDir, './libs');
moduleExports.componentsDir = path.resolve(moduleExports.publicDir, './components');
moduleExports.layoutDir = path.resolve(moduleExports.publicDir, './layout');
// buildDir
moduleExports.buildDir = path.resolve(moduleExports.staticRootDir,'./build');
module.exports = moduleExports;
