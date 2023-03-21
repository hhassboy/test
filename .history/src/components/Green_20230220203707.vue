<template>
  <div class="green">{{color}}</div>
</template>

<script>
import {eventBus} from '@/main'
export default {
    name:'green',
    data() {
      return {
        color:'我是绿色'
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
.green {
    background-color: green;
}
</style>