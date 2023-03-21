<template>
  <div class="yellow">{{color}}</div>
</template>

<script>
import enventBus from '../main'
export default {
    name:'yellow',
    data() {
      return {
        color:'我是黄色'
      }
    }
}
</script>

<style scoped>
.yellow {
    background-color: yellow;
}
</style>