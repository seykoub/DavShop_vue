<template>
  <main >
  <!--Section 1-->
  <section class="my-20 lg:flex block gap-10 items-center">
    <!--Titre de mon site avec description-->
    <!-- Presentation rapide -->
      <div class="w-full lg:w-1/2">
        <h1 class="text-green-900 text-5xl font-bold mb-5">Site de don, d'achat et de vente entre particulier</h1>
        <p class="text-black text-2xl">Chez DAVshop, vous pouvez faire un DON de vos objets qui n'ont plus d'utilités à vos yeux au plus nécéssiteux. Vous pouvez ACHETER les articles qui sont mises en vente par des particuliers via Davshop.
          Vous pouvez aussi VENDRE vos articles à des particuliers. Il vous suffit de négocier avec votre acheteur via Davshop.
          Rendez-vous la vie facile avec Davshop</p>
        <button class="text-xl py-3 px-5 bg-green-900 mt-5 font-semibold text-white mb-7 lg:mb-0" >
          <router-link to="/contact">Nous contacter</router-link>
        </button>
      </div>
    <div class="w-full lg:w-1/2 w-400">
      <img src="../assets/davi.jpg" alt="">
    </div>
  </section>
    <br>
    <section>
    <!--Carroussel-->
    <div class="object-cover pt-4 bg-green-50">
      <hooper :settings="hooperSettings"  style="height: 600px" >
        <slide v-for="post in latestPost" :key="post.id">
         <Annonce :item="post"/>
        </slide>

      </hooper>
    </div>
  </section>
  <!--Card étapes-->
  <section>
    <div></div>
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
<style lang="">

    
</style>