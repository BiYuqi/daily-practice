import {
    isBrower,
    format
} from './simple/simple';
import Cookie from './cookie/cookie';
import is from './is/is'

const log = (...con) =>{
    console.log.apply(null,con)
}

log(isBrower().firefox)
log(format('YY-MM-DD hh:mm:ss'))

Cookie.set('info','kkkkkk',9)
log(Cookie.get('info'))
Cookie.del('name')
log('-------------is系列---------')
log(is.isArray([]))
log(is.isUndefined())
log(is.isObject({}))
log('-------------is系列---------')
