<template lang="html">
    <div class="page-mine">
        <div class="login-out" v-show="login" @click="loginOut">退出登录</div>
        <Tabbar/>
    </div>
</template>

<script>
    import Tabbar from '@/components/bottomBar'
    import { mapActions } from 'vuex'
    export default {
        components: {
            Tabbar
        },
        data () {
            return {
                login:false
            }
        },
        methods:{
            ...mapActions(['USER_SIGNOUT']),
            loginOut () {
                this.USER_SIGNOUT();
                this.$router.replace({path:'/home'})
            }
        },
        mounted () {
            // console.log(this.$store.state)
            if(this.$store.state.user.id){
                this.login = true;
            }else{
                this.login = false;
            }
        }
    }
</script>

<style lang="css">
    .login-out{
        width: 100%;
        height: 2rem;
        line-height: 2rem;
        text-align: center;
        color: green;
        font-size: .3rem;
    }
</style>
