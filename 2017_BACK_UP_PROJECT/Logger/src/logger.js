import { config } from './config'

export default class Logger {
    constructor(){

    }
    setSwitch(name,flag) {
        config[name] = flag
    }

    getSwitch(name) {
        return config[name]
    }

    _log(type,content) {
        const openSwitch = this.getSwitch('switch')
        if(!openSwitch){
            return false
        }
        const stylesParam = config.styles[type]
        console.log(`%c ${type.toUpperCase()} `, `background:${stylesParam};color:#fff;padding:1px;`, ...content );
    }

    log(...content) {
        this._log.call(this,'log',content)
    }

    info(...content) {
        this._log.call(this,'info',content)
    }

    warn(...content) {
        this._log.call(this,'warn',content)
    }

    error(...content) {
        this._log.call(this,'error',content)
    }
}
