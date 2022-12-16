import Vue from "vue"
import VueX from 'vuex'
import axios from "axios"
import router from '@/router'

Vue.use(VueX)
const store = new VueX.Store({
    state: {
        user: null,
        token: null
    },
    getters:{
        currentUser(state){
            return state.user

        }
    },

    actions : {
        async login({commit}, credentials){
            await axios.post("http://localhost:3000/login", credentials)
                .then((res) => {
                       commit('SET_TOKEN', res.data.accessToken)
                    commit('LOGIN', res.data.user)
                    router.push('/Annonces')
                })
                .catch(error => console.log(error))
        },
        get_user({commit}) {
            commit('GET_USER')
        },

        logout({commit}) {
            commit('LOGOUT')
            commit('REMOVE_TOKEN')

        }
    },

    mutations: {

        SET_TOKEN(state, token){
            state.token = token
        },

        GET_USER(state){
            state.user = JSON.parse(localStorage.getItem('USER') || '') || null
        },

        LOGIN(state, user){
            state.user = user
            localStorage.setItem('USER', JSON.stringify(user))

        },
        REMOVE_TOKEN(state){
            state.token = null
        },
        LOGOUT(state){
            state.user = null
            localStorage.removeItem('USER')
        },

    }
})

export default store