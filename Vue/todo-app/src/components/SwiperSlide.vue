<template lang="html">
    <div class="swipper-wrap">
        <transition-group tag='ul' class="clearfix slide" name='image'>
            <li v-for='(item,index) in img' :key='index' class="swiper-item" v-show='index===mark'>
                <a><img :src="item"></a>
            </li>
        </transition-group>
    </div>
</template>

<script>
export default {
    data() {
        return {
            timer:null,
            mark:0,
            img: [
                'http://upload-images.jianshu.io/upload_images/3360875-5625658440cb542d.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240',
                'http://upload-images.jianshu.io/upload_images/3360875-b70e9d81d26e2a27.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240',
                'http://upload-images.jianshu.io/upload_images/3360875-dc724649454c2ddc.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240',
                'http://upload-images.jianshu.io/upload_images/3360875-d2148a1bb7ea9d21.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240'
            ]
        }
    },
    mounted() {
        this.play()
    },
    methods: {
        autoPlay() {
            this.mark++
            if(this.mark === this.img.length){
                this.mark = 0
                return;
            }
        },
        play() {
            this.timer = setInterval(()=>{
                this.autoPlay()
            },2500)
        }
    }
}
</script>

<style lang="css">
.swipper-wrap{
    width: 800px;
    height: 500px;
    margin: 0 auto;
    overflow: hidden;
}
ul{
    width: 100%;
    height: 400px;
    position: relative;
    list-style: none;
}
.swiper-item{
    position: absolute;
    height: 400px;
}
.swiper-item img{
    width: 100%;
    height: 100%;
}
.image-enter-active {
    transform: translateX(0);
    transition: all 1s ease-in-out;
}

.image-leave-active {
    transform: translateX(-100%);
    transition: all 1s ease-in-out;
}

.image-enter {
    transform: translateX(100%)
}

.image-leave {
    transform: translateX(0)
}
</style>
