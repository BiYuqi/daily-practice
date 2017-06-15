<template lang="html">
    <div class="login-page">
        <div class="delete-model">
            <div class="btn-group">
                <div class="tips">小米账号登录</div>
                <div class="doc-set-item doc-code-check">
                    <input v-model="form.id" type="text" placeholder="请输入姓名" class="new-phone">
                </div>
                <div class="doc-set-item doc-pass-check">
                    <input v-model="form.pass" type="text" placeholder="请输入密码" class="code-phone">
                </div>
                <div class="err-tips-phone" v-if="btn && !form.id">手机号码不能为空</div>
                <div class="err-tips-phone" v-if="btn && !form.pass">密码不能为空</div>
                <div class="doc-set-item login-btn" @click="submit">立即登录</div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapActions } from 'vuex'
    export default {
        data () {
            return {
                btn:false,
                form:{
                    id:'',
                    pass:''
                }
            }
        },
        methods: {
            ...mapActions(['USER_SIGNIN']),
            submit () {
                this.btn = true
                if(!this.form.id || !this.form.pass){
                    return;
                }
                this.USER_SIGNIN(this.form)
                this.$router.replace({path:'/home'})
            }
        },
        mounted () {
            console.log(this.$store.state.user)
        }
    }
</script>

<style scoped>
    body{
        background-color: #eee;
    }
    .login-page{
        width: 100%;
        height: 100%;
        padding: 2rem 0 0 0 ;
        background: url('../assets/img/babystory.jpg') no-repeat;
        background-size: cover;
    }
    .delete-model{
        width: 100%;
        padding: 0 20px;
    }
    .doc-set-item{
        height: 0.8rem;
        line-height: 0.8rem;
        border: 1px solid #eee;
        background-color: #fff;
    }
    .doc-code-check{
        border-top-left-radius: 0.4rem;
        border-top-right-radius: 0.4rem;
        border-bottom: none;
    }
    .doc-pass-check{
        border-bottom-left-radius: 0.4rem;
        border-bottom-right-radius: 0.4rem;
        margin-bottom: .3rem;
    }
    .doc-set-item input{
        height: .5rem;
        width: 5rem;
        border: none;
        outline: none;
        font-size: 0.14rem;
        margin-left: 0.3rem;
    }
    .tips{
        height: 1.5rem;
        line-height: 1.5rem;
        text-align: center;
        font-size: 0.38rem;
    }
    .login-btn{
        border-radius: 0.7rem;
        background-color: #33B4FF;
        color: #fff;
        text-align: center;
        border: none;
        font-size: 16px;
    }
    .err-tips-phone{
        height: .6rem;
        line-height: .6rem;
        text-align: center;
        color: #c33;
    }

</style>
