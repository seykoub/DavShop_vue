<template >
    <div>
    <div class="flex justify-center ">
    <form class="my-6 w-2/3 text-blue-900 p-6 shadow-md border-2 border-cyan-500">  <!--@submit.prevent="register" v-else> -->
    <h1 class="text-center text-2xl uppercase font-bold ">Inscription</h1>
    <br>
    
        <div class="flex flex-col ">
          <label class=" text-lg  text-blue-900 font-semibold">Nom:</label>
          <input
          
              type="text"
              placeholder="votre nom"
              class="leading-none text-black text-slate-900 py-3 mx-20 focus:outline-none  focus:border-green-500 mt-4 border-b-2 border-2 border-blue-900">
        </div><br>
        <div class="flex flex-col">
          <label class="text-lg font-semibold" for="">Prénom:</label>
          <input
              type="text"
              placeholder="Prénom"
              class="leading-none text-black text-slate-900 py-3 mx-20 focus:outline-none  focus:border-green-500 mt-4 border-2 border-blue-900">
        </div><br>
        <div class="flex flex-col">
          <label class="text-lg font-semibold">Email:</label>
          <input
              type="email"
              placeholder="avshop@yahoo.fr"
              class="leading-none text-black text-slate-900 py-3 mx-20 focus:outline-none  focus:border-green-500 mt-4 border-2 border-blue-900 ">
        </div><br>
        <div class="flex flex-col">
          <label class="text-lg font-semibold" for="">Mot de passe:</label>
          <input
              type="password"
              placeholder="*******"
              class="leading-none text-black text-slate-900 py-3 mx-20 focus:outline-none  focus:border-green-500 mt-4 border-2 border-blue-900 ">
        </div><br>
        <div class="flex flex-col">
          <label class="text-lg font-semibold" for="">Téléphone:</label>
          <input
              type="+0033....."
              placeholder="téléphone"
              class="leading-none text-black text-slate-900 py-3 mx-20 focus:outline-none  focus:border-green-500 mt-4 border-2 border-blue-900 ">
        </div><br>
        <div class="flex flex-col">
          <label class="text-lg font-semibold" for="">Avatar:</label>
          <input
              type="text"
              placeholder="Nom"
              class="leading-none text-black text-slate-900 py-3 mx-20 focus:outline-none  focus:border-green-500 mt-4 border-2 border-blue-900">
        </div><br>
        <div class="flex justify-center">
          <button class=" bg-cyan-500 hover:bg-green-600  text-black px-4 py-2 mt-5">S'inscrire</button>
    </div>
    </form>
    </div>
</div>   
</template>
<script>
export default {
    name : 'Inscription',
    
}
</script>
<style>
    
</style>