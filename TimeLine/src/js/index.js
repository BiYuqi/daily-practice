import '../less/index.less'
import Vue from 'vue/dist/vue.min.js';
// import data from '../mock.json';
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
            isModel:false,
            userData:[],
            errorTip:'',
            errorShow:false
        }
    },
    mounted() {
        // this.lists = data;
        this.lists = JSON.parse(localStorage.getItem("lists")) || []
    },
    methods: {
        toggle(k) {
            this.lists[k].active = !this.lists[k].active
        },
        cancel() {
            this.isModel = false
        },
        errtips(v) {
            this.errorTip = v
            this.errorShow = true
            let that = this
            setTimeout(()=>{
                that.errorShow = false
            },1500)
        },
        saveData(data) {
            this.year = '';
            this.month = '';
            this.day = '';
            this.uCon = '';
            this.title = '';

            localStorage.setItem("lists",JSON.stringify(data))
            this.lists = JSON.parse(localStorage.getItem("lists"))
            this.isModel = false
        },
        template(y,m,t,c) {
            return {
                "year":y,
                "active":0,
                "content":[
                    {
                        "date":`${m}月`,
                        "title":t,
                        "mood":"",
                        "version":"",
                        "con":c
                    }
                ]
            }
        },
        newSort(r,arr) {
            return arr.sort(function(a,b){
                return r.exec(b.date)[1] - r.exec(a.date)[1]
            })
        },
        upLoad() {
            const years = this.year
            const months = this.month
            const days = this.day
            const uCons = this.uCon
            const titles = this.title
            const reg = /^\d{4}$/
            const reg2 = /^\d{1,2}$/
            const reg3 = /(\d+)月/
            if(!reg.test(years)){
                this.errtips('年份不正确')
                return
            }
            if(!months || !reg2.test(months)){
                this.errtips('月份不正确')
                return
            }
            if(days && !reg2.test(days)){
                this.errtips('天不正确')
                return
            }
            if(!uCons || !titles){
                this.errtips('标题和内容必填')
                return
            }
            // const ldays = days == '' ? '':`${days}日`

            if(localStorage.getItem("lists")){
                this.userData = JSON.parse(localStorage.getItem("lists"))
            }

            if(this.userData.length>0){
                for(let i=0;i<this.userData.length;i++){
                    if(this.userData[i].year*1 == years*1){
                        this.userData[i].content.push({
                                "date":`${months}月`,
                                "title":titles,
                                "mood":"",
                                "version":"",
                                "con":uCons
                            })
                        this.userData[i].content = this.newSort(reg3,this.userData[i].content)
                        this.saveData(this.userData)
                        return
                    }
                }
                for(let i=0;i<this.userData.length;i++){
                    if(this.userData[i].year*1 > years*1){
                        this.userData.push(this.template(years,months,titles,uCons))
                        this.saveData(this.userData)
                        return
                    }
                }
                for(let i=0;i<this.userData.length;i++){
                    if(this.userData[i].year*1 < years*1){
                        this.userData.unshift(this.template(years,months,titles,uCons))
                        this.saveData(this.userData)
                        return
                    }
                }
            }else{
                this.userData.push(this.template(years,months,titles,uCons))
                this.saveData(this.userData)
                return
            }
        },
        modelBtn() {
            this.isModel = true
        }
    }
})
