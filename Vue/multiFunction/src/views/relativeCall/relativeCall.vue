<template>
    <div class="relative-call">
        <go-back>
            <span slot="center-title">亲戚称呼计算</span>
        </go-back>
        <div class="relative-con">
            <div class="top" :class="{ active : isActive, small : isActive2, smaller: isActive3}">
                {{ initData }}
            </div>
            <div class="bot" :class="{ active : isOver}">
                {{ renderData }}
            </div>
            <button type="button" name="button" @click="setPhoto">测试</button>
            <img :src="getphoto" alt="" style="width:50px;height:50px;">
            <input v-model="GETvalue" type="text" name="" value="">
        </div>
        <div class="relative-box">
            <touch-btn v-for="(item, index) in relativeData" :key="item.id" @click.native="start(item.keyAll)">
                <span slot="free" v-if="(item.key === 'icon-shanchu')" class="de">
                    <i class="iconfont" :class="item.key"></i>
                </span>
                <span slot="free" v-else-if="(item.key === 'AC')" class="AC">AC</span>
                <span slot="free" v-else>{{item.key}}</span>
            </touch-btn>
            <equal-btn :customStyle="myStyle" @click.native="equal">
                <span slot="free">
                    <i class="iconfont icon-denghao"></i>
                </span>
            </equal-btn>
        </div>
    </div>
</template>

<script>
import GoBack from '@/components/GoBack/GoBack'
import TouchBtn from '@/components/Delete/Delete'
import EqualBtn from '@/components/Equal/Equal'
import dd from '@/views/relativeCall/data.json'
import rd from '@/views/relativeCall/relative.json'
var relationship = require("relationship.js");
import { mapGetters, mapActions } from 'vuex'
export default {
    components:{
        GoBack,
        TouchBtn,
        EqualBtn
    },
    data() {
        return {
            relative: null,
            relativeData: null,
            myStyle: {
                width: "50%",
                height: "1.87rem",
                "line-height": "1.87rem",
                "text-align": 'center'
            },
            initData: '我',
            renderData: '',
            isActive: false,
            isActive2: false,
            isActive3: false,
            isOver: false,  // 点击等号
            isAction: true,  // 判定是否可以继续输入,
            GETvalue:''
        }
    },
    mounted() {
        this.relative = dd
        this.relativeData = rd
    },
    watch: {
        GETvalue: function() {
          if(/[^0-9a-zA-Z]/.test(this.GETvalue)){
            this.GETvalue = this.GETvalue.replace(/[^0-9a-zA-Z]/,'')
            return
          }
        }
    },
    methods: {
        ...mapActions('system', [
          'sysLogin'
        ]),
        setPhoto() {
          this.sysLogin({data:{},callback:this.callback(res)})
          console.log(this.result)
        },
        callback(res) {
          console.log(res,'测试')
        },
        render() {
            const options = {text:this.initData,sex:1};
            const last = relationship(options);
            if(last.length >0){
                this.renderData = last[0]
                this.isAction = true
            }else{
                this.renderData = '你这关系有点乱...'
                this.isAction = false
            }
        },
        textCheck() {
            if(this.initData.length <= 14){
                this.isActive = true
                this.isActive2 = false
                this.isActive3 = false
            }
            if(this.initData.length > 20){
                this.isActive2 = true
                this.isActive = false
                this.isActive3 = false
            }
            if(this.initData.length > 25){
                this.isActive3 = true
                this.isActive = false
                this.isActive2 = false
            }
        },
        start(t) {
            this.textCheck()
            this.isOver = false
            if(t !== 'AC' && t !== 'delete' && t !== '长' && t !== '轻' && this.isAction){
                this.initData = this.initData + t
                this.render()
                this.textCheck()
            }
            if( t === 'delete' && this.initData.length > 1) {
                this.initData = this.initData.replace(/.{3}$/,'')
                this.isOver = false
                this.render()
                this.textCheck()
            }else if( t === 'delete' && this.initData.length === 1){
                this.isActive = false
                this.isActive2 = false
                this.isActive3 = false
            }
            if( t === 'AC') {
                this.initData = '我'
                this.renderData = ''
                this.isOver = false
                this.isActive = false
                this.isActive2 = false
                this.isActive3 = false
            }

        },
        equal() {
            if(this.initData.length <= 1){
                return
            }
            this.isOver = true
            this.isActive = false
            this.isActive2 = false
            this.isActive3 = true
        }
    },
    computed:{
      ...mapGetters('system', [
        'result'
      ]),
      getphoto() {
          return this.$store.getters.avatar
      }
    }
}
</script>

<style lang="scss" scoped>
@import "../../assets/css/mixin.scss";
.relative-call{
    background-color: $bgc;
    min-height: 100%;
    display:flex;
    flex-direction: column;
    padding-top: .9rem;
    overflow: hidden;
}
.relative-con{
    background-color: $bgc;
    flex: 1;
    position: relative;
    .top{
        @include abs(auto,auto,1.56rem,0);
        min-height: 1.56rem;
        font-size: .7rem;
        width: 100%;
        text-align: right;
        padding: 0 .4rem;
        &.active{
            font-size: .5rem;
        }
        &.small{
            font-size: .4rem;
        }
        &.smaller{
            font-size: .3rem;
        }
    }
    .bot{
        @include abs(auto,auto,0,0);
        height: 1.56rem;
        line-height: 1.56rem;
        font-size: .4rem;
        width: 100%;
        text-align: right;
        padding: 0 .4rem;
        color: #717171;
        &.active{
            font-size: .7rem;
            color: #333;
        }
    }
}
.relative-box{
    background-color: #fff;
    height: 1.87*4rem;
    width: 100%;
    border-top: .01rem solid #dbdcdd;
    position: relative;
}
.re-item:nth-child(4n){
    border-right: none;
}
.re-item:nth-child(11){
    border-bottom: none;
}
.re-item:nth-child(12){
    border-bottom: none;
}
.re-item:nth-child(13){
    color: #c6c3c3;
}
.re-item:nth-child(14){
    border-right: none;
    color: #c6c3c3;
}
.AC{
    font-size: .4rem;
    color: $speColor;
}
.de{
    i{
        font-size: .4rem;
    }
}
</style>
