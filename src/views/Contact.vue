<template>
    <div class="w-full ">
        <div class="max-w-5xl mx-auto px-6 sm:px-6 lg:px-8 mb-12 text-cyan-900">
            <div class=" mt-6 border-2 border-cyan-500 w-full shadow shadow-lg p-8 sm:p-12">
                <p class="text-3xl font-bold leading-7 text-center text-cyan-500! mb-4">Nous Contacter </p>

                <p class="text-emerald-600 text-lg" v-show="success">Votre demande à bien été reçu !</p>

                <form
                @submit.prevent="sendEmail"
                >
                    <div class="md:flex items-center mt-12">
                        <div class="w-full md:w-1/2 flex flex-col">
                            <label class="font-semibold leading-none">Nom <sup class="text-red-700">*</sup></label>
                            <input type="text" 
                            v-model="nom" 
                            name="nom" 
                            placeholder="votre nom"
                                class="leading-none border-2 border-cyan-900 text-slate-900 p-3 ml-2 focus:outline-none mt-4 border-b-2 " /><br>
                        </div>
                        <div class="w-full md:w-1/2 flex flex-col">
                            <label class="font-semibold leading-none">prénom <sup class="text-red-700">*</sup></label>
                            <input type="text"
                            v-model="prenom" 
                            name="prenom" 
                            placeholder="votre prenom"
                                class="leading-none bg-white-100 border-2 border-cyan-900 text-slate-900 p-3 ml-2 focus:outline-none focus:border-green-500 mt-4 border-b-2 " /><br>
                        </div>
                    </div>

                    <div class="md:flex items-center mt-8">
                        <div class="w-full flex flex-col">
                            <label class="font-semibold leading-none">Email<sup class="text-red-700">*</sup></label>
                            <input type="email"
                            v-model="email" 
                            name="email" 
                            placeholder="votre Email"
                                class="leading-none bg-white-100 border-2 border-cyan-900 text-slate-900 p-3 focus:outline-none focus:border-green-500 mt-4 border-b-2 " />
                        </div>
                    </div>
                    <div class="md:flex items-center mt-8">
                        <div class="w-full flex flex-col">
                            <label class="font-semibold leading-none">Sujet <sup class="text-red-700">*</sup></label>
                            <input type="text"
                            v-model="sujet" 
                            name="sujet" 
                            placeholder="votre sujet"
                                class="leading-none bg-white-100 border-2 border-cyan-900 text-slate-900 p-3 focus:outline-none focus:border-green-500 mt-4 border-b-2 " />
                        </div>

                    </div>
                    <div>
                        <div class="w-full flex flex-col mt-8">
                            <label class="font-semibold leading-none">Message <sup class="text-red-700">*</sup></label>
                            <textarea type="text"
                            v-model="message" 
                            name="message" 
                            placeholder="votre message"
                                class="h-40 text-base leading-none border-2 border-cyan-900 bg-white-100 text-slate-900 p-3 focus:outline-none focus:border-green-500 mt-4 border-b-2 ">
                            </textarea>
                        </div>
                    </div>
                    <div class="flex items-center justify-center w-full">
                        <button class="mt-9 font-semibold leading-none  py-4 px-10 bg-cyan-500 hover:bg-green-600">
                            Envoyer
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
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
        emailjs.sendForm('service_kozu5cl', 'template_ts0i75d', e.target,
        'r8q3PLTudzIq2fbLu', {
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

</style>