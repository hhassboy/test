<template>
  <div class="login">
    <el-input v-model="input" placeholder="请输入内容"></el-input>
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
    margin: auto;
}
</style>