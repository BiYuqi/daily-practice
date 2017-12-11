<template>
    <div class="equal" :style="customStyle">
        <slot name="free"></slot>
    </div>
</template>

<script>
export default {
    props: {
        customStyle:{
            type: Object,
            default() {
                return {
                    width: "25%",
                    height: "1.87rem",
                    "line-height": "1.87rem",
                    "text-align": 'center',
                }
            }
        }
    }
}
</script>

<style lang="scss">
    @import '../../assets/css/mixin.scss';
    .equal{
        position: absolute;
        bottom: 0;
        right: 0;
        color: #fff;
        font-size: .2rem;
        background-color: $speColor;
    }
</style>
