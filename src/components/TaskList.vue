<template>
  <div class="taskList">
    <div class="taskList_itme" v-for="item in dataList" :key="item.id">
        <input type="checkbox" name="" :checked="item.select" @change="CheckSelectTask(item.id)">
        <p>{{item.name}}</p>
        <button @click="remove(item.id)">删除</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "TaskList",
  data() {
    return {};
  },
  props:["dataList","handleCheck","removeTack"],
  methods: { 
    CheckSelectTask(id) {
        this.handleCheck(id);
    },
    remove(id) {
      this.removeTack(id);
    }
  }
};
</script>

<style lang="scss" scoped>
.taskList {
    width: 400px;
    .taskList_itme {
        display: flex;
        justify-content: flex-start; 
        align-items: center;
        >p {
            margin-left: 20px;
        }
        >button {
            margin-left: auto;
        }
    }
}
</style>