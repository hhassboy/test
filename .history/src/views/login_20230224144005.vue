<template>
  <div class="login">
    <img class="login-bg" src="../assets/content_bg.png" alt="">
    <div class="content">
        <div class="account">
            <span>账号:</span>
            <el-input v-model="data.account" placeholder="请输入内容"></el-input>
        </div>
        <div class="password">
            <span>密码:</span>
            <el-input placeholder="请输入密码" v-model="data.password" show-password></el-input>
        </div>  
        <el-button type="info">登录</el-button>
        
    </div>
  </div>
</template>

<script>
export default {
    name:'login',
    data() {
        return {
            data:{
                account:null,
                password:null
            }
            
        }
    }

}
</script>

<style lang="scss" scoped>
.login {
    position: relative;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    .login-bg {
        width: 100%;
        height: 100%;
        position: absolute;
        filter: blur(6px);
    }
    .content {
        width: 500px;
        height: 200px;
       background-color: cadetblue;
       z-index: 1;
       .account,
        .password{
        margin: 20px 0;
       }
        .el-input {
            width: 200px;
        }
    }
}
</style>