/**
*   Cookie get set remove
*
*/
export default {
    get:function(key){
        if(!key){
            return 'key is not allow an enpty char'
        }
        const data = document.cookie.split('; ')
        for(let i=0;i<data.length;i++){
            const keyName = data[i].split('=')
            if(keyName[0] == key){
                return decodeURIComponent(keyName[1])
                break
            }
        }
        return ''
    },
    set:function(key, value, time){
        if(!key){
            return
        }
        if(typeof value !== 'string'){
            value = JSON.stringify(value)
        }
        const days = time*24*3600*1000
        const cur = new Date()
        cur.setTime(cur.getTime()+days)
        const expires = time ? cur.toGMTString() : ""
        const pathString = ";path=/"

        document.cookie = key +'='+encodeURIComponent(value)+';expires='+expires+pathString
    },
    del:function(key){
        this.set(key,'1',-1)
    }
}
