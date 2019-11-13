<template>
    <div>
        <el-button type="info" @click="logout">退出</el-button>
    </div>

</template>

<script>
    export default {
        name: "Home",
        methods:{
            logout(){
                this.$store.commit('logout');
                this.$router.push('/login');
            }
        }
    }
</script>

<style scoped lang="less">

</style>