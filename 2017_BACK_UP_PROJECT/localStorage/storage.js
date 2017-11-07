(function(){
    function Storage(){
        this.storage = window.localStorage
    }
    Storage.prototype.get = function(key){
        return this.storage.getItem(key)
    }
    Storage.prototype.set = function(key,value){
        this.storage.setItem(key,value)
    }
    Storage.prototype.update = function(key,value){
        this.set(key,value)
    }
    Storage.prototype.remove = function(key){
        this.storage.removeItem(key)
    }

    var s = new Storage()
    s.set('name','biyuqi')
    console.log(s.get('name'))
    s.update('name','wagning')
    s.remove('name')
    console.log(JSON.parse(s.get('lists')))
})()
