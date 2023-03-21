<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <h3>ToDoList</h3>
    <input type="text" v-model="curTask" @keyup.enter="addTask" />
    <TaskList
      :dataList="dataList"
      :handleCheck="handleCheck"
      :removeTack="removeTack"
    ></TaskList>
    <div class="home_info" v-show="allTaskNum">
      <input type="checkbox" name="" id="" v-model="isAll" />
      <p>
        已完成 <span>{{ checkDoneNum }}</span> / 全部
        <span>{{ allTaskNum }}</span>
      </p>
      <button @click="clearDoneTask">清除已完成任务</button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import TaskList from "@/components/TaskList.vue";

export default {
  name: "HomeView",
  data() {
    return {
      curTask: "",
      dataList:JSON.parse(localStorage.getItem("dataList")) || []
    };
  },
  components: {
    TaskList,
  },
  mounted() {},
  computed: {
    checkDoneNum() {
      let index = 0;
      this.dataList.forEach((dataList) => {
        if (dataList.select) {
          index++;
        }
      });
      return index;

      // const index = this.dataList.reduce((pre,current)=> {
      //   console.log("@@@",pre);
      //   console.log("###",current);
      //   return pre + (current.select ? 1 : 0)
      // })
      // console.log("777",index);
    },
    allTaskNum() {
      return this.dataList.length;
    },
    isAll: {
      get() {
        return this.checkDoneNum === this.allTaskNum;
      },
      set(value) {
        console.log("当前的是否显示", value);
        this.selectAllTask(value)
      },
    },
  },
  watch: {
    dataList: {
      deep:true,
      handler(value) {
        localStorage.setItem("dataList",JSON.stringify(value))
      }
    }
  },
  methods: {
    // 添加任务
    addTask() {
      if (this.curTask) {
        let index = this.dataList.length + 1;
        let data = {
          id: index, 
          name: this.curTask,
          select: false,
        };
        console.log("当前的数据", typeof index, data);
        this.dataList.push(data);
        this.curTask = "";
      }
    },
    //删除任务
    removeTack(id) {
      for (const key in this.dataList) {
        if (this.dataList[key].id === id) {
          this.dataList.splice(key, 1);
        }
      }
    },
    handleCheck(id) {
      this.dataList.forEach((dataList) => {
        if (dataList.id === id) {
          dataList.select = !dataList.select;
        }
      });
      console.log("全部", this.dataList);
    },
    selectAllTask(value) {
      this.dataList.forEach(dataList=> {
        dataList.select = value;
      })
    },
    clearDoneTask() {
      this.dataList = this.dataList.filter((task)=>{
        return !task.select
      })
    }
  },
};
</script>

<style lang="scss" scoped>
.home {
  padding-top: 30px;
  width: 400px;
  height: 400px;
  >h3 {
    margin-top: 0;
  }
  > input {
    width: 400px;
  }
  .home_info {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 400px;
    > p {
      margin-left: 20px;
    }
    > button {
      margin-left: auto;
    }
  }
}
</style>
