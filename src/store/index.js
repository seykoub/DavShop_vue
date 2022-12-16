import Vue from "vue"
import VueX from 'vuex'

Vue.use(VueX)
const store = new VueX.Store({
    state: {
        user: null,
        count: 0
    },
    mutations: {
        increment (state) {
            state.count++
        }
    }
})

export default store