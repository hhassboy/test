<template>
  <div class="animation">
    <button @click="onclickShow">点击显示和隐藏</button>
    <button @click="isChange = !isChange">切换动画</button>
    <transition-group
      name="animate__animated animate__bounce"
      enter-active-class="animate__backInDown"
      leave-active-class="animate__backOutUp"
      appear
    >
      <h1 v-show="isShow" key="1">主题</h1>
      <!-- <h2 v-show="!isShow" key="2">多元素</h2> -->
    </transition-group>

    <!-- 圆形3d翻转 -->
    <div v-show="isChange" class="overturn">
      <div class="rom">粉色</div>
      <div class="rom">紫色</div>
    </div>

    <!-- 旋转木马图 -->
    <section v-show="!isChange" class="whirligig">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </section>
  </div>
</template>

<script>
import "animate.css";
export default {
  name: "animation",
  data() {
    return {
      isShow: true,
      isChange: false,
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
    width: 300px;
    height: 300px;
    border: 1px solid #ccc;
    //  添加透视
    perspective: 500px;
    // 3D呈现
    transform-style: preserve-3d;
    transition: all 0.5s;
    // animation: atTest 1.5s;
    .rom {
      position: absolute;
      left: 0%;
      top: 0%;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      color: burlywood;
      text-align: center;
      line-height: 300px;
      font-size: 25px;
    }
    .rom:first-child {
      background-color: pink;
      transform: rotateY(180deg);
    }
    .rom:last-child {
      // transform: rotateX(7deg);
      transform: translateZ(1px);
      background-color: blueviolet;
    }
    &:hover {
      transform: rotateY(-180deg);
    }
  }
  .whirligig {
    position: relative;
    width: 800px;
    height: 600px;
    margin: 0 auto;
    background-color: aqua;
    perspective: 800px;
    > div {
      position: absolute;
      width: 238px;
      height: 331px;
      &:nth-child(1) {
        transform: translateZ(200px);
        background: url("../assets/whirligig/icon_unit_ouzhouyuancheng.png")
          no-repeat center/cover;
      }
      &:nth-child(2) {
        transform: rotateY(60deg) translateX(200px);
        background: url("../assets/whirligig/icon_unit_kaisa.png")
          no-repeat center/cover;
      }
      &:nth-child(3) {
        background: url("../assets/whirligig/icon_unit_lichayishi.png")
          no-repeat center/cover;
      }
      &:nth-child(4) {
        background: url("../assets/whirligig/icon_unit_ouzhoufashinv.png")
          no-repeat center/cover;
      }
      &:nth-child(5) {
        background: url("../assets/whirligig/icon_unit_ouzhouroudun.png")
          no-repeat center/cover;
      }
      &:nth-child(6) {
        background: url("../assets/whirligig/icon_unit_ouzhouyuanchengnv.png")
          no-repeat center/cover;
      }
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

// // 进入动画
// .hero-enter-active {
//   animation: atTest 1s;
// }
// // 离开动画
// .hero-leave-active {
//   animation: atTest 1s reverse;
// }

// // 使用过度
// // 进入的起点
// .hero-enter,
// .hero-leave-to {
//   transform: translateX(100%);
// }
// // 进入的终点
// .hero-enter-to,
// .hero-leave {
//   transform: translateX(0);
// }

// // 多元素过度
// // 进入的起点
// .hero-enter,
// .hero-leave-to {
//   transform: translateX(100%);
// }
// // 进入的终点
// .hero-enter-to,
// .hero-leave {
//   transform: translateX(0);
// }

// .hero-enter-active,
// .hero-leave-active {
//   transition: 0.5s linear;
// }
</style>
