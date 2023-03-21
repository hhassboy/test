<template>
  <div class="test">
    <div class="test_box">
      <input type="text" @input="inputEvent" />
      <button @click="clickAddSix">添加性别</button>
      <button @click="student.six = '男'">修改性别</button>
      <button>加</button>
      <button>减</button>
      <p>姓名:{{ student.name }}</p>
      <p>年龄:{{ student.age }}</p>
      <p v-show="student.six">性别:{{ student.six }}</p>
      <div class="property">
        <div class="icon1">a</div>
        <div class="icon2">b</div>
        <div class="icon3">c</div>
        <div class="icon4">d</div>
        <div>e</div>
        <img src="../assets/head/11.png" alt="">
        <img src="../assets/head/22.png" alt="">
      </div>
      <canvas id="draw" width="400" height="400">浏览器不识别</canvas>
      <canvas id="draw2" width="400" height="400">浏览器不识别</canvas>
    </div>
  </div>
</template>

<script>
import { debounce, throttle } from "../utils/shake.js";
import {testCanvas} from "../utils/canvas"
export default {
  data() {
    return {
      t: null,
      student: {
        name: "小红",
        age: 18,
      },
    };
  },
  beforeRouteEnter (to,from,next) {
    console.log("进入组件守卫");
    next();
  },
  beforeRouteLeave(to,from,next) {
    console.log("离开组件守卫");
    next();
  },
  mounted() {
    testCanvas();
    const p1 = {
      name: "aaaa",
      age: 19,
      test: {
        name: "bbbb",
        age: 20,
        test: {
          name: "cccc",
          age: 21,
          test: {
            name: "dddd",
            age: 22,
          },
        },
      },
    };
    // const p2 = this.test(p1);
    const p2 = this.copyTest(p1);

    p1.test.name = "吧吧吧";
    p1.test.test.name = "传传传";
    p1.test.test.test.name = "的的的";
    // console.log("aaa", p1);
    // console.log("bbb", p2);
    // this.bubbleSort();
    // this.arrayChange();
    this.storage();
    this.funClosure();
    // 节流
    window.onscroll = throttle(() => {
      console.log("我是节流");
    }, 1000);

    // this.inherit();
    // this.setPromise();
    // this.indexOfStr();
    this.unique();
  },
  methods: {
    clickAddSix() {
      this.$set(this.student, "six", "女");
    },
    test(person) {
      let obj = {};
      for (const key in person) {
        if (person[key] instanceof Object) {
          obj[key] = this.test(person[key]);
        } else {
          obj[key] = person[key];
        }
      }
      return obj;
    },
    copyTest(person) {
      let str = JSON.stringify(person);
      return JSON.parse(str);
    },
    // 冒泡排序
    bubbleSort() {
      let arr = [464, 5, 89, 1, 1, 5, 1, 15, 5, 4, 156, 6, 3];
      let len = arr.length;
      for (let i = 0; i < len; i++) {
        for (let j = i + 1; j < len; j++) {
          if (arr[i] > arr[j]) {
            let a = arr[i];
            arr[i] = arr[j];
            arr[j] = a;
          }
        }
      }
      console.log("当前排序", arr);
    },
    arrayChange() {
      let aa = [
        { name: "1", type: 0 },
        { name: "2", type: 0 },
        { name: "3", type: 2 },
        { name: "4", type: 2 },
        { name: "5", type: 3 },
        { name: "6", type: 3 },
      ];

      // aa.forEach((itme)=>{
      //   console.log("itme",itme);
      //   let c = aa.filter((value)=>{
      //     return itme.type == value.type;
      //   })
      //   // console.log("aaaaaaa",c);
      //   bb.push({type:itme.type,values:c})
      // })
      // bb.filter((value)=>{

      // })

      let types = [
        ...new Set(
          aa.map((itme) => {
            return itme.type;
          })
        ),
      ];
      console.log("你好", types);
      let bb = types.map((itme) => {
        return {
          type: itme,
          values: aa.filter((value) => value.type === itme),
        };
      });

      console.log("7777", bb);
    },
    // 储存
    storage() {
      localStorage.setItem("aaaaaaa", 125);
      sessionStorage.setItem("bbbbb", 89898);

      let time = new Date();
      let data = 1000 * 60;
      let times = time.getTime() + data;

      time.setTime(times);
      // console.log("data",times,time);
      document.cookie = "cccc=00000;expires=" + time.toUTCString() + "";

      function Foot() {}
      console.log("空对象", new Foot().__proto__, Foot.prototype);
    },
    // 闭包的应用
    funClosure() {
      let closure = (() => {
        let a = 10;
        let b = 20;
        function add() {
          return a + b;
        }
        function sub() {
          return a - b;
        }
        return {
          add,
          sub,
        };
      })();
      console.log("加减", closure.add(), closure.sub());
    },
    // 防抖
    // inputEvent() {
    //   if (this.t) {
    //     clearTimeout(this.t);
    //   }
    //   this.t = setTimeout(() => {
    //     console.log("777777");
    //   }, 500);
    // },
    inputEvent: debounce(() => {
      console.log("aaaaaaaaaaaaaa");
    }, 500),
    // call实现继承
    inherit() {
      function person() {
        this.name = "人类";
      }

      function enemy() {
        person.call(this);
      }

      let aa = new enemy();
      console.log("aa.name", aa.name);
    },
    // promise
    setPromise() {
      let p = new Promise((resolve, rejected) => {
        // resolve("hello world");
        rejected("9999999");
      });
      p.then((data) => {
        console.log("promise正常", data);
      }).catch((error) => {
        console.log("promise错误", error);
      });
    },
    // 找出字符串出现多次的字符以及次数
    indexOfStr() {
      let str = "aaaaabbbbbbccdeex";
      let obj = {};
      for (let i = 0; i < str.length; i++) {
        let curStr = str.charAt(i);
        if (obj[curStr]) {
          obj[curStr]++;
        } else {
          obj[curStr] = 1;
        }
      }
      let max = 0;
      for (let key in obj) {
        if (obj[key] > max) {
          max = obj[key];
        }
      }
      let str2 = null;
      for (let key in obj) {
        if (obj[key] === max) {
          str2 = key;
        }
      }
      console.log("字符串结果", obj, max, str2);
    },
    // 数组去重
    unique() {
      let arr1 = [
        [1, 6, 1, 2, 2, 556, 74, 23],
        [1, 6, 6, 4, 74, 23],
        [1, 6, 2, 80, 20, 50, 50],
        [1, 6, 1, 123, 23, 123],
      ];

      arr1.forEach((item, index) => {
        // console.log("aaa",[...new Set(item)]);
        // console.log("bbb", Array.from(new Set(item)));
      });

      let arr2 = [1, 2, 3, 4, 5, 6];
      // console.log("新数组", arr2.slice(2, 4));
    },
  },
};
</script>

<style lang="scss" scoped>
.test {
  width: 100vw;
  height: 100vh;
  display: flex;
  .test_box {
    margin: auto;
    width: 1000px;
    height: 800px;
    background-color: aquamarine;
    input[type="text"] {
      color: pink;
    }
    .property {
      width: 400px;
      height: 300px;
      background-color: burlywood;
      // background: url("../assets/evg.png") no-repeat;
      // background-size: 214px 47px;
      // background-size: cover;
      background-size: contain;

      div[class^=icon] {
        width: 100%;
        height: 10px;
        color: pink;
      }
      >img {
        width: 121px;
        height: 121px;
      }
    }
    #draw {
      border: 1px solid #ccc;
    }
    #draw2 {
      border: 1px solid #ccc;
    }
  }
}
</style>