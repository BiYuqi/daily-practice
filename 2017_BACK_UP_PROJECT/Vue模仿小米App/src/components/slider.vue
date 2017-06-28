<template lang="html">
    <div class="slider">
        <mt-swipe :auto="6000" :show-indicators="true">
            <mt-swipe-item>
                <a href="#">
                    <img src="http://i8.mifile.cn/v1/a1/8fa917d6-0299-30c6-31c6-11df2b8c3072.webp?bg=2F3465" alt="">
                </a>
            </mt-swipe-item>
            <mt-swipe-item>
                <a href="#">
                    <img src="http://i8.mifile.cn/v1/a1/8d85c905-f83f-535b-e0e6-ec15750b91cc.webp" alt="">
                </a>
            </mt-swipe-item>
            <mt-swipe-item>
                <a href="#">
                    <img src="http://oiukswkar.bkt.clouddn.com/localstorage.jpg" alt="">
                </a>
            </mt-swipe-item>
        </mt-swipe>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="css">
    .slider{
        height: 5.18rem;
        width: 100%;
    }
    .mint-swipe-item img{
        width: 100%;
        height: 5.18rem;
    }
    .mint-swipe-indicators{
        left: 85% !important;
    }
    .mint-swipe-indicators .is-active{
        background-color: #4889EA !important;
    }
</style>
