<template lang="html">
    <div class="first">
        <div class="section">
            <a :href="news[key].link">
                <div class="box">
                    <div class="img">
                        <img src="http://m.mi.com/component/list/img/sczb_ed0a4af.png" alt="">
                    </div>
                    <div class="sc_title">{{news[key].text}}</div>
                </div>
            </a>
        </div>
        <div class="section">
            <div class="divider_line"></div>
        </div>
        <div class="section">
            <div class="cells_auto_fill">
                <div class="body">
                    <div class="items J_linksign-customize" v-for="(item,index) in first_data" :style="styles[index]">
                        <router-link :to="'/channel?id='+item.id">
                            <div class="img">
                                <img class="lazy" :src="item.img" alt="">
                            </div>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
        <div class="section">
            <div class="divider_line"></div>
        </div>
        <div class="section">
            <div class="cells_auto_fill">
                <div class="body" style="height:2.8rem">
                    <div class="items J_linksign-customize" v-for="(item,index) in single1">
                        <router-link :to="'/channel?id='+item.id">
                            <div class="img">
                                <img class="lazy" :src="item.img" alt="">
                            </div>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
        <div class="section">
            <div class="divider_line"></div>
        </div>
        <!-- 明星单品 -->
        <div class="section">
            <div class="cells_auto_fill">
                <div class="body" style="width: 7.5rem; height: 4.4rem; left: 0rem; top: 0rem;">
                    <div class="items J_linksign-customize" v-for="item in star_product">
                        <router-link :to="'/channel?id='+item.id">
                            <div class="img">
                                <img class="lazy" :src="item.img" alt="">
                            </div>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
        <div class="section">
            <div class="cells_auto_fill">
                <div class="body product_center" style="height:15.54rem">
                    <div class="item" v-for="(item,index) in list_product">
                        <router-link :to="'/channel?id='+list_product[index].id">
                            <div class="img">
                                <img class="lazy" :src="list_product[index].img" alt="">
                            </div>
                            <div class="info">
                                <div class="name">{{list_product[index].name}}</div>
                                <div class="brief">{{list_product[index].brief}}</div>
                                <div class="price">{{list_product[index].price}}</div>
                            </div>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                items:[
                    {id:231,img:"http://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/3ebb15220a455f264df4c189b0487323.jpg?width=358&heihgt=508"},
                    {id:17,img:"http://i8.mifile.cn/v1/a1/a3f8f6f4-5c2a-9654-9978-d4ee00287630.webp?width=358&heihgt=252"},
                    {id:323,img:"http://i8.mifile.cn/v1/a1/2c4195ac-843f-932c-eb90-7ff534b74f9c.webp?width=358&heihgt=252"}
                ],
                styles:[
                    {width: '3.74rem', height: '5.08rem',left: '0rem', top: '0'},
                    {width: '3.74rem', height: '2.5rem',right: '0', top: '0'},
                    {width: '3.74rem', height: '2.5rem',right: '0', bottom: '0'}
                ],
                // 商场早报
                news:[
                    {text:"小米周报4.24-4.30一周新鲜事",link:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-data-mishop/3bb7bfd4f105.html?2&needValidHost=false&zb_news_id=738"},
                    {text:"小米商城本周热卖指南(5.1-5.7)",link:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-data-mishop/979946a34fd0.html?2&needValidHost=false&zb_news_id=739"}
                ],
                key:0,
                isActive:false,
                // 第一条数据流
                first_data:null,
                all_products:null,
                // 单品
                single1:null,
                //聚合数据 test 列表渲染
                star_product:null,
                end_product:null,
                list_product:null
            }
        },
        methods:{
            renderNews () {
                var that = this;
                setInterval(function(){
                    that.key++;
                    if(that.key > 1){
                        that.key = 0;
                    }
                },3000)
            }
        },
        mounted () {
            var that = this;
            this.$nextTick(function(){
                that.renderNews();
            });
            this.$http.get('http://localhost:8080/static/data/index.json')
                    .then(function(response){
                        const data = response.data;
                        that.first_data = data.first_data;
                        that.single1 = data.first_data_sub;
                        that.all_products = data.second_data;
                        that.star_product = data.second_data[0].product_start;
                        that.end_product = data.second_data[0].product_end;
                        that.list_product = data.second_data[0].product_center;
                        // console.log(that.all_products)
                    })
                    .catch(function(err){
                        // console.log(err)
                    })
        }
    }
</script>

<style scoped>
    .first{
        margin-bottom: 1rem;
    }
    .first .box{
        display: flex;
        display: -webkit-flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        height: .8rem;
        width: 100%;
        font-size: .24rem;
        color: #000;
    }
    .box .img img{
        width: 1.5rem;
        height: auto;
    }
    .box .sc_title{
        font-size: .24rem;
        line-height: .28rem;
        transition: opacity .3s;
        padding-left: .2rem;
        border-left: 1px solid #b2b2b2;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        margin: .23rem 0 .23rem .2rem;
        max-width: 5rem;
        color: #333;
    }
    .divider_line{
        width: 100%;
        height: 0.16rem;
        border-bottom: 0.16rem solid #f5f5f5;
    }
    /**/
    .cells_auto_fill .body{
        position: relative;
        overflow: hidden;
        margin: 0 auto;
        height: 5.08rem;
    }
    .cells_auto_fill .items{
        position: absolute;
    }
    .cells_auto_fill .items img{
        width: 100%;
    }
    .product_center{
        display:flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content:space-between;
    }
    .product_center .item .img{
        width:3.73rem;
        height:3.5rem;
    }
    .product_center .item img{
        width:3.73rem;
        height:3.6rem;
    }
    .product_center .info{
        padding: .2rem .27rem;
    }
    .product_center .info .name{
        font-size: .28rem;
        color: rgba(0,0,0,.87);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .product_center .info .brief{
        margin-top: .06rem;
        font-size: .23rem;
        line-height: .3rem;
        color: rgba(0,0,0,.54);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .product_center .info .price{
        font-size: .32rem;
        color: #ff6000;
        margin-top: .08rem;
        position: relative;
        margin-left: .2rem;
    }
</style>
