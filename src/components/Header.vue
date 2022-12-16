<template class="">
  <header class=" w-full" >
    <div class="container flex justify-between items-center p-4">
      <h3 class="text-2xl font-bold uppercase text-green-900 border-b-4 rounded border-cyan-900 "><span class="text-5xl">Dav</span><span class="text-orange-400">shop</span></h3>


    <!-- navigation mobile -->
    <!-- <div class="block lg:hidden">
    <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
      <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
    </button>
  </div> -->

    <button class="lg:hidden block" v-if="!isMobile" @click="(isMobile = !isMobile)">
      <svg class="fill-current h-6 w-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
    </button>
    <button class="lg:hidden block" v-else  @click="(isMobile = !isMobile)">
      <img src="https://simg.nicepng.com/png/small/25-258010_open-close-icon-png.png" alt="" class="fill-current h-6 w-6">
  </button>
<!-- navigation desktop -->

      <nav class="justify-between lg:flex hidden">
        <ul class="flex gap-10 mt-2 border-b-4 border-orange-400 rounded">

          <li class="text-cyan-900 text-lg ">
            <router-link to="/" class-active="active" exact>
              Accueil
            </router-link>
          </li>

          <li class="text-cyan-900   text-lg  ">
            <router-link to="/Annonces" class-active="active" exact>
              Nos annonces
            </router-link>
          </li>

          <li class="text-cyan-900    text-lg ">
            <router-link to="ItemDetails" class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown"
              class-active="active" aria-expanded="false">
              Mon compte
            </router-link>
             <ul class="dropdown-menu text-green-900  text-lg" v-if="!currentUser">
              <li><router-link to="Connexion" class="dropdown-item bg-green-900 text-white">Se connecter</router-link></li>
               <li><router-link to="Inscription" class="dropdown-item bg-green-900 text-white">Création de compte</router-link></li> 
            </ul>
            <ul class="dropdown-menu text-green-900  text-lg" v-else>
              <li><router-link to="Connexion" class="dropdown-item bg-green-900 text-white">Profil</router-link></li>
              <li><router-link to="Inscription" class="dropdown-item bg-green-900 text-white">Mes annonces</router-link></li>
              <li><button @click="logout" class="dropdown-item bg-green-900 text-white">Deconnexion</button></li>
            </ul>
          </li>

          <li class="text-cyan-900   text-lg ">
            <router-link to="/Contact" class-active="active" exact>
              Contact
            </router-link>
          </li>

          <li class="text-cyan-900  text-lg">
            <router-link to="/Propos" class-active="active" exact>
              À propos
            </router-link>
          </li>

        </ul>
      </nav>

      <!-- navigation mobile -->

      <nav class="absolute top-20 left-0 bg-green-900 lg:hidden w-full z-10" v-if="isMobile">
        <ul class="flex flex-col gap-10 mt-2">

          <li class="text-white  text-xl text-center border-b-2 border-white py-2">
            <router-link to="/" class-active="active" exact>
              Accueil
            </router-link>
          </li>

          <li class="text-white text-xl text-center border-b-2 border-white py-2 ">
            <router-link to="/Annonces" class-active="active" exact>
              Nos annonces
            </router-link>
          </li>

          <li class="text-white  text-xl text-center border-b-2 border-white py-2 ">
            <router-link to="Inscription" class-active="active" exact>
              Création de compte
            </router-link>
          </li>
          <li class="text-white  text-xl text-center border-b-2 border-white py-2 ">
            <router-link to="Connexion" class-active="active" exact>
              Se connecter
            </router-link>
          </li>

          <li class="text-white  text-xl text-center border-b-2 border-white py-2 ">
            <router-link to="/Contact" class-active="active" exact>
              Contact
            </router-link>
          </li>

          <li class="text-white  text-xl text-center border-b-2 border-white py-2 ">
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
            isMobile: false,
          test : 'test'

        }
    },
    methods: {
        showMenu() {
        },
      logout(){
          this.$store.dispatch('logout')
      }
    },
  mounted() {
      this.$store.dispatch('get_user')
  },
  computed: {
     currentUser(){
       return this.$store.state.user
     }
  },

}
</script>
<style>
</style>