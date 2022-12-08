<template>
<div class= "grid gap-4 grid-cols-4 mb-8 bg-slate-50 flex-col">
     <main>
        
             <!--- <div class="grid gap-4 grid-cols-4 mb-8 bg-stone-50"> --> 
   
         <h1 class="text-left text-2xl mt-0 pt-0 text-cyan-500 text-start">vous pouvez vendre votre produit, acheter ou donner tout simplement! <br>Ensemble Donnons une second vie à vos produit !!!</h1>
         
        
        <!---</div>-->
        
        <div  class="relative w-80 place-items-end top-0">
           <!--<router-link to="Propos" class="dropdown-item"></router-link >-->
        
            <img
            class="child-absolute"
              src="../assets/davLogo.jpg"
              alt=""

              
            />
            <button class="text-xl py-2 mb-4 px-2 bg-cyan-500 ml-0 mt-5 font-semibold text-black mb-7 lg:mb-0" >
                    <router-link to="contact">Nous contacter</router-link>
                </button>
            </div>

       

       

         </main>
     </div>
</template>
<script>
export default {
    name : 'Home',
    
}
</script>
<style lang="">


    
</style>