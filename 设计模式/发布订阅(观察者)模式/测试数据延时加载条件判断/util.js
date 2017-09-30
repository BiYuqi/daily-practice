var Event =(function(){

    var clientList = {},
        listen,
        trigger,
        remove;

    listen = function(key,fn){
        if(!clientList[key]){
            clientList[key] = []
        }
        clientList[key].push(fn)
    }

    trigger = function(){
        var key = [].shift.call(arguments),
            fns = clientList[key];

        if(!fns || fns.length === 0){
            return
        }

        for(var i=0;i<fns.length;i++){
            fns[i].apply(this,arguments)
        }
    }

    remove = function(key,fn){
        var fns = clientList[key];

        if(!fns){
            return
        }
        if(!fn){
            fns && (fns.length = 0)
        }else{
            for(var i=0;i<fns.length;i++){
                var _fn = fns[i]
                if(_fn === fn){
                    fns.splice(i,1)
                }
            }
        }
    }
    return {
        listen:listen,
        trigger:trigger,
        remove:remove
    }
})()

const ajax_get = function(url,param){
    return new Promise((resolve,reject) => {
        const xhr = new XMLHttpRequest()
        param = param === undefined ? '' : param
        xhr.open("GET",url+param)

        xhr.onload = () => resolve(JSON.parse(xhr.responseText))

        xhr.onerror = () => reject(xhr.statusText)

        xhr.send(null)
    })
}
