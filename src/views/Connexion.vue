<template>

<main>
   
      <main> <Spinner  v-if="loading"/></main>
    <div class="border-2 border-cyan-500 w-full max-w-5xl mx-auto px-6 sm:px-6 lg:px-8 mb-12 text-black  shadow shadow-lg p-8 sm:p-12">
      <h1 class="text-2xl font-bold leading-7 text-center text-blue-900 mb-4">page de connexion</h1>
            <form>
                <div class="md:flex items-center mt-12 flex flex-col">
                    <div class="w-full md:w-1/2 flex flex-col">
                        <label class="font-semibold leading-none text-blue-900 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500">Email<sup class="text-red-700">*</sup> </label>
                        <input 
                        type="text" 
                        class="border-2 leading-none text-blue-900 p-3 focus:outline-none focus:border-blue-900 mt-4 border-b-2 border-blue-900 " />
                    </div><br>
                  
                    <div class="w-full md:w-1/2 flex flex-col ">
                        <label class="font-semibold leading-none text-blue-900">mot de passe<sup class="text-red-700">*</sup></label>
                        <input
                         type="password" 
                         class="border-2 leading-none bg-white-100 text-slate-900 p-3 focus:outline-none focus:border-blue-900 mt-4 border-b-2 border-blue-900 " />
                    </div>
                </div>
                
                <div class="flex items-center justify-center w-full">
                    <button 
                    class="mt-9 font-semibold leading-none text-black py-4 px-10  bg-cyan-500 hover:bg-green-600">
                        Se connecter 
                    </button>
                </div>
                
            </form>
        </div>
    
</main>
</template>
<script>
import Spinner from '@/components/Spinner.vue'
export default {
name : 'Connexion',
components: {Spinner},
  // computed: {
  //   loading() {
  //     return this.$store.getters.loading
  //   }
  // },
  methods: {
    login() {
      if (this.credentials.email && this.credentials.password) {
        this.$store.dispatch("login", this.credentials);
      } else {
        console.log("une erreur est survenu")
      }

    }
  },
  data() {
    return {
      credentials : {
        email: '',
        password: '',
        loading:false
      }
    }
  
}

}
</script>
<style >

</style>