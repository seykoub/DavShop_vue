<template>
<!--Pour le sementique HTML on declare un barre de navigation avec la balise header-->
  <header class="p-6 border-b- border-cyan-900 text-black  grow ">
    <div class="container  block lg:flex justify-between items-center">
      <!--Titre de mon site--> 
     
      <!--<h3 class="font-bold text-2xl text-center"></h3>-->
      <!--Liste des liens -->
      <nav class=" w-full justify-between flex">
           <input v-model="search"
                      class=" flex gap-10 mt-2 border-cyan-900 m-8 border-2 focus:border-cyan-900 focus:outline-none lg:w-1/5 text-cyan-900 w-full px-8 py-1"
                      type="text" placeholder="Effectuez une recherche">
                     
        <ul class="flex gap-10 mt-2">
    
        <li class="text-cyan-900 class=bg-orange-400  focus:outline-none focus:ring focus:ring-orange-400">
            <router-link to="/" class-active="active" exact>
              Accueil
            </router-link>
          </li>

          <li class="text-cyan-900 class=bg-orange-400  focus:outline-none focus:ring focus:ring-orange-400 ">
            <router-link to="/Annonces" class-active="active" exact>
              Nos annonces
            </router-link>
          </li>
           <li class="text-cyan-900 class=bg-orange-400   focus:outline-none focus:ring focus:ring-orange-400 ">
            <router-link to="ItemDetails" class="nav-link dropdown-toggle"  role="button" data-bs-toggle="dropdown"  class-active="active" aria-expanded="false">
            Mon compte
          </router-link >
          <ul class="dropdown-menu text-cyan-900 class=bg-orange-400  focus:outline-none focus:ring focus:ring-orange-400">
            <li><router-link to="Connexion" class="dropdown-item">Se connecter</router-link ></li>
            <li><router-link to="Inscription"  class="dropdown-item">Création de compte</router-link ></li>
          </ul>
          </li>


            <li class="text-cyan-900 class=bg-orange-400   focus:outline-none focus:ring focus:ring-orange-400 ">
            <router-link to="/Contact" class-active="active" exact>
              Contact
            </router-link>
          </li>
            <li class="text-cyan-900 class=bg-orange-400   focus:outline-none focus:ring focus:ring-orange-400 ">
            <router-link to="/Propos" class-active="active" exact>
              À propos
            </router-link>
          </li>
        
        </ul>
      </nav>
    </div>
  </header>
        
    
</template>
<script>
export default {
    name: "Header",

    data() {
        return {
           /* links: [
                { href: "/", nomDulien: "Accueil" },
                 { href: "/", nomDulien: "Mon compte" },
                  { href: "/", nomDulien: "Mon panier" },
            ]*/
        }
    
}



}
</script>
<style>
.router-link-active {
  border-bottom: 3px solid #ff914d;
  color: #ff914d;
  font-weight: 600;
}

    
</style>