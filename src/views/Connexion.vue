<template>

<main>
      <main>
        <!--<Spinner  v-if="loading"/>-->
      </main>
      <section class="h-screen">
  <div class="px-6 h-full text-gray-800">
    <div
      class="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6"
    >
      <div
        class="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0"
      >
        <img
          src="https://images-ext-2.discordapp.net/external/g1b_5aFltb-uzVQF8tOluaRXLPqrOICcEjjicV1Pk5E/%3Fw%3D740%26t%3Dst%3D1671482817~exp%3D1671483417~hmac%3D101d9357cdf7bba20162bb756a94a00cd95525d5e6c9298e4e48292d67098b05/https/img.freepik.com/vecteurs-libre/illustration-du-concept-connexion_114360-739.jpg?width=609&height=609"
          class="w-full"
          alt="Sample image"
        />
      </div>
      <div class="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
        <form @submit.prevent="login">
          <h1 class="text-center text-green-900 text-2xl uppercase font-bold ">Connexion  <span class="text-2xl">Dav</span><span class="text-orange-400">shop</span></h1>
          <br>
          <p class="text-red-600 text-lg-center" v-show="getError">{{getError}}</p>
          <!-- Email input -->
          <div class="mb-6">
            <input
                v-model="credentials.email"
              type="text"
              class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-800 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
              id="exampleFormControlInput2"
              placeholder="Adresse email"
            required/>
          </div>

          <!-- Password input -->
          <div class="mb-6">
            <input
                v-model="credentials.password"
              type="password"
              class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-800 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-orange-400 focus:outline-none"
              id="exampleFormControlInput2"
              placeholder="Mot de passe"
            required/>
          </div>

          <div class="flex justify-between items-center mb-6">
            <div class="form-group form-check">
              <input type="checkbox"
                     v-model="rememberMe"
                     id="exampleCheck2" />
              <label class="form-check-label inline-block text-gray-800" for="exampleCheck2">Se souvenir de
                moi</label>
            </div>
            <router-link to="Forgotpassword" class="text-gray-800" >Mot de passe oublié?</router-link>
           
          </div>

          <div class="text-center lg:text-left">
            <div class="flex justify-center">
              <button class=" bg-orange-400 hover:bg-green-900  text-white px-4 py-2 mt-5" type="submit">Envoyer</button>
            </div>
            <p class="text-sm font-semibold mt-2 pt-1 mb-0">
              Vous n'avez pas de compte?
              
                <router-link to="/Inscription" class="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out">Créez un compte</router-link>
               
              
            </p>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>
    
</main>
</template>
<script>
//import Spinner from '@/components/Spinner.vue'

import {mapGetters} from "vuex";

export default {
name : 'Connexion',
//components: {Spinner},
  computed: {
  ...mapGetters(["getError"])

   },
  methods: {
    login() {
      this.$store.dispatch('login',{credentials:this.credentials, rememberMe: this.rememberMe} )

    }
  },
  data() {
    return {
      credentials : {
        email: '',
        password: ''
      },
      user: null,
      rememberMe:false
    }
  
}

}
</script>
<style >

</style>