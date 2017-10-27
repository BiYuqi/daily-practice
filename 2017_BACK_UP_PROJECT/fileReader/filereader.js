(function(window,undefined){
    "use strict";
    const ReadFileAndUpLoad = function(options){
        let el
        if(typeof options.el === 'string'){
            el = document.querySelector(options.el)
        }else{
            el = options.el
        }
        const filesUlp = function(){
            const files =this.files
            const res = []
            for(let i=0;i<files.length;i++){
                let oFReader = new FileReader()
                oFReader.onload = function(ev){
                    res[i] =ev.target.result
                    if(i === files.length-1){
                        options.resolve([res,files])
                    }
                }
                oFReader.readAsDataURL(files[i])
            }

            // options.imgs(res)
            // options.files(files)
        }
        if(window.addEventListener){
            el.addEventListener('change',filesUlp,false)
        }else{
            el.attachEvent('onchange',filesUlp,false)
        }
    }

    window.ReadFileAndUpLoad = function(options){
        return new ReadFileAndUpLoad(options)
    }
})(window)
/**
    if (navigator.appName === "Microsoft Internet Explorer") {
        return function () {
            document.getElementById("imagePreview").filters.item("DXImageTransform.Microsoft.AlphaImageLoader").src = document.getElementById("imageInput").value;

        }
    }
*/
