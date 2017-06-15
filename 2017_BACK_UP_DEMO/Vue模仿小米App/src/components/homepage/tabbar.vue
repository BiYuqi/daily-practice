<template lang="html">
    <div class="tab">
        <div class="title"  v-for="(item,index) in list" :key="index">
            <div class="test" @click="toggle(index)">
                {{item.title}}
            </div>
            <ul v-show="item.show" :class="{slidedown:isactive,slideup:isup}">
                <li v-for="items in item.person">
                    {{items.petient}}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                list:null,
                isactive:false,
                isup:false
            }
        },
        methods:{
            toggle (index) {
                // this.list[index].show = !this.list[index].show;
                var that = this;
                if(this.list[index].show == false){
                    this.isactive = true;
                    this.isup = false;
                    this.list[index].show = true;

                }else{
                    this.isactive = false;
                    this.isup = true;
                    setTimeout(function(){
                        that.list[index].show = false;
                    },290)
                }
            }
        },
        mounted () {
            var that = this;
            this.$http.get('http://localhost:8080/static/data/mock.json')
                    .then((res)=>{
                        that.list = res.data;
                        console.log(that.list)
                    })
        }
    }
</script>

<style scoped>
    .tab{
        margin-top: 1rem;
    }
    .tab-title{
        width: 100%;
        height: 1rem;
        line-height: 1rem;
        display: flex;
        justify-content: space-around;
        border: 1px solid #eee;
    }
    .slidedown{
        animation: slide .3s linear;
    }
    .slideup{
        animation: slideup .3s linear;
    }
    ul{
        height: 100px;
        background-color: #c33;
        opacity: .3;
        overflow: hidden;
    }
    @keyframes slide {
        from {
            height: 0;
        }
        to {
            height: 100px;
        }
    }
    @keyframes slideup {
        from {
            height: 100px;
        }
        to {
            height: 0;
        }
    }
</style>
