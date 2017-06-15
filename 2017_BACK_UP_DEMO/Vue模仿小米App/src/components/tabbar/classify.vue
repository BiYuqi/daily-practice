<template lang="html">
    <div class="page-class">
        <Headers/>
        <TabTest/>
        <Tabbar/>
    </div>
</template>

<script>
    import Tabbar from '@/components/bottomBar'
    import Headers from '@/components/header'
    import TabTest from '@/components/homepage/tabbar'
    export default {
        components: {
            Headers,
            TabTest,
            Tabbar

        },
        data () {
            return {

            }
        }
    }
</script>

<style scoped>
    .index-header{
        background-color: orange;
        justify-content: space-around;
    }
    .index-header .search_bar{
        width: 6.2rem !important;
        margin-left: .2rem !important;
    }
</style>
