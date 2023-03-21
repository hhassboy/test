import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex);
export default new Vuex.Store({
    state() {
        return {
            count:1
        }
    },
    mutations:{
        addCount(state,num) {
            state.count += num;
        },
        subCount(state) {
            state.count--;
        }
    },
    actions:{
        addAsync(context) {
            setTimeout(()=>{
                context.commit('addCount',10)
            },3000)
        }
    },
    getters:{

    }
})