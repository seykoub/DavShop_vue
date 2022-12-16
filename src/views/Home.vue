<template>
  <main >
  <!--Section 1-->
  <section class="my-10 lg:flex block gap-10 items-center">
    <!--Titre de mon site avec description-->
    <!-- Presentation rapide -->
      <div class="w-full lg:w-1/2">
        <h1 class="text-green-900 text-6xl font-bold mb-5">Site de don, d'achat et de vente entre particulier</h1>
        <p class=" text-2xl">Chez davshop, vous pouvez faire un don de vos objets qui n'ont plus d'utilités à vos yeux au plus nécéssiteux. Vous pouvez acheter les articles qui sont mises en vente par des particuliers via davshop.
          Vous pouvez aussi vendre vos articles à des particuliers. Il vous suffit de négocier avec votre acheteur via davshop.
          Rendez-vous la vie facile avec davshop</p>
        <!--<button class="text-xl py-3 px-5 bg-green-900 mt-5 font-semibold text-white mb-7 lg:mb-0" >
          <router-link to="/contact">Nous contacter</router-link>
        </button>-->
      </div>
    <div class="w-full lg:w-1/2 h-40px">
      <img src="../assets/DavShop_icon_presta-01.png" alt="">
    </div>
  </section>
    <hr>
    <br>
    <section>
      <div class="my-20 lg:flex justify-between items-center block">
        <h3 class="text-2xl font-semibold mb-2 border-b-4 border-orange-400 rounded">Nos derniers annonces</h3>
      </div>
    <!--Carroussel-->
    <div class="object-cover pt-4 bg-green-50">
      <hooper :settings="hooperSettings" >
        <slide v-for="post in latestPost" :key="post.id">
         <Annonce :item="post"/>
        </slide>

      </hooper>
    </div>
      <!--<div class="my-10 lg:flex justify-between items-center block">
       <a href="Annonces" class="text-2xl font-semibold mb-2 border-b-2 border-black">Consulter nos annonces</a>
       <a href="Annonces" class="text-2xl font-semibold mb-2 border-b-2 border-black">Ajouter une annonce</a>
     </div>-->
  </section>
    <hr>
  <!--Card étapes-->
  <section>
    <div class=" flex flex-nowrap justify-between grid-flow-col gap-4 mt-4" height="50" >
      <div class="block my-2 mx-2 p-6 rounded-lg shadow-lg bg-white  max-w-sm "><img src="../assets/Icone-01.png" alt="" width="80" />
      <p>Votre boutique davshop vous permet de faire beaucoup de chose depuis votre canapé</p></div>
      <div class="block my-2 mx-2 p-6 rounded-lg shadow-lg bg-white  max-w-sm "><img src="../assets/Icone-02.png" alt="" width="80" />
      <p>Le Don, ah! que c'est bien de penser aux autres. Il y'a encore de l'humanité en nous</p></div>
      <div class="block my-2 mx-2 p-6 rounded-lg shadow-lg bg-white  max-w-sm "><img src="../assets/Icone-03.png" alt="" width="80" />
      <p>Vous étes ok, mettez vos articles dans votre panier et hop!</p></div>
      <!-- Add the style and icon you want using the String format -->
      </div>
  </section>
  </main>
</template>
<script>
import { Hooper, Slide } from 'hooper';
import 'hooper/dist/hooper.css';
import { posts } from '../Data';
import Annonce from "@/components/Card/Annonce";




export default {
    name : 'Home',
  components: {
    Annonce,
    Hooper,
    Slide
  },
  computed: {
    latestPost() {
      let latest = posts.length + 1;
      return posts.slice(latest - 9, latest)
    }
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
      }
    }
  }
};
</script>
<style>
</style>