;(function(window){
    function Storage(){
        this.storage = window.sessionStorage
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

    window.Storage = Storage

})(window);
