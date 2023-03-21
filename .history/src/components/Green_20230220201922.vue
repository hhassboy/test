<template>
  <div class="green">{{color}}</div>
</template>

<script>
export default {
    name:'green',
    data() {
      return {
        color:'我是绿色'
      }
    }
}
</script>

<style scoped>
.green {
    background-color: green;
}
</style>