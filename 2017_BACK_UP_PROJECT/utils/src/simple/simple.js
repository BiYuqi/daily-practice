/**
*   check the brower
*/
export const isBrower = () => {
    const ua = window.navigator.userAgent.toLowerCase()
    return {
        iPhone: /iphone/.test(ua),
        iPad: /ipad/.test(ua),
        iPod: /ipod/.test(ua),
        Android: /android/.test(ua),
        AndriodPad: /android/.test(ua) && !/mobile/.test(ua),
        opera: /opera/.test(ua),
        msie: /msie/.test(ua),
        firefox: /firefox/.test(ua),
        safari: /safari/.test(ua) && !/chrome/.test(ua),
        uc: /ucbrowser|ucweb/.test(ua),
        xiaomi: /xiaomi/.test(ua),
        underIE9: ua.indexOf("msie") >= 0 && (ua.indexOf("msie 6.0") >= 0 || ua.indexOf("msie 7.0") >= 0 || ua.indexOf("msie 8.0") >= 0 || ua.indexOf("msie 9.0") >= 0)
    }
}
/**
*   type
*   timer
*/
export const format = (fmt,timer) => {
    const date = timer == undefined ? new Date() : new Date(timer)
    const times = {
        'Y+': date.getFullYear(),
        'M+': date.getMonth()+1,
        'D+': date.getDate(),
        'h+': date.getHours(),
        'm+': date.getMinutes(),
        's+': date.getSeconds()
    }
    for(let i in times){
        const reg = new RegExp(`${i}`,'g')
        if(reg.test(fmt)){
            const str = (''+times[i]).length === 1 ? ('00'+times[i]).substr(-2):times[i]
            fmt = fmt.replace(reg,str)
        }
    }
    return fmt
}
