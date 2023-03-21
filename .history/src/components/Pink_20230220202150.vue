<template>
  <div class="pink">{{color}}</div>
</template>

<script>
export default {
    name:'pink',
    data() {
      return {
        color:'我是粉色'
      }
    }
}
</script>

<style scoped>
.pink {
    background-color: pink;
}
</style>