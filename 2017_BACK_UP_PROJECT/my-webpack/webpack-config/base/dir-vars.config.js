var path = require('path')
var moduleExports = {}

// source
moduleExports.staticRootDir = path.resolve(__dirname,'../../')
moduleExports.srcRootDir = path.resolve(moduleExports.staticRootDir,'./src')
moduleExports.pagesDir = path.resolve(moduleExports.srcRootDir,'./pages')

// buildDir
moduleExports.buildDir = path.resolve(moduleExports.staticRootDir,'./build')
module.exports = moduleExports
