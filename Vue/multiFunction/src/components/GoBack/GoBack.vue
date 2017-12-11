<template>
    <div class="go-back">
        <span @click="goBack" class="go-back-inner">
            <i class="iconfont icon-pailiemoshisuolvetu"></i>
        </span>
        <slot name="center-title"></slot>
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    methods: {
        goBack() {
            this.$router.replace({
                name: 'home',
                query: {
                    mode: 'modal'
                }
            })
        }
    }
}
</script>

<style lang="scss" scoped>
@import "../../assets/css/mixin.scss";
.go-back{
    position: fixed;
    top: 0;
    left: 0;
    height: .9rem;
    line-height: .9rem;
    width: 100%;
    padding: 0 .4rem;
    background-color: $bgc;
    text-align: center;
    span{
        color: #333;
        font-weight: bold;
    }
    .go-back-inner{
        display: inline-block;
        width: .55rem;
        height: .55rem;
        line-height: .55rem;
        border: .01rem solid $dashColor;
        border-radius: 50%;
        @include abs(.17rem,auto,auto,.4rem);
        i{
            color: #606060;
        }
    }
}
</style>
