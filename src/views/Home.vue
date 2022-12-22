<template>
  <main >
  <!--Description du site et présentation-->
  <section class="my-10 lg:flex block gap-10 items-center">
    <!--Titre de mon site avec description
    Presentation rapide
    -->
      <div class="w-full lg:w-1/2">
        <h1 class="text-green-900 text-6xl font-bold mb-5">Site de don, d'achat et de vente entre particulier</h1>
        <p class=" text-2xl">Chez davshop, vous pouvez faire un don de vos objets qui n'ont plus d'utilités à vos yeux au plus nécéssiteux. Vous pouvez acheter les articles qui sont mises en vente par des particuliers via davshop.
          Vous pouvez aussi vendre vos articles à des particuliers. Il vous suffit de négocier avec votre acheteur via davshop.
          Rendez-vous la vie facile avec davshop</p>
      </div>
    <div class="w-full lg:w-1/2 h-40px aspect-video  object-cover">
      <img
          src="../assets/DavShop_icon_presta-01.png" alt="">
    </div>
  </section>
    <hr>
    <br>
    <section>
      <div class="my-20 lg:flex justify-between items-center block mt-0">
        <h3 class="text-2xl font-semibold mb-2 border-b-4 border-orange-400 rounded mt-0">Nos derniers annonces</h3>
      </div>
    <!--Carroussel, slide avec hooper-->
    <div class="object-cover pt-4 bg-green-50 mt-0 h-auto">
      <hooper :settings="hooperSettings" >
        <slide v-for="post in currentItem" :key="post.id">
         <Annonce :item="post"/>
        </slide>

      </hooper>
    </div>
  </section>
    <br>
    <hr>
  <!--Card illustration de ce que fait davshop étapes-->
  <section>
    <div class=" flex flex-nowrap justify-between grid-flow-col gap-4 mt-4" height="50" >
      <div class="block my-2 mx-2 p-6 rounded-lg shadow-lg bg-white  max-w-sm hover:bg-orange-400 "><img src="../assets/Icone-01.png" alt="" width="80" />
        <router-link to="Propos" class="hover:text-decoration-underline text-orange-400"> <p>Votre boutique davshop vous permet de faire beaucoup de chose depuis votre canapé</p></router-link></div>
      <div class="block my-2 mx-2 p-6 rounded-lg shadow-lg bg-white  max-w-sm "><img src="../assets/Icone-02.png" alt="" width="80" />
        <router-link to="Propos" class=" text-orange-400"><p>Le Don, ah! que c'est bien de penser aux autres. Il y'a encore de l'humanité en nous</p></router-link></div>
      <div class="block my-2 mx-2 p-6 rounded-lg shadow-lg bg-white  max-w-sm "><img src="../assets/Icone-03.png" alt="" width="80" />
        <router-link to="Propos" class="hover:text-decoration-underline decoration-green-900 text-orange-400" @click="goToPropos(propos)"><p>Vous étes ok, mettez vos articles dans votre panier et hop!</p></router-link></div>
      <!-- Add the style and icon you want using the String format -->
      </div>
  </section>
  </main>
</template>
<script>
import { Hooper, Slide } from 'hooper';
import 'hooper/dist/hooper.css';
import Annonce from "@/components/Card/Annonce";
import axios from 'axios'




export default {
    name : 'Home',
  components: {
    Annonce,
    Hooper,
    Slide
  },
  data() {
    return {
      hooperSettings: {
        itemsToShow: 3,
        progress: true,
        autoPlay: true,
        playSpeed: 3000,
        vertical: false,
        infiniteScroll:true,
        breakpoints: {

          400: {
            itemsToShow: 1
          },
          900: {
            itemsToShow: 2
          },
          1000: {
            itemsToShow: 3,
          }
        }
      },
      currentItem:[],
      
      loading: false

    }
  },
  mounted() {
    this.getAnnonces()
  },
  methods:{
    async getAnnonces(){
          this.loading = true
        let filter = this.categoryFilter ? `category=${this.categoryFilter}&` : ""
        filter += this.search ? `title_like=${this.search}&` : ""
        await axios.get(`http://localhost:3000/posts?${filter}_page=${this.page}&_limit=8`)
        .then((res) => this.currentItem = res.data)
        .catch((e) => console.log(e))
        .finally(() => this.loading= false)
      },
  },
  

  
};
</script>
<style>

</style>
