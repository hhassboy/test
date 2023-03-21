<template>
  <div class="animation">
    <button @click="onclickShow">点击显示和隐藏</button>
    <transition-group
      name="animate__animated animate__bounce"
      enter-active-class="animate__backInDown"
      leave-active-class="animate__backOutUp"
      appear
    >
      <h1 v-show="isShow" key="1">主题</h1>
      <!-- <h2 v-show="!isShow" key="2">多元素</h2> -->
    </transition-group>

    <div class="overturn">
      <div class="rom"></div>
      <div class="rom"></div>
    </div>
  </div>
</template>

<script>
import "animate.css";
export default {
  name: "animation",
  data() {
    return {
      isShow: true,
    };
  },
  methods: {
    onclickShow() {
      this.isShow = !this.isShow;
    },
  },
};
</script>

<style lang="scss" scoped>
.animation {
  padding-top: 30px;
  .overturn {
    position: relative;
    width: 500px;
    height: 300px;
    border: 1px solid #ccc;
    //  添加透视
    perspective: 500px;
    // 3D呈现
    transform-style: preserve-3d;
    // animation: atTest 1.5s;
    .rom {
      position: absolute;
      left: 50%;
      margin-left: -100px;
      width: 200px;
      height: 200px;
      background-color: aqua;
    }
    .rom:last-child {
      width: 200px;
      height: 200px;
      transform: rotateX(70deg);
      background-color: rgb(106, 212, 35);
    }
    &:hover {
      transform: rotateY(50deg);
      transition: all 0.5s;
    }
  }
}
h1 {
  background-color: coral;
}
h2 {
  background-color: rgb(77, 221, 48);
}
// 使用动画
@keyframes atTest {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100%);
  }
}

// 进入动画
.hero-enter-active {
  animation: atTest 1s;
}
// 离开动画
.hero-leave-active {
  animation: atTest 1s reverse;
}

// 使用过度
// 进入的起点
.hero-enter,
.hero-leave-to {
  transform: translateX(100%);
}
// 进入的终点
.hero-enter-to,
.hero-leave {
  transform: translateX(0);
}

// 多元素过度
// 进入的起点
.hero-enter,
.hero-leave-to {
  transform: translateX(100%);
}
// 进入的终点
.hero-enter-to,
.hero-leave {
  transform: translateX(0);
}

.hero-enter-active,
.hero-leave-active {
  transition: 0.5s linear;
}
</style>
