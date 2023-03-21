<template>
  <div class="yellow">{{color}}</div>
</template>

<script>
import {enventBus} from '@/main.js'
export default {
    name:'yellow',
    data() {
      return {
        color:'我是黄色'
      }
    },
    mounted() {
      enventBus.$on('changeColor',(data)=>{
        this.color = data;
      })
    }
}
</script>

<style scoped>
.yellow {
    background-color: yellow;
}
</style>