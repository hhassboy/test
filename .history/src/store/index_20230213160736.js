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
        addCount(state) {
            state.count++;
        },
        subCount(state) {
            state.count--;
        }
    },
    actions:{

    },
    getters:{

    }
})