var glob = require('glob')
var dirVars = require('./dir-vars.config.js')
var options = {
    cwd: dirVars.pagesDir,
    sync: true
}
var globInstance = new glob.Glob('!(_)*/!(_)*',options)
// console.log(globInstance.found)
module.exports = globInstance.found
