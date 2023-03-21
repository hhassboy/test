<template>
  <div class="animation">
    <button @click="onclickShow">点击显示和隐藏</button>
    <transition name="hero">
      <h1 v-show="isShow">主题</h1>
    </transition>
  </div>
</template>

<script>
export default {
  name:"animation",
  data() {
    return {
      isShow:true,
    }
  },
  methods: {
    onclickShow() {
      this.isShow = !this.isShow;
    }
  }
}
</script>

<style lang="scss" scoped>
  h1{
    background-color: coral;
  }
  // @keyframes atTest {
  //   from{
  //     transform: translateX(100%);
  //   }
  //   to{
  //     transform: translateX(0px);
  //   }
  // }
  

  // // 进入动画
  // .hero-enter-active{
  //   animation: atTest 1s;
  // }
  // // 离开动画
  // .hero-leave-active{
  //   animation: atTest 1s reverse;
  // }


  // 进入的起点
  // .hero-enter {
  //   transform: translateX(100%);
  // }
  // // 进入的终点
  // .hero-enter-to {
  //   transform: translateX(0);
  // }
</style>
