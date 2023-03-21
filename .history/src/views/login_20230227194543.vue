<template>
  <div class="login">
    <img class="login-bg" src="../assets/content_bg.png" alt="" />
    <div class="content">
      <div class="account">
        <span>账号:</span>
        <el-input
          v-model="data.account"
          placeholder="请输入内容"
          name="email"
        ></el-input>
      </div>
      <div class="password">
        <span>密码:</span>
        <el-input
          placeholder="请输入密码"
          v-model="data.password"
          show-password
        ></el-input>
      </div>
      <el-button @click="register" type="info">登录</el-button>
    </div>
  </div>
</template>

<script>
import { requestLogin, requestVerify } from "../request/api/login";
import { Message } from 'element-ui';
export default {
  name: "login",
  data() {
    return {
      data: {
        account: null,
        password: null,
      },
    };
  },
  methods: {
    async register() {
      if (this.data.account && this.data.password) {
        console.log("发送请求", this.data);
        try {
          let res = await requestLogin(this.data);
          console.log("消息", res);
            // 跳转到首页
            this.$router.push('/')
            // 保存token
            localStorage.setItem('token',res)

        } catch (error) {
            console.log("错误消息", error);
            Message.error(error)
        }
      } else {
        alert("请输入账号密码");
      }
    },
  },
};
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
    .password {
      margin: 20px 0;
    }
    .el-input {
      width: 200px;
    }
  }
}
</style>