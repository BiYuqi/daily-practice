<template>
    <div class="home-page">
        <div class="home-head">
            计算与换算
        </div>
        <div class="home-btn-wrap">
            <button-group></button-group>
        </div>
    </div>
</template>

<script>
import ButtonGroup from '@/views/btns/btns'
export default {
    components:{
        ButtonGroup
    }
}
</script>

<style lang="scss">
    @import '../../assets/css/mixin.scss';
    .home-page{
        height: 100%;
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background-color: #413735;
        z-index: 20;
    }
    .home-head{
        height: .9rem;
        line-height: .9rem;
        text-align: center;
        color: #fff;
    }
    .home-btn-wrap{
        overflow: hidden;
        border-top: .01rem solid $borderColor;
        background-color: #413735;
    }
</style>
