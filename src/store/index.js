import Vue from "vue"
import VueX from 'vuex'
import axios from "axios"
import router from '@/router'

Vue.use(VueX)
const store = new VueX.Store({
    state: {
        user: null,
        token: null,
        recupUser:null,
        error:null
    },

    getters:{
        currentUser(state){
            return state.user
        },
        getError(state){
            return state.error
        }
    },

    actions : {
        async login({commit}, {credentials,rememberMe}){
            await axios.post("http://localhost:3000/login", credentials)
                .then((res) => {
                    commit('SET_TOKEN', res.data.accessToken)
                    commit('LOGIN', {user: res.data.user, rememberMe: rememberMe})
                    commit('REMOVE_ERROR')
                    localStorage.setItem("userId", res.data.user.id)
                    router.push('/MesAnnonces')
                })
                .catch(error =>{
                    commit ('SET_ERROR', error.response.data)
                })
        },
        async storeCurrent({commit}, ){
            await axios.get("http://localhost:3000/users/" + localStorage.getItem('userId'))
                .then((res) => {
                    commit('LOGIN', {user: res.data, remrememberMe:false})
                    console.log(res.data);
                    commit('REMOVE_ERROR')
                    router.push('/MesAnnonces')
                })
                .catch(error =>{
                    commit ('SET_ERROR', error.response.data)
                })},
        get_user({commit}) {
            commit('GET_USER')
        },

        get_recup_user({commit},user) {
            commit('GET_RECUP_USER',user)
            router.push('/Renewpassword')
        },

        logout({commit}) {
            commit('LOGOUT')
            commit('REMOVE_TOKEN')
            localStorage.removeItem("userId")
            router.push('/Connexion')

        },
        cleanrecupuser ({commit}){
            commit('CLEANRECUPUSER')
            router.push('/Connexion')

        }
    },

    mutations: {

        SET_TOKEN(state, token){
            state.token = token
        },
        SET_ERROR(state, error){
            state.error =error
        },
        REMOVE_ERROR(state){
          state.error=null
        },
        GET_USER(state){
            state.user = JSON.parse(localStorage.getItem('USER') || 'null') || null
        },
        GET_RECUP_USER(state, user){
            state.recupUser=user
            state.recupUser.password = ""
        },

        LOGIN(state, {user, rememberMe}){
            console.log('user', user);
            state.user = user
            console.log('state', state.user);
            if(rememberMe) localStorage.setItem('USER', JSON.stringify(user))

        },
        REMOVE_TOKEN(state){
            state.token = null
        },
        LOGOUT(state){
            state.user = null
            localStorage.removeItem('USER')
        },

        CLEANRECUPUSER(state) {
            state.recupUser = null
        }

    }
})

export default store