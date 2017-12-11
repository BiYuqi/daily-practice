<template>
    <div class="relative-call">
        <go-back>
            <span slot="center-title">亲戚称呼计算</span>
        </go-back>
    </div>
</template>

<script>
import GoBack from '@/components/GoBack/GoBack'
// import data from '@/views/relativeCall/data.js'
export default {
    components:{
        GoBack
    }
}
</script>

<style lang="scss" scoped>
@import "../../assets/css/mixin.scss";
.relative-call{
    background-color: $bgc;
    height: 100%;
}
</style>
