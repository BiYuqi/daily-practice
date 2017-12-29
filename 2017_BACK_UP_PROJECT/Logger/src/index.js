import Logger from './logger.js'

(function(window){
    var logger = new Logger()
    logger.log("测试佛山")
    window.Logger = Logger
})(window);
