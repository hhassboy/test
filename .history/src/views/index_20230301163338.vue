<template>
  <div>
    <div class="nav">
      <div
        class="nav_item"
        v-for="item in menus"
        :key="item.name"
        @click="onClickNav(item)"
      >
        <p class="p1">{{ item.name }}</p>
        <p class="p1">{{ item.name }}</p>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
import { permissionValidation } from "../request/api/login";
import { Message } from 'element-ui';
export default {
  data() {
    return {
      menus: [
        { name: "Home", path: "/home" },
        { name: "Animation", path: "/animation" },
        { name: "Test", path: "/test" },
        { name: "Alibaixiu", path: "/alibaixiu" },
        { name: "Trainee", path: "/trainee" },
      ],
    };
  },
  methods: {
    onClickNav(item) {
      if (item.name === "Test") {
        this.isPermission();
      }
      this.$router.push(item.path);
    },
    async isPermission() {
      const token = localStorage.getItem("token");
      if (token) {
        try {
          const res = await permissionValidation(token);
          console.log("当前权限", res);
        } catch (error) {
            Message.error(error.response.data.error);
        }
      }
    },
    // encode() {//base64加密token
    //   const token = localStorage.getItem('token');
    //   // bese64接受的参数account:password
    //   const encode = Base64.encode(`${token}:`);
    //   return `Basic ${encode}`
    // }
  },
};
</script>

<style lang="scss" scoped>
.nav {
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 35px;
  width: 500px;
  // background-color: burlywood;
  border: 1px solid #ccc;
  border-radius: 10px;
  z-index: 1;
  .nav_item {
    position: relative;
    width: 70px;
    height: 100%;
    // perspective: 500px;
    transform-style: preserve-3d;
    transition: all 0.5s;
    .p1 {
      width: 100%;
      height: 20px;
      position: absolute;
      left: 50%;
      top: 50%;
      margin: 0;
      text-align: center;
      line-height: 20px;
      border-radius: 5px;
    }
    p:first-child {
      background-color: pink;
      transform: translate3d(-50%, -50%, 10px);
    }
    p:last-child {
      background-color: tomato;
      color: rgb(255, 255, 255);
      transform: translate(-50%, 0%) rotateX(-90deg);
    }
    &:hover {
      transform: rotateX(90deg);
    }
  }
}
</style>