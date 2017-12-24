import Vue from 'vue'

Vue.directive('maxchars',{
    bind:function(el,binding,vnode){
        const max_char = binding.expression
        const handler = function(e){
            if(e.target.value.length > max_char){
                e.target.value = e.target.value.substr(0,max_char)
            }
        }

        el.addEventListener('input',handler,false)
    }
})

Vue.directive('focus',{
    inserted: function(el){
        el.focus()
    }
})

Vue.directive('img',{
    inserted: function(el,binding){
        const imgSrc = binding.value
        const color = Math.floor(Math.random()*1000000)
        el.style.backgroundColor = '#' + color

        const img = new Image()
        img.onload = function(){
            el.style.backgroundImage = `url(${imgSrc})`
        }
        img.src = imgSrc
    }
})
