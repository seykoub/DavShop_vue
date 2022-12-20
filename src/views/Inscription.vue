<template >
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
     <form    @submit.prevent="addUser">

       <h1 class="text-center text-green-900 text-2xl uppercase font-bold ">Inscription  <span class="text-2xl">Dav</span><span class="text-orange-400">shop</span></h1>
    <br>
    
        <div class="flex flex-col ">
          <input
              v-model="user.nom"
          
              type="text"
              placeholder="votre nom"
              class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
              id="exampleFormControlInput2" required>
        </div><br>
        <div class="flex flex-col">
          <input
              v-model="user.prenom"
              type="text"
              placeholder="Prénom"
              class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
              id="exampleFormControlInput2" required>
        </div><br>
        <div class="flex flex-col">
          <input
              v-model="user.email"
              type="email"
              placeholder="avshop@yahoo.fr"
              class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
              id="exampleFormControlInput2" required>
        </div><br>
        <div class="flex flex-col">
          <input
              v-model="user.password"
              type="password"
              placeholder="*******"
              class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
              id="exampleFormControlInput2"  required>
        </div><br>
        <div class="flex flex-col">
          <input
              v-model="user.telephone"

              type="+0033....."
              placeholder="téléphone"
              class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
              id="exampleFormControlInput2" required>
        </div><br>

        <div class="flex justify-center">
          <button class=" bg-orange-400 hover:bg-green-900  text-white px-4 py-2 mt-5" type="submit">S'inscrire</button>
    </div>
     </form>
   </div>
 </div>
</div>
</section>

</main>





</template>
<script>
import axios from "axios";

export default {
    name : 'Inscription',
    data(){
      return {
        user: {
          nom: '',
          prenom:'',
          email: '',
          password:'',
          telephone:''
        }
      }
    },
  mounted(){
   // this.getUser()
  },

   methods: {
     addUser() {
        axios.post("http://localhost:3000/register", this.user)
              .then(() => {
                this.user = {
                  nom: '',
                  prenom:'',
                  email: '',
                  password:'',
                  telephone:''
                }
                })
              }
      }

}
</script>
<style>

</style>


