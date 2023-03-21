<template>
  <div class="trainee">
    <div class="father">
      <!-- <div class="son"></div>
      <div class="active">
        <div class="son1"></div>
      </div>
      <div class="son2"></div> -->
      <div class="son3"></div>
      <div class="son4"></div>
    </div>
    <div class="son3"></div>
    <button @click="clickBtn">按钮</button>
    <button>按钮1</button>
    <button>按钮2</button>
    <button @click="addSex">增加性别</button>
    <h1>姓名：{{person.name}}</h1>
    <h1>年龄：{{person.age}}</h1>
    <h1 v-show="person.sex">性别：{{person.sex}}</h1>
    <div v-for="item in newsData" :key="item.id">
      <component :is="item.type"></component>
    </div>
  </div>
</template>

<script>
import news from "../utils/news";
import pink from "../components/Pink";
import green from "../components/Green";
import yellow from "../components/Yellow";

import { eventBus } from "@/main";

export default {
  name: "trainee",
  data() {
    return {
      news,
      newsType: "pink",
      person:{
        name:'小明',
        age:18
      }
    };
  },
  components: {
    pink,
    green,
    yellow,
  },
  computed: {
    newsData() {
      return this.news.map((item) => {
        console.log("当前计算", item);
        return {
          ...item,
          newType: "we-" + item.type,
        };
      });
    },
  },
  mounted() {
    // this.news.map(item=>{
    //     console.log("当前计算22",...item);
    //   })
    // this.init();
  },
  methods: {
    addSex() {
      // vue2中不能新增和删除属性实现响应式
      // this.person.sex = '男';
      // 可以通过this.$set()新增this.$delete()删除
      this.$set(this.person,'sex','女')


      console.log("增加性别",this.person);
    },
    clickBtn() {
      eventBus.$emit('changeColor','红色')

      // console.log("当前计算22",this.newsData);
      // console.log("href",location.href);
      // console.log("host",location.host);
      // console.log("port",location.port);
      // console.log("pathname",location.pathname);
      // console.log("search",location.search);
      // console.log("hash",location.hash);
      // 记录浏览历史，所以可以实现后退功能
      // location.assign("http://www.baidu.com");
      // 不记录浏览历史，所以不可以实现后退功能
      // location.replace("http://www.baidu.com");
      //刷新
      // location.reload();
      //后退
      // history.back();
      // //前进
      // history.forward();
      // //前进后退  前进- 后退-1
      // history.go();
      // function F() {}
      // Object.prototype.a = function () {
      //   console.log("a()");
      // };
      // Function.prototype.b = function () {
      //   console.log("b()");
      // };
      // let f = new F();
      // f.a(); //a()
      // // f.b(); //f.b is not a function -->找不到
      // F.a(); //a()
      // F.b(); //b()
      // console.log("777",Object.getPrototypeOf(f));
      // console.log("888",F.prototype);
      // console.log(Object.getPrototypeOf(Function));

      // function fn1() {
      //   // 此时闭包就已经产生了(函数提升,实际上[fn2]提升到了第一行, 内部函数对象已经创建了)
      //   var a = 2;
      //   function fn2() {
      //     //如果时[let fn2=function(){}]，那么在这行才会产生闭包
      //     a++;
      //     console.log(a);
      //   }
      //   return fn2;
      // }
      // var f = fn1();
      // f();
      // f = null // 闭包死亡(包含闭包的函数对象成为垃圾对象)
      // function fun(n, o) {
      //   console.log(n,o);
      //   return {
      //     fun: function (m) {
      //       console.log("传单",m, n);
      //       return fun(m, n);
      //     },
      //   };
      // }

      // // var a = fun(0) //undefined
      // // a.fun(1)  //0
      // // a.fun(2)  //0
      // // a.fun(3)  //0

      // // var b = fun(0).fun(1).fun(2).fun(3) //undefined 0 1 2

      // var c = fun(0).fun(1); //undefined  0
      // c.fun(2); //1 -->经过上方定义后 n固定为1
      // c.fun(3); //1 -->此处是陷阱!!!  一直没有改到n,所以一直是1
      // c.fun(4);

      // 父类型
      function Supper() {
        this.supProp = "父亲的原型链";
      }
      // 给父类型的原型上增加一个 showSupperProp 方法，打印自身 subProp
      Supper.prototype.showSupperProp = function () {
        console.log(this.supProp);
      };

      // 子类型
      function Sub() {
        this.subProp = "儿子的原型链";
      }
      // 子类型的原型为父类型的一个实例对象
      Sub.prototype = new Supper();
      // 让子类型的原型的constructor指向子类型
      // 如果不加，其构造函数找的[`new Supper()`]时从顶层Object继承来的构造函数,指向[`Supper()`]
      // Sub.prototype.constructor = Sub;
      // 给子类型的原型上增加一个 showSubProp 方法，打印自身 subProp
      Sub.prototype.showSubProp = function () {
        console.log(this.subProp);
      };

      var sub = new Sub();

      sub.showSupperProp(); // 父亲的原型链
      sub.showSubProp(); // 儿子的原型链
      console.log(sub);
      /**
        Sub {subProp: "儿子的原型链"}
        subProp: "儿子的原型链"
        __proto__: Supper
        constructor: ƒ Sub()
        showSubProp: ƒ ()
        supProp: "父亲的原型链"
              __proto__: Object
      */
    },

    // var闭包的应用
    init() {
      // let btn = document.querySelectorAll("button");
      let btn = document.getElementsByTagName("button");
      for (var i = 0; i < btn.length; i++) {
        (function (index) {
          let a = btn[index];
          console.log("btn", btn[i]);
          a.onclick = function () {
            console.log("点击", index);
          };
        })(i);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.trainee {
  padding-top: 25px;
  .father {
    // width: 300px;
    width: 100%;
    // height: 400px;
    margin-top: 20px;
    background-color: blueviolet;
    // overflow: hidden;
    // overflow: auto;
    // display: inline-block;
    // display: flex;
    // float: left;
    .son {
      // float: left;
      // margin-top: 30px;
      width: 50%;
      height: 200px;
      // border: 1px solid #ccc;
      background-color: aquamarine;
    }
    .active {
      overflow: auto;
      .son1 {
        float: right;
        // margin-top: 30px;
        width: 70%;
        height: 100px;
        // border: 1px solid #ccc;
        background-color: rgb(53, 190, 26);
      }
    }

    .son2 {
      // float: right;
      // margin-top: 30px;
      width: 50%;
      height: 200px;
      // border: 1px solid #ccc;
      background-color: rgb(226, 92, 58);
    }
    .son3 {
      float: left;
      // margin-top: 30px;
      width: 500px;
      height: 100px;
      // border: 1px solid #ccc;
      background-color: rgb(26, 98, 146);
    }
    .son4 {
      // float: right;
      // margin-top: 30px;
      // width: 50%;
      overflow: hidden;
      height: 200px;
      // border: 1px solid #ccc;
      background-color: rgb(219, 32, 188);
    }
  }
  .son3 {
    width: 500px;
    height: 400px;
    background-color: cadetblue;
    transition: all 0.5s linear 1s;
  }
  .son3:hover {
    width: 700px;
  }
}
</style>