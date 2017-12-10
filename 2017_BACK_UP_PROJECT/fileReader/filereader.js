!(function(window,undefined){
    const ReadFileAndUpLoad = function(options){
        let el,
            success = options.success;
        if(typeof options.el === 'string'){
            el = document.querySelector(options.el)
        }else{
            el = options.el
        }

        return {
            init: function(){
                if(window.addEventListener){
                    el.addEventListener('change',this.start,false)
                }else{
                    el.attachEvent('onchange',this.start,false)
                }
            },
            start: function(){
                const files =this.files
                const res = []
                let that = this
                for(let i=0;i<files.length;i++){
                    // let oFReader = new FileReader()
                    // oFReader.onload = function(ev){
                    //     res[i] =ev.target.result
                    //     if(i === files.length-1){
                    //         success && success(res,files)
                    //     }
                    // }
                    // oFReader.readAsDataURL(files[i])
                    var img = document.createElement('img')
                    res.push(window.URL.createObjectURL(files[i]))
                    if(i === files.length-1){
                        success && success(res,files)
                    }
                    img.onload = function(){
                        window.URL.revokeObjectURL(this.src)
                        console.log(this.naturalWidth)
                    }

                }
            }
        }
    }
    window.ReadFileAndUpLoad = function(options){
        return new ReadFileAndUpLoad(options).init()
    }
})(window);
/**
    if (navigator.appName === "Microsoft Internet Explorer") {
        return function () {
            document.getElementById("imagePreview").filters.item("DXImageTransform.Microsoft.AlphaImageLoader").src = document.getElementById("imageInput").value;

        }
    }
*/
