<template>

  <main>
    
 
   <section class="h-screen">
     <div class="px-6 h-full text-gray-800">
       <div
           class="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6"
       >
       <div class="grow-0 shrink-0 basis-auto block w-full lg:flex lg:w-6/12 xl:w-6/12">
         <div class="map-container-2 w-full">
           <iframe src="https://maps.google.com/maps?q=toulouse&t=&z=13&ie=UTF8&iwloc=&output=embed" class="left-0 top-0 h-full w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg" frameborder="0" allowfullscreen></iframe>
         </div>
       </div>
         <div class="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
           <form    @submit.prevent="sendEmail">

             <h1 class="text-center text-green-900 text-2xl uppercase font-bold ">Contact <span class="text-2xl">Dav</span><span class="text-orange-400">shop</span></h1>
             <br>

             <div class="flex flex-col ">
               <input
                   v-model="nom"
                   type="text"
                   name="nom"
                   placeholder="votre nom"
                   class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                   id="exampleFormControlInput2" required>
             </div><br>
             <div class="flex flex-col">
               <input
                   v-model="prenom"
                   type="text"
                   placeholder="Prénom"
                   class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                   id="exampleFormControlInput2" required>
             </div><br>
             <div class="flex flex-col">
               <input
                   v-model="email"
                   type="email"
                   placeholder="avshop@yahoo.fr"
                   class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                   id="exampleFormControlInput2" required>
             </div><br>
             <div class="flex flex-col">
               <input
                   v-model="sujet"
                   type="text"
                   placeholder="votre sujet"
                   class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                    required>
             </div><br>
             <div class="flex flex-col">
               <textarea
                   v-model="message"
                   name="message"

                   type="text"
                   placeholder="votre message"
                   class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                   id="exampleFormControlInput2" required>
                 </textarea>
             </div><br>

             <div class="flex justify-center">
               <button class=" bg-green-900 hover:bg-orange-400  text-white px-4 py-2 mt-5" type="submit">Envoyer</button>
             </div>
           </form>
         </div>
       </div>
     </div>
   </section>

 </main>


</template>
<script>
import emailjs from 'emailjs-com';
export default {
   name: "Contact",
   data() {
   return {
     success: false,  
     nom: '',
     prenom:'',
     email: '',
     sujet:'',
     message: ''
   }
 },
 methods: {
   sendEmail(e) {
     try {
       emailjs.sendForm(process.env.VUE_APP_SERVICE_EMAIL, process.env.VUE_APP_TEMPLATE_EMAIL, e.target,
       process.env.VUE_APP_USER_ID, {
         nom: this.nom,
         prenom:this.prenom,
         email: this.email,
         sujet: this.sujet,
         message: this.message
       })

        // Reset form field
        this.success = true
     this.nom = ''
     this.prenom =''
     this.email = ''
     this.sujet = ''
     this.message = ''
     console.log("email envoyé")

     } catch(error) {
         console.log({error})
     }
    
   },
 }
}


</script>
<style>
.map-container-2 {
       height: 500px;
     }

</style>