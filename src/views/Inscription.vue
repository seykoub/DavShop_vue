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
       src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
       class="w-full"
       alt="Sample image"
     />
   </div>
   <div class="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
     <form    @submit.prevent="addUser">

       <h1 class="text-center text-2xl uppercase font-bold ">Inscription</h1>
    <br>
    
        <div class="flex flex-col ">
          <label class=" text-lg font-semibold">Nom:</label>
          <input
              v-model="user.nom"
          
              type="text"
              placeholder="votre nom"
              class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
              id="exampleFormControlInput2" required>
        </div><br>
        <div class="flex flex-col">
          <label class="text-lg font-semibold" for="">Prénom:</label>
          <input
              v-model="user.prenom"
              type="text"
              placeholder="Prénom"
              class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
              id="exampleFormControlInput2" required>
        </div><br>
        <div class="flex flex-col">
          <label class="text-lg font-semibold">Email:</label>
          <input
              v-model="user.email"
              type="email"
              placeholder="avshop@yahoo.fr"
              class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
              id="exampleFormControlInput2" required>
        </div><br>
        <div class="flex flex-col">
          <label class="text-lg font-semibold" for="">Mot de passe:</label>
          <input
              v-model="user.password"
              type="password"
              placeholder="*******"
              class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
              id="exampleFormControlInput2"  required>
        </div><br>
        <div class="flex flex-col">
          <label class="text-lg font-semibold" for="">Téléphone:</label>
          <input
              v-model="user.telephone"

              type="+0033....."
              placeholder="téléphone"
              class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
              id="exampleFormControlInput2" required>
        </div><br>

        <div class="flex justify-center">
          <button class=" bg-green-900 hover:bg-green-600  text-black px-4 py-2 mt-5" type="submit">S'inscrire</button>
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


