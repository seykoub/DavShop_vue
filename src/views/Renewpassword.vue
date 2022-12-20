<template>

  <main>

    <!-- <main> <Spinner  v-if="loading"/></main> -->
    <section class="h-screen">
      <div class="px-6 h-full text-gray-800">
        <div class="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
          <div class="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0">
            <img src="https://images-ext-2.discordapp.net/external/g1b_5aFltb-uzVQF8tOluaRXLPqrOICcEjjicV1Pk5E/%3Fw%3D740%26t%3Dst%3D1671482817~exp%3D1671483417~hmac%3D101d9357cdf7bba20162bb756a94a00cd95525d5e6c9298e4e48292d67098b05/https/img.freepik.com/vecteurs-libre/illustration-du-concept-connexion_114360-739.jpg?width=609&height=609"
                 class="w-full" alt="Sample image" />
          </div>
          <div class="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
            <form @submit.prevent="renewpassword" v-if="recupUser">
              <div class="flex flex-row items-center justify-center lg:justify-start">
                <p class="text-lg mb-0 mr-4">Réinitialiser mot de passe</p>





              </div>



              <!-- Email input -->


              <!-- Password input -->
              <div class="mb-6">
                <input type="password"
                       class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                       id="exampleFormControlInput2" placeholder="Nouveau mot de passe"
                       v-model="password"
                       required />
              </div>
              <div class="mb-6">
                <input type="password"
                       class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                       id="exampleFormControlInput2" placeholder="Repeter mot de passe"
                       v-model="recupUser.password"
                       required />
              </div>



              <div class="text-center lg:text-left">
                <button type="submit"
                        class="inline-block px-7 py-3 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                  Enregistrer
                </button>

              </div>
            </form>
          </div>
        </div>
      </div>
    </section>

  </main>
</template>
<script>
import axios from 'axios';


export default {
  name: 'Renewpassword',
  // components: {Spinner},
  // computed: {
  //   loading() {
  //     return this.$store.getters.loading
  //   }
  // },
  methods: {
    async renewpassword(){
      await axios.put("http://localhost:3000/users/"+this.recupUser.id,this.recupUser)
          .then(() => {
            this.$store.dispatch("cleanrecupuser")
          })

    }

  },
  data() {
    return {
      recupUser: null,
      password: "",

    }

  },
  mounted() {
    this.recupUser = this.$store.state.recupUser
    console.log(this.recupUser)
  },

}
</script>
<style >

</style>