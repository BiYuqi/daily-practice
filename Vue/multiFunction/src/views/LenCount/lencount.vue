<template>
    <div class="len-count">
        <go-back>
            <span slot="center-title">长度转换</span>
        </go-back>
        <div class="test-dire">
            <div class="test-item">
                <h2>自定义限制字符长度</h2>
                <input type="text" v-maxchars="10" name="" value="">
            </div>
            <div class="test-item">
                <h2>自动聚焦</h2>
                <input type="text" v-focus name="" value="">
            </div>
            <div class="test-item">
                <h2>imgLoading</h2>
                <div class="img-box" v-img="img" v-for="img in imgs" :key="img.id"></div>
            </div>
        </div>
    </div>
</template>

<script>
import GoBack from '@/components/GoBack/GoBack'
export default {
    components:{
        GoBack
    },
    data() {
        return {
            imgs: [
                'https://images.unsplash.com/photo-1481824429379-07aa5e5b0739?auto=format&fit=crop&w=942&q=80',
                'https://images.unsplash.com/photo-1513273216459-54c4833d6b4c?auto=format&fit=crop&w=1950&q=80',
                'https://images.unsplash.com/photo-1509709364473-36085e4f84ee?auto=format&fit=crop&w=1950&q=80'
            ]
        }
    }
}
</script>

<style lang="scss">
    .len-count{
        height: 100%;
        width: 100%;
        background-color: #fff;
        padding-top: .9rem;
    }
    input{
        border: 1px solid #999;
    }
    .img-box{
        width: 100%;
        height: 120px;
    }
</style>
