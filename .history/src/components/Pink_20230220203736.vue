<template>
  <div class="pink">{{color}}</div>
</template>

<script>
import { eventBus } from '@/main';
export default {
    name:'pink',
    data() {
      return {
        color:'我是粉色'
      }
    },
    mounted() {
      eventBus.$on('changeColor',(data)=>{
        this.color = data;
      })
    }
}
</script>

<style scoped>
.pink {
    background-color: pink;
}
</style>