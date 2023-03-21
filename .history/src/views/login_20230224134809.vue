<template>
  <div class="login">
    <div class="content">
        <el-input v-model="input" placeholder="请输入内容"></el-input>
    </div>
  </div>
</template>

<script>
export default {
    name:'login',
    data() {
        return {
            input:null
        }
    }

}
</script>

<style lang="scss" scoped>
.login {
    // position: relative;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    .content {
        width: 500px;
        height: 600px;
        
    }
}
</style>