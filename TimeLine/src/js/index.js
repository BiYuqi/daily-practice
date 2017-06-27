import '../less/index.less'
import Vue from 'vue/dist/vue.min.js';
import data from '../mock.json';
new Vue({
    el:'#app',
    data() {
        return {
            lists:null,
            year:'',
            month:'',
            day:'',
            uCon:'',
            title:'',
            userData:[]
        }
    },
    mounted() {
        this.lists = data;
    },
    methods: {
        toggle(k) {
            this.lists[k].active = !this.lists[k].active
            // this.slide = this.lists[k].active == 0 ? '':'slideup'
        },
        upLoad() {

            const years = this.year
            const months = this.month
            const days = this.day
            const uCons = this.uCon
            const titles = this.title
            const reg = /^\d+$/
            if(!reg.test(years)){
                return
            }
            if(months && !reg.test(months)){
                return
            }
            if(days && !reg.test(days)){
                return
            }
            if(!uCons || !titles){
                return
            }
            if(this.userData.length>0){
                for(let i=0;i<this.userData.length;i++){
                    if(this.userData[i].year == years){
                        this.userData[i].content.unshift({
                            "date":`${months}月${days}日`,
                            "title":titles,
                            "mood":"",
                            "version":"",
                            "con":uCons
                        })
                        return
                    }
                }
                this.userData.unshift({
                    "year":years,
                    "active":0,
                    "content":[
                        {
                            "date":`${months}月${days}日`,
                            "title":titles,
                            "mood":"",
                            "version":"",
                            "con":uCons
                        }
                    ]
                })
            }else{
                this.userData.unshift({
                    "year":years,
                    "active":0,
                    "content":[
                        {
                            "date":`${months}月${days}日`,
                            "title":titles,
                            "mood":"",
                            "version":"",
                            "con":uCons
                        }
                    ]
                })
            }

            // const data = {
            //     "year":years,
            //     "active":0,
            //     "content":[
            //         {
            //             "date":`${months}月${days}日`,
            //             "title":titles,
            //             "mood":"",
            //             "version":"",
            //             "con":uCons
            //         }
            //     ]
            // }
            // this.userData.unshift(data)
            console.log(this.userData)
        }
    }
})
