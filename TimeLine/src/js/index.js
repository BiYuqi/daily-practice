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
            searchYear:'',
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
        newSort2(arr) {
            return arr.sort(function(a,b){
                return ~~b.year - ~~a.year
            })
        },
        upLoad() {
            const years = this.year
            const months = this.month
            const days = this.day
            const uCons = this.uCon
            const titles = this.title
            const reg = /^\d{4}$/
            const reg2 = /^([1-9]|1[0-2])$/
            const reg3 = /(\d+)月/
            if(!reg.test(years)){
                this.errtips('请输入标准的四位数年份')
                return
            }
            if(~~years > new Date().getFullYear()){
                this.errtips('年份太超前了吧')
                return
            }
            if(!months || !reg2.test(months)){
                this.errtips('貌似你的月份填的有问题')
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
            // 初始化赋值
            if(localStorage.getItem("lists")){
                this.userData = JSON.parse(localStorage.getItem("lists"))
            }
            /**
                初始化判断有没有
                如果没有就先存到本地一份
            */
            if(this.userData.length>0){
                for(let i=0;i<this.userData.length;i++){
                    if(~~this.userData[i].year === ~~years){
                        this.userData[i].content.push({
                                "date":`${months}月`,
                                "title":titles,
                                "mood":"",
                                "version":"",
                                "con":uCons
                            })
                        /**
                            @param {newSort} 针对同一年份的date进行排序
                        */
                        this.userData[i].content = this.newSort(reg3,this.userData[i].content)
                        this.saveData(this.userData)
                        return
                    }
                }
                /**
                    @param {newSort2} 针对不同一年份的year进行排序
                */
                this.userData.push(this.template(years,months,titles,uCons))
                this.userData = this.newSort2(this.userData)
                this.saveData(this.userData)
                return
            }else{
                this.userData.push(this.template(years,months,titles,uCons))
                this.saveData(this.userData)
                return
            }
        },
        search() {
            /**
                监听keyup事件
                利用filter进行搜索查询本地数据
                成功后进行lists赋值
                如果没有就渲染本地
            */
            const reg = /^\d{4}$/
            if(reg.test(this.searchYear)){
                let USERDATA = JSON.parse(localStorage.getItem("lists"))
                const filterData = USERDATA.filter((item)=>{
                    return ~~item.year === ~~this.searchYear
                })
                this.lists = filterData
            }else {
                this.lists = JSON.parse(localStorage.getItem("lists"))
            }
        },
        modelBtn() {
            this.isModel = true
        }
    }
})
