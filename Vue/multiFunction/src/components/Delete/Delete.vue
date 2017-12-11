<template>
    <div class="re-item">
        <slot name="free"></slot>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import '../../assets/css/mixin.scss';
.re-item{
    width: 25%;
    height: 1.87rem;
    line-height: 1.87rem;
    text-align: center;
    float: left;
    color: $keyColor;
    border-right: .01rem solid #dbdcdd;
    border-bottom: .01rem solid #dbdcdd;
}
</style>
