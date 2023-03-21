import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex);
export default new Vuex.Store({
    state() {
        return {
            count:1
        }
    },
    // 只有mutations才有修改数据的权利
    mutations:{
        addCount(state,num) {
            state.count += num;
        },
        subCount(state) {
            state.count--;
        }
    },
    // actions只负责执行异步操作，如果需要修改state中的数据，必须通过context.commit()触发某个mutations才行
    actions:{
        addAsync(context,step) {
            setTimeout(()=>{
                context.commit('addCount',step)
            },3000)
        },
        subAsync() {
            setTimeout(()=>{
                context.commit('subCount')
            },3000)
        }
    },
    getters:{

    }
})